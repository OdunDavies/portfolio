import { streamText } from 'ai'
import { chatModel } from '@/lib/ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: chatModel,
    messages,
  })

  return result.toTextStreamResponse()
}
