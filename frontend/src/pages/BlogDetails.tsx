import { useEffect } from 'react'
import Header from '../components/BlogDetailsPage/HeaderCard'
import Body from '../components/BlogDetailsPage/BlogBody'
import Carousel from '../components/BlogPage/Carousel'

const BlogDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    
    return (
        <>
            <Header />
            <Body />
            <Carousel />
        </>
    );
};

export default BlogDetail;
