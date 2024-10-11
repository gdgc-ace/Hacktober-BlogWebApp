import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/Blog"

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<BlogPage />} /> 
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  )
}

export default App
