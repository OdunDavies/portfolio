'use client'

import { useEffect, useRef } from 'react'

/** Enhance visible content after hydration; nothing is hidden in server HTML. */
export function useQuietReveal<T extends HTMLElement>(refreshKey: unknown = null) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') return

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const animations = new Set<Animation>()
    const cancel = () => {
      animations.forEach(animation => animation.cancel())
      animations.clear()
    }
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer.disconnect()
      if (preference.matches || document.documentElement.dataset.prototypeReduced === 'true') return

      const rows = element.querySelectorAll<HTMLElement>('[data-reveal-row]')
      const targets = rows.length ? Array.from(rows) : [element]
      targets.forEach((target, index) => {
        if (typeof target.animate !== 'function') return
        const animation = target.animate(
          [
            { opacity: 0.55, transform: 'translateY(6px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 320, delay: Math.min(index, 4) * 45, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
        )
        animations.add(animation)
        animation.finished.then(() => animations.delete(animation), () => animations.delete(animation))
      })
    }, { threshold: 0.08 })

    const onPreferenceChange = () => {
      if (preference.matches) {
        observer.disconnect()
        cancel()
      }
    }
    const onVisibilityChange = () => {
      if (document.hidden) cancel()
    }
    preference.addEventListener('change', onPreferenceChange)
    document.addEventListener('visibilitychange', onVisibilityChange)
    observer.observe(element)

    return () => {
      observer.disconnect()
      cancel()
      preference.removeEventListener('change', onPreferenceChange)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [refreshKey])

  return ref
}
