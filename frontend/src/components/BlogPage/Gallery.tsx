
const Gallery = () => {
  return (
    <>
        <ul className="flex flex-wrap justify-evenly w-[70%] mx-[15%] mb-4 mt-32 text-semibold text-lg">
            <li className="active"><a href="#" className="text-yellow-500 p-2">All</a></li>
            <li><a href="#" className="p-2">Branding Goals</a></li>
            <li><a href="#" className="p-2">Photography</a></li>
            <li><a href="#" className="p-2">True Perfection</a></li>
            <li><a href="#" className="p-2">Web Design</a></li>
        </ul>

        <div className="flex flex-col items-center pt-8">
            <div className="flex flex-col md:flex-row mb-2">
                <div className="mb-8">
                    <img src="/BlogPage/Gallery/2.jpg" alt="Web Design" className="w-full" />
                </div>
                <div className="flex flex-col md:pl-8">
                    <div className="mb-8 flex">
                        <img src="/BlogPage/Gallery/1.jpg" alt="Top Image" className="mr-8" />
                        <img src="/BlogPage/Gallery/5.jpg" alt="Top Right Image" />
                    </div>
                    <div className="flex">
                        <img src="/BlogPage/Gallery/4.jpg" alt="Bottom Left Image" className="mr-8" />
                        <img src="/BlogPage/Gallery/6.jpg" alt="Bottom Right Image" />
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row mb-2">
                <div className="flex flex-col">
                    <div className="mb-32 flex">
                        <img src="/BlogPage/Gallery/1.jpg" alt="Top Image" className="mr-8" />
                        <img src="/BlogPage/Gallery/5.jpg" alt="Top Right Image" />
                    </div>
                </div>
                <div className="pl-8">
                    <img src="/BlogPage/Gallery/9.jpg" alt="Web Design" className="w-full" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery