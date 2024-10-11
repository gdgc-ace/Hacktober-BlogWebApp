const Banner = () => {
  return (
    <section className="Banner">
      <div className="border-2 py-16 w-full flex flex-col justify-center h-auto py-8">
        <h1 className="sm:text-4xl font-['Anton'] text-center font-semibold">
          Explore, Learn & Innovate with GDGC
        </h1>
        <button className="bg-[#FEBB00] mx-[45%] mt-8 pt-4 py-4 text-lg rounded-md text-white">
          <a href="">JOIN COMMUNITY</a>
        </button>
      </div>
    </section>
  );
}

export default Banner;
