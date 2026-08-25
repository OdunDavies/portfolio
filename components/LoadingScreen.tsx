'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 5000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }}
            className="flex flex-col items-center gap-6"
          >
            <span className="flex items-center gap-2 mono-label text-muted">
              <span className="pulse-dot" />
              LOADING
            </span>
            <span className="font-display font-bold tracking-tight text-ink" style={{ fontSize: '22px', letterSpacing: '-0.02em' }}>
              Odunayo Idowu
            </span>
            <span className="font-mono text-xs tracking-[0.2em] text-muted">Forward-Deployed Engineer</span>
            <span className="h-px w-32 bg-border overflow-hidden">
              <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '0%', transition: { duration: 4.5, ease: [0.22, 1, 0.36, 1] } }}
                className="block h-full w-full bg-accent"
              />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
