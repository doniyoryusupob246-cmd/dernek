'use client'

import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/components/ui'

export function CopyButton({ value, label = 'Kopyala', className }: { value: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
        } catch {
          // Clipboard can be blocked (e.g. insecure context); the value stays selectable.
        }
      }}
      className={cn(
        'inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition',
        copied ? 'bg-brand-600 text-white' : 'bg-gold-500 text-brand-950 hover:bg-gold-400',
        className,
      )}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? 'Kopyalandı' : label}</span>
    </button>
  )
}
