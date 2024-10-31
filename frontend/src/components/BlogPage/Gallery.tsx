import { useState } from 'react'

const galleryData = [
  { id: 1, src: '/BlogPage/Gallery/2.jpg', alt: 'Web Design', category: 'Web Design' },
  { id: 2, src: '/BlogPage/Gallery/1.jpg', alt: 'Branding Goals', category: 'Branding Goals' },
  { id: 3, src: '/BlogPage/Gallery/5.jpg', alt: 'Photography', category: 'Photography' },
  { id: 4, src: '/BlogPage/Gallery/4.jpg', alt: 'True Perfection', category: 'True Perfection' },
  { id: 5, src: '/BlogPage/Gallery/6.jpg', alt: 'Web Design', category: 'Web Design' },
  { id: 6, src: '/BlogPage/Gallery/9.jpg', alt: 'Branding Goals', category: 'Branding Goals' },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Branding Goals', 'Photography', 'True Perfection', 'Web Design'];

  return (
    <>
      <ul className="flex flex-wrap justify-evenly w-[70%] mx-[15%] mb-4 mt-32 text-semibold text-lg">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer p-2 ${
              selectedCategory === category ? 'text-yellow-500 font-bold' : ''
            }`}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center pt-8">
        {selectedCategory === 'All' ? (
          <>
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
          </>
        ) : (
          <>
            <div className="flex flex-col md:flex-row mb-2">
              {galleryData
                .filter((image) => image.category === selectedCategory)
                .slice(0, 1)
                .map((image) => (
                  <div key={image.id} className="mb-8">
                    <img src={image.src} alt={image.alt} className="w-full" />
                  </div>
                ))}
              <div className="flex flex-col md:pl-8">
                <div className="mb-8 flex">
                  {galleryData
                    .filter((image) => image.category === selectedCategory)
                    .slice(1, 3)
                    .map((image) => (
                      <img key={image.id} src={image.src} alt={image.alt} className="mr-8" />
                    ))}
                </div>
                <div className="flex">
                  {galleryData
                    .filter((image) => image.category === selectedCategory)
                    .slice(3, 5)
                    .map((image) => (
                      <img key={image.id} src={image.src} alt={image.alt} className="mr-8" />
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Gallery;
