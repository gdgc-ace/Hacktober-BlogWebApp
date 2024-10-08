import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <nav className='text-3xl font-bold underline'>Navbar</nav> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
