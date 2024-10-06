
const HomePage = () => {
  return (
    <header>
      {/* Hero Container */}
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:pt-20">
        {/* Component */}
        <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
          {/* Hero Title */}
          <h1 className="mb-4 text-4xl font-bold md:text-7xl">
            Simplify Meeting Scheduling
          </h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
          {/* Hero Button */}
          <div className="flex items-stretch justify-center">
            <a
              href="#"
              className="mr-5 inline-block rounded-md bg-black px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8"
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex flex-row items-center justify-center rounded-md border border-solid border-black px-6 py-3 font-bold text-black"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg"
                alt=""
                className="mr-2 inline-block max-h-4 w-5"
              />
              <p className="text-sm text-black sm:text-base">Watch Demo</p>
            </a>
          </div>
        </div>
        {/* Hero Image */}
      </div>
      <div className="rounded-2xl p-3 md:mx-10 bg-gray-50">
        <div className="rounded-2xl max-h-[512px] overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="inline-block w-full object-cover "
          />
        </div>
      </div>
    </header>
  )
}

export default HomePage
