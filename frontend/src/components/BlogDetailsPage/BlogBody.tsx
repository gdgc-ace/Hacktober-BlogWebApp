import { useParams } from "react-router-dom";
import blogData from '../../data/BlogData';

const BlogBody = () => {
    const { id } = useParams();
    const blog = blogData.find((blog) => blog.id === parseInt(id ?? "0")); 

    if (!blog) return <div>Blog not found</div>;

    return (
        <>
            <div className="p-8">
                <h1 className="text-4xl font-semibold mb-4">{blog.title}</h1>
                <img src={blog.image ?? ""} alt={blog.title ?? "Default title"} className="w-full h-64 object-cover rounded-md mb-4" />
                <p className="text-gray-600">{blog.description}</p>
            </div>
        </>
    )
}

export default BlogBody