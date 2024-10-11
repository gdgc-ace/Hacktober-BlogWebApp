const Hero = () => {
  return (
    <>
      <section className="relative bg-black h-[calc(100vh)]">
        <img
          src="/BlogPage/Hero.jpg"
          alt="hero png"
          className="absolute inset-0 w-full h-full object-fit opacity-20"
        />

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className=" text-6xl sm:text-8xl md:text-8xl flex flex-col  mb-4 uppercase  text-primary p-5 text-[#FFFFFF] tracking-wider">
            <span className="inline font-['Anton'] tracking-wider">Stories from the</span>
            <div className="flex justify-between font-['Anton']">
              {/* <span className="text-green-500">G</span> */}
              {/* <span className="text-red-500">D</span> */}
              {/* <span className="text-yellow-300">G</span> */}
              {/* <span className="text-blue-400">C</span> */}
              <p className=" font-['Anton']  px-5 rounded-[50px]">GDSC</p>
              &nbsp;Community
            </div>
          </h1>
        </div>
      </section>
    </>
  )
}

export default Hero
