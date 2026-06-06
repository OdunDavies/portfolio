'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

type Message = { role: 'user' | 'assistant'; content: string }

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [streaming, setStreaming] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#chat') {
        setOpen(true)
        window.history.replaceState(null, '', window.location.pathname)
      }
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || streaming) return

    const userMsg: Message = { role: 'user', content: input }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setStreaming(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok || !res.body) {
        setStreaming(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        assistantContent += chunk
        setMessages((prev) => {
          const next = [...prev]
          next[next.length - 1] = { role: 'assistant', content: assistantContent }
          return next
        })
      }
    } catch {
      // ignore
    } finally {
      setStreaming(false)
    }
  }, [input, messages, streaming])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="mb-2 flex h-[480px] w-[360px] flex-col rounded-2xl border border-border bg-surface-raised shadow-2xl sm:w-[400px]">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="text-sm font-medium text-ink">AI Chat</span>
            <button
              onClick={() => setOpen(false)}
              className="flex size-6 items-center justify-center rounded-md text-muted hover:text-ink transition-colors"
              aria-label="Close chat"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M2 2l10 10M12 2L2 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <p className="mt-12 text-center text-sm text-muted">
                Ask me anything — code, ideas, or just chat.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-accent text-background'
                      : 'bg-surface-highest text-ink'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-border p-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                disabled={streaming}
                className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-sm text-ink placeholder:text-muted outline-none focus:border-accent/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || streaming}
                className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-background hover:opacity-90 transition-opacity disabled:opacity-30"
                aria-label="Send"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 7h12M8 2l5 5-5 5" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex size-12 items-center justify-center rounded-full bg-accent text-background shadow-lg hover:opacity-90 transition-opacity"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 4l10 10M14 4L4 14" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 1.5a6.75 6.75 0 0 1 6.75 6.75v2.25a2.25 2.25 0 0 1-2.25 2.25H9a6.75 6.75 0 0 1-6.75-6.75V5.25A2.25 2.25 0 0 1 4.5 3h.75" />
            <path d="M6 12.75V15a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 12 15v-2.25" />
          </svg>
        )}
      </button>
    </div>
  )
}
