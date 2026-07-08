export const EMAIL = "salman@example.com";
export const NAME = "Salman";

export type Artifact =
  | { kind: "code"; title: string; code: string }
  | { kind: "diagram"; title: string }
  | { kind: "trace"; title: string; lines: string[] };

export interface Project {
  name: string;
  description: string;
  stack: string;
  meta: string; // YEAR · ROLE · OUTCOME
  artifact: Artifact;
}

export const projects: Project[] = [
  {
    name: "Agent Ops Console",
    description:
      "Support teams were triaging incoming tickets by hand, losing hours to routing mistakes. An autonomous agent now reads, classifies, and drafts responses for every ticket, escalating only when its confidence drops below threshold.",
    stack: "next.js, typescript, ai sdk, anthropic, postgres, drizzle",
    meta: "2025 · lead engineer · 78% of tickets resolved without human touch",
    artifact: {
      kind: "trace",
      title: "agent decision trace — live from production logs",
      lines: [
        "> ticket #4821 received · classifying",
        "  ├ intent: billing_dispute · confidence 0.94",
        "  ├ retrieving account context (3 queries)",
        "  ├ drafting response · tone: apologetic, factual",
        "  └ policy check: refund ≤ $50 · auto-approve",
        "> resolved in 2.3s · no human escalation",
      ],
    },
  },
  {
    name: "Migrio",
    description:
      "A multi-role migration platform where admins, agents, and applicants each see a different system. Permissions were the hard part: a single CASL ability model drives every route guard, UI state, and database query across all three roles.",
    stack: "next.js, casl, node.js, postgresql, prisma, redis",
    meta: "2024 · full-stack engineer · 3 roles, 1 permission model, 0 authz bugs shipped",
    artifact: { kind: "diagram", title: "the CASL ability model" },
  },
  {
    name: "Realtime Chat Backend",
    description:
      "Messages were dropping under load and there was no delivery guarantee. Rebuilt the pipeline around Redis streams with per-room ordering and at-least-once delivery, then encrypted message payloads at rest.",
    stack: "node.js, socket.io, redis, docker, postgresql",
    meta: "2023 · backend engineer · 12k concurrent connections per node",
    artifact: {
      kind: "code",
      title: "the delivery guarantee — dedup on consumer side",
      code: `async function deliver(room: string, msg: Message) {
  // at-least-once: ack only after fan-out completes
  const id = await redis.xadd(\`room:\${room}\`, "*", "msg", pack(msg));
  const sockets = await io.in(room).fetchSockets();
  await Promise.allSettled(
    sockets.map((s) => emitWithAck(s, "msg", { id, ...msg }))
  );
  await redis.xack(\`room:\${room}\`, GROUP, id);
}`,
    },
  },
  {
    name: "Inventory Analytics System",
    description:
      "A retailer was reconciling stock in spreadsheets a day late. Built a real-time inventory dashboard with automated reorder reports, so out-of-stock events are caught before they cost a sale.",
    stack: "react, next.js, postgresql, prisma, cron",
    meta: "2022 · full-stack engineer · reporting lag cut from 24h to live",
    artifact: {
      kind: "trace",
      title: "the reorder decision — nightly job output",
      lines: [
        "> nightly reorder scan · 4,212 SKUs",
        "  ├ velocity model: 14-day trailing window",
        "  ├ flagged: 37 SKUs below safety stock",
        "  ├ drafted POs for 3 suppliers",
        "  └ anomaly: SKU-2291 velocity +340% · alerting",
        "> report delivered 04:00 PKT",
      ],
    },
  },
];

/** Compact fact sheet the terminal agent is allowed to answer from. */
export const AGENT_FACTS = `
Name: ${NAME}
Role: Full-stack engineer specializing in AI agents and production web systems.
Experience: 4 years shipping. Based in Pakistan, works with teams in Europe (remote, overlapping European hours).
Availability: Open to new engagements — contact via email at ${EMAIL}.

Core stack: TypeScript, Next.js (App Router), React, Node.js, PostgreSQL, Prisma/Drizzle, Redis, Tailwind, AI SDK, Anthropic/OpenAI APIs, Docker, CASL.

Projects:
1. Agent Ops Console (2025, lead engineer): autonomous support-ticket agent. Reads, classifies, drafts responses; escalates below confidence threshold. 78% of tickets resolved with no human touch. Stack: Next.js, AI SDK, Anthropic, Postgres, Drizzle.
2. Migrio (2024, full-stack engineer): multi-role migration platform (admins, agents, applicants). A single CASL ability model drives every route guard, UI state, and database query for all 3 roles. Zero authorization bugs shipped. Stack: Next.js, CASL, Node.js, PostgreSQL, Prisma, Redis.
3. Realtime Chat Backend (2023, backend engineer): rebuilt message pipeline on Redis streams with per-room ordering and at-least-once delivery, payloads encrypted at rest. 12k concurrent connections per node. Stack: Node.js, Socket.io, Redis, Docker.
4. Inventory Analytics System (2022, full-stack engineer): real-time inventory dashboard with automated reorder reports; reporting lag cut from 24 hours to live. Stack: React, Next.js, PostgreSQL, Prisma.

Hardest bug fixed: a message-ordering race in the chat backend where two Redis consumers in the same group could ack out of order under failover, silently dropping messages. Fixed with per-room stream partitioning and consumer-side dedup with explicit ack after fan-out.

The CASL model (Migrio): abilities are defined once per role in a shared package, serialized to the client, and enforced three times — in Next.js middleware (route access), in React (UI rendering via Can components), and in Prisma query filters (accessibleBy). One definition, three enforcement points.
`.trim();
