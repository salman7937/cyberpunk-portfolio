'use client'

import { useEffect, useState } from 'react'

function formatPK(date: Date) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Karachi',
  }).format(date)
}

export default function LocalClock() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(formatPK(new Date()))
    const t = setInterval(() => setTime(formatPK(new Date())), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <span suppressHydrationWarning>
      {time ?? '--:--:--'} PKT
    </span>
  )
}
