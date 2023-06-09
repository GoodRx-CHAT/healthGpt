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

export async function submitUserMessage(message: string): Promise<void> {
  const response = await fetch('/api/submitUserMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
