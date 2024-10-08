import { useParams } from "react-router-dom"

const BlogPage = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-screen">

      <h1>Blog Id : {id}</h1>
    </div>
  )
}

export default BlogPage
