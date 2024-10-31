import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails"; 
import About from "./components/AboutPage/About";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
