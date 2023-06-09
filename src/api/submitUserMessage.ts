/**
 * Submits a user message to the server.
 * @param message The message to submit.
 * @returns A promise that resolves when the message has been submitted.
 * @throws If the server returns an error.
 * @example
 * ```ts
 * submitUserMessage('Hello, world!')
 * ```
 * @category API
 * @module submitUserMessage
 **/

import { useEffect, useState } from 'react'

export function submitUserMessage(message: string) {
  return fetch('/api/submitUserMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })
}

function BuildPromptMessage(message: string) {
  const prompts = useChatPromptsForGpt()
  return {
    message,
    timestamp: Date.now()
  }
}

type ChatPrompt = {
  message: string
  timestamp: number
}

function useChatPromptsForGpt(): ChatPrompt[] {
  const [prompts, setPrompts] = useState<ChatPrompt[]>([])

  useEffect(() => {
    fetch('/api/getChatPromptsForGpt')
      .then((res) => res.json())
      .then(setPrompts)
  }, [])

  return prompts
}
