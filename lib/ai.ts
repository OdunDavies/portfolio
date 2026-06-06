import { createOpenAI } from '@ai-sdk/openai'

export const xai = createOpenAI({
  baseURL: 'https://api.x.ai/v1',
  apiKey: process.env.XAI_API_KEY ?? '',
})

export const chatModel = xai('grok-4.1-fast-non-reasoning')
