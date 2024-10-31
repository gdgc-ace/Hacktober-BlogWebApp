import { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data/BlogData';

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(blogData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="mt-32 font-semibold text-6xl text-center">LATEST BLOG PAGE</div>
      <div className="flex mt-8 px-40 justify-center gap-8">
        {currentItems.map((blog) => (
          <div key={blog.id} className="p-4 rounded-lg">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                src={blog.image}
                alt={blog.title}
              />
            </div>
            <p className="ml-6 mt-4 mb-2 text-lg font-bold">{blog.title}</p>
            <p className="ml-4 border w-[80%] border-black rounded-md"></p>
            <p className="ml-6 my-4 w-[75%] text-md text-gray-600">{blog.description}</p>
            <Link to={`/blog/${blog.id}`} className="ml-6 underline text-md text-blue-600">
              Read More
            </Link>
          </div>
        ))}
      </div>

      <div className="mb-16 flex justify-center items-center mt-16 gap-8">
        <button
          onClick={prevPage}
          className="px-4 w-[5%] py-2 bg-black text-white rounded"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">Page {currentPage}</span>
        <button
          onClick={nextPage}
          className="px-4 w-[5%] py-2 bg-black text-white rounded"
          disabled={currentPage === Math.ceil(blogData.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Carousel;
