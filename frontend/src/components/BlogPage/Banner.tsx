const Banner = () => {
  return (
    <section className="Banner">
      <div className='border-2 w-full flex flex-col justify-center h-auto py-8'>
        <h1 className='sm:text-5xl text-center font-bold'>
          Explore, Learn & Innovate with GDGC
        </h1>
        <button className="bg-[#2B8C44] mx-[45%] mt-8 px-4 py-4 font-semibold rounded-md text-white">
                <a href="">JOIN COMMUNITY</a>
        </button>
      </div>
    </section>
  )
}

export default Banner