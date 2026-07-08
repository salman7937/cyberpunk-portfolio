import { streamText } from 'ai'
import { cookies } from 'next/headers'
import { AGENT_FACTS, EMAIL, NAME } from '@/lib/data'

const MAX_MESSAGES = 5

const SYSTEM_PROMPT = `You are a terse terminal agent embedded in ${NAME}'s portfolio site.

Answer questions about ${NAME}'s work using ONLY the facts below. Rules:
- Under 60 words. Plain text only. No markdown, no emoji, no bullet points, no headings.
- If the answer is not in the facts, reply exactly: insufficient data
- Never invent projects, numbers, employers, or dates.
- Speak like a machine log: lowercase, direct, factual.

FACTS:
${AGENT_FACTS}`

export async function POST(req: Request) {
  let question: string
  try {
    const body = await req.json()
    question = String(body?.question ?? '').slice(0, 500)
  } catch {
    return new Response('insufficient data', { status: 400 })
  }

  if (!question.trim()) {
    return new Response('insufficient data', { status: 400 })
  }

  // Rate limit: 5 messages per visitor session
  const cookieStore = await cookies()
  const count = Number(cookieStore.get('agent_msgs')?.value ?? '0')
  if (count >= MAX_MESSAGES) {
    return new Response(`session limit reached · email ${EMAIL}`, {
      status: 429,
    })
  }
  cookieStore.set('agent_msgs', String(count + 1), {
    maxAge: 60 * 60 * 24,
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  })

  const result = streamText({
    model: 'anthropic/claude-sonnet-4.6',
    system: SYSTEM_PROMPT,
    prompt: question,
    maxOutputTokens: 200,
  })

  return result.toTextStreamResponse()
}
