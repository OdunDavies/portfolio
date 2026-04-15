import type { ProcessStepData } from '@/lib/types'

type ProcessStepProps = ProcessStepData

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="border-t border-border pt-6">
      <p className="font-mono text-accent text-sm mb-3">{number}</p>
      <h3 className="text-lg font-medium text-ink mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  )
}
