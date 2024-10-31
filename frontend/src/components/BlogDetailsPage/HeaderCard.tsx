import { useParams } from "react-router-dom";
import blogData from '../../data/BlogData';

const HeaderCard = () => {

  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id ?? "0")); 

  if (!blog) return <div>Blog not found</div>;

  return (
    <>
        <div className="pt-[120px] flex mx-auto w-[50%]">
          <div className="bg-black p-4 rounded-full mr-4">
            <i className="fa-solid fa-user text-white"></i>
          </div>
          <div className="w-full flex justify-between">
             <div className="">
              <h2>Dhruv Bhatada</h2>
              <h3>Published on GDGC ACE</h3>
             </div>
            <div className="items-end flex text-right">
              <h2>&#8203; </h2>
              <h2>31/10/24</h2>
            </div>
          </div>
        </div>
        <div className="border w-[50%] mt-4 mx-auto"/>
    </>
  )
}

export default HeaderCard