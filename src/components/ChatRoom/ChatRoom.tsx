export const ChatRoom = ({ hidden = false }: { hidden?: boolean }) => {
  const handleSubmitUserMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const message = e.currentTarget.elements.namedItem(
      'chat'
    ) as HTMLInputElement
    console.log(message.value)
  }

  return !hidden ? (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmitUserMessage}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
          <button
            type="button"
            className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <textarea
            id="chat"
            rows={1}
            className="mx-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
          <button
            type="submit"
            className="inline-flex cursor-pointer justify-center rounded-full p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="h-6 w-6 rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </form>

      <p className="mt-5">
        This textarea chatroom component is part of a larger, open-source
        library of Tailwind CSS components. Learn more by going to the official{' '}
        <a className="text-blue-600 hover:underline" href="#" target="_blank">
          Flowbite Documentation
        </a>
        .
      </p>
      <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  ) : null
}
