import { useParams } from "react-router-dom";
import blogData from '../../data/BlogData';

const BlogBody = () => {
    const { id } = useParams();
    const blog = blogData.find((blog) => blog.id === parseInt(id ?? "0")); 

    if (!blog) return <div>Blog not found</div>;

    return (
        <>
            <div className="p-8 px-40 flex flex-col justify-center text-left align-text">
                <div className="flex w-[60%] justify-between mx-auto items-center mb-4">
                    <h1 className="text-4xl font-semibold ">{blog.title}</h1>
                    <div className="text-right justify-center flex ">
                        <h2>- Dhruv Bhatada</h2>
                    </div>
                </div>
                <img src={blog.image ?? ""} alt={blog.title ?? "Default title"} className="w-[60%] mx-auto object-cover rounded-md mb-4" />
                <p className="text-gray-600 w-[60%] mx-auto">{blog.description}</p>
                <p className="text-gray-600 w-[60%] mx-auto">
                Wikipedia[c] is a free content online encyclopedia written and maintained by a community of volunteers, known as Wikipedians, through open collaboration and the wiki software MediaWiki. Wikipedia is the largest and most-read reference work in history,[3][4] and is consistently ranked among the ten most visited websites; as of August 2024, it was ranked fourth by Semrush,[5] and seventh by Similarweb.[6] Founded by Jimmy Wales and Larry Sanger on January 15, 2001, Wikipedia has been hosted since 2003 by the Wikimedia Foundation, an American nonprofit organization funded mainly by donations from readers.[7]

Initially only available in English, editions of Wikipedia in more than 300 other languages have been developed. The English Wikipedia, with its almost 6.9 million articles, is the largest of the editions, which together comprise more than 63 million articles and attract more than 1.5 billion unique device visits and 13 million edits per month (about 5 edits per second on average) as of April 2024.[W 1] In July 2024, over 25% of Wikipedia's traffic was from the United States, followed by Japan at 6.2%, the United Kingdom at 5.8%, Russia at 5.2%, Germany at 5%, and the remaining 51% split among other countries.[8]

Wikipedia has been praised for its enablement of the democratization of knowledge, extent of coverage, unique structure, and culture. It has been criticized for exhibiting systemic bias, particularly gender bias against women and geographical bias against the Global South (Eurocentrism).[9][10] While the reliability of Wikipedia was frequently criticized in the 2000s, it has improved over time, receiving greater praise from the late 2010s onward[3][11][12] while becoming an important fact-checking site.[13][14] Wikipedia has been censored by some national governments, ranging from specific pages to the entire site.[15][16] Articles on breaking news are often accessed as sources for frequently updated information about those events.[17][18]
                </p>
            </div>
            
            <div className="border w-[50%] mt-4 mx-auto"/>

            <div className="pt-8 flex items-center mx-auto w-[50%]">
                <div className="bg-black p-4 rounded-full mr-4">
                    <i className="fa-solid fa-user text-white"></i>
                </div>
                <div className="w-full flex justify-between">
                    <div className="">
                        <h2>Dhruv Bhatada</h2>
                        <a className="hover:cursor-pointer">
                            <i className="fa-brands fa-instagram pr-2"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="">
                        <button className="bg-yellow-400 text-white px-4 py-2 rounded-full">FOLLOW</button>
                    </div>
                </div>
            </div>

            <div className="border w-[50%] mt-4 mx-auto"/>
        </>
    )
}

export default BlogBody