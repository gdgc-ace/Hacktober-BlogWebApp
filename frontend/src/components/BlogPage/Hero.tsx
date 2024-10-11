const Hero = () => {
  return (
    <>
        <section className="relative h-[calc(85vh)]">
            <img
                src="/BlogPage/Hero.jpg"
                alt="hero png"
                className="absolute inset-0 w-full h-full object-fit"
            />

            <div className="relative flex flex-col justify-center items-center h-full text-center">
                <h1 className=" text-6xl sm:text-8xl md:text-8xl flex flex-col font-bold mb-4 text-primary p-5 text-[#FFFFFF]">
                    <span className="inline">Stories from the</span>
                    
                    <div className="flex tracking-wide">
                            <span className="text-green-600">G</span>
                            <span className="text-red-600">D</span>
                            <span className="text-yellow-600">G</span>
                            <span className="text-blue-600">C</span>
                            &nbsp;Community
                    </div>
                </h1>
            </div>
        </section>
    </>
  )
}

export default Hero