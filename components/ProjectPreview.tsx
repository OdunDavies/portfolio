'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import type { Project } from '@/lib/types'

type Props = {
  project: Pick<Project, 'title' | 'imageSrc' | 'imageAlt' | 'imageWidth' | 'imageHeight'>
  sizes: string
  preload?: boolean
}

export default function ProjectPreview({ project, sizes, preload = false }: Props) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogId = useId()
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (!open || !dialog) return

    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View the full ${project.title} screenshot`}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        className="group/preview block w-full text-left"
      >
        <span className="block border border-border bg-panel transition-colors duration-150 group-hover/preview:border-accent group-focus-visible/preview:border-accent">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes={sizes}
            preload={preload}
            className="block h-auto w-full"
          />
        </span>
        <span className="mono-label mt-2 flex min-h-8 items-center justify-between gap-3 text-muted group-hover/preview:text-accent group-focus-visible/preview:text-accent">
          <span>Full preview</span><span aria-hidden="true">↗</span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id={dialogId}
        aria-labelledby={titleId}
        onClose={() => setOpen(false)}
        onClick={event => { if (event.target === event.currentTarget) setOpen(false) }}
        className="m-auto max-h-[92dvh] w-[94vw] max-w-6xl overflow-y-auto border border-border bg-background p-0 text-ink shadow-xl backdrop:bg-ink/75"
      >
        {open && (
          <>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-border bg-background px-4 py-3 md:px-6">
              <h2 id={titleId} className="font-display text-sm font-semibold md:text-base">{project.title}</h2>
              <button type="button" autoFocus onClick={() => setOpen(false)} className="quiet-action min-h-11 shrink-0 border border-border px-4 font-mono text-xs hover:border-accent hover:text-accent">
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="relative m-3 h-[70dvh] bg-panel md:m-6">
              <Image src={project.imageSrc} alt={project.imageAlt} fill sizes="(min-width: 1280px) 1104px, 90vw" className="object-contain" />
            </div>
            <div className="border-t border-border px-4 py-3 md:px-6">
              <a href={project.imageSrc} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-mono text-xs text-accent underline underline-offset-4">
                Open full-resolution image ↗
              </a>
            </div>
          </>
        )}
      </dialog>
    </>
  )
}
