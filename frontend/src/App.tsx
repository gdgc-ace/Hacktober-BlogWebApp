import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <nav className='text-3xl font-bold underline'>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}

export default App
