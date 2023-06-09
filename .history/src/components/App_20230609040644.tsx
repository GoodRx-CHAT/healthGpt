import Avatar from 'components/Avatar'

function App() {
  const startChat = () => {
    window.open(
      'https://app.hearty.ai/healthgpt/healthgpt',
      'hearty',
      'width=400,height=600'
    )
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="h-screen sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <div className="my-4">
              <Avatar
                size="large"
                src="https://robohash.org/healthgpt?set=set2&bgset=bg1&size=200x200"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to HealthGPT!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              HealthGPT is a platform and tool for Chat Health Assistance Teams,
              CHAT. We hope you enjoy your stay and find the platform useful. Oh
              ya, checkout our upcoming events with Hearty!
            </p>
          </div>
          <div>
            <div className="my-10">
              <button
                onClick={startChat}
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Give it a try
              </button>
              <div
                aria-hidden="true"
                className="pointer-events-none mt-10 md:mt-0 lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://picsum.photos/600?random=1"
                          alt=""
                          className="h-full w-full bg-indigo-100 object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://picsum.photos/600?random=2"
                          alt=""
                          className="h-full w-full bg-indigo-100 object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://picsum.photos/600?random=3"
                          alt=""
                          className="h-full w-full bg-indigo-100 object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://picsum.photos/600?random=4"
                          alt=""
                          className="h-full w-full bg-indigo-100 object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://picsum.photos/600?random=5"
                          alt=""
                          className="h-full w-full bg-indigo-100 object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://picsum.photos/600?random=6"
                          alt=""
                          className="h-full w-full bg-indigo-100 object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://picsum.photos/600?random=7"
                          alt=""
                          className="h-full w-full bg-indigo-100 object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
