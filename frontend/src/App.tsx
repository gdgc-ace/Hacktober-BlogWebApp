import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails"; 
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
