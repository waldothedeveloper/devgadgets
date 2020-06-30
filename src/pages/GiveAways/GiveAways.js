import React from "react"
// import dance_party from "../../assets/dance_party.mp4"

const GiveAways = () => {
  return (
    <div className="relative bg-gray-700">
      <div className="h-64 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://media.giphy.com/media/26AHNZUiCai8sBmmY/giphy.gif"
          alt="people at a party dancing"
        />
        {/* <video
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          muted
          loop
        >
          <source
            src="https://media.giphy.com/media/4WS0yI6PXqd3i/giphy.mp4"
            type="video/mp4"
          />
        </video> */}
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="text-base leading-6 font-semibold tracking-wider text-gray-300">
            Aaaaaaannnnnd....
          </div>
          <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 ">
            It's GiveAway time! &nbsp;
            <span role="img" alt="celebrate" aria-labelledby="celebrate">
              🎉
            </span>
            <span role="img" alt="celebrate" aria-labelledby="celebrate">
              🎈
            </span>
            <span role="img" alt="celebrate" aria-labelledby="celebrate">
              🍾
            </span>
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-300">
            Winning is fun… Beyond any doubt. Be that as it may, winning isn’t
            the point. Needing to win is the point. Not surrendering is the
            point. Never easing up is the point. Failing to be happy with what
            you’ve done is the point.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-500 hover:bg-teal-400 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Enter to Win!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiveAways
