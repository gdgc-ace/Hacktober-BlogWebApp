import { Card, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {

  const cards = [
    {
      title: "The Rise of AI in Everyday Life",
      description: "An exploration of how artificial intelligence is revolutionizing industries from healthcare to education.",
      author: "John Doe",
      date: "October 5, 2024",
      url: "/blog-1"
    },
    {
      title: "JavaScript: The Future of Web Development",
      description: "A comprehensive guide on how JavaScript continues to evolve, shaping the future of web development.",
      author: "Jane Smith",
      date: "September 25, 2024",
      url: "/blog-2"

    },
    {
      title: "Understanding Cloud Computing in 2024",
      description: "This article breaks down the core components of cloud computing and why it's important for modern businesses.",
      author: "Alex Johnson",
      date: "October 2, 2024",
      url: "/blog-3"
    },
    {
      title: "Cybersecurity Trends You Need to Know",
      description: "Discover the top cybersecurity trends and how businesses can safeguard their data in an increasingly digital world.",
      author: "Emily Davis",
      date: "October 3, 2024",
      url: "/blog-4"
    }
  ];

  useEffect(() => {

  }, [])

  return (
    <header>
      <div className="flex h-full px-20">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full mx-auto gap-10 p-10">
          {cards.map((card) => (
            <Link to={card.url}>
              <Card className="flex flex-col gap-4 p-4">
                <img src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover" height={'200px'} />
                <CardTitle className="font-bold">{card.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
                <span>{card.date}</span>
                <p>{card.author}</p>
              </Card>
            </Link>

          ))}
        </div>
      </div>
    </header>
  )
}

export default HomePage
