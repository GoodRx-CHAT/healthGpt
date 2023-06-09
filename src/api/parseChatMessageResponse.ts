interface ChatMessageResponse {
  data: {
    chatMessage: {
      id: string
      message: string
      timestamp: number
    }
  }
}

function parseChatMessageResponse(response: ChatMessageResponse) {
  const { data } = response
  const { chatMessage } = data
  return chatMessage
}

export default parseChatMessageResponse
