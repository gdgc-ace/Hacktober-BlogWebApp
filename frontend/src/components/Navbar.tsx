import { Link, useNavigate } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section>
      <nav className=" flex justify-between items-center border  w-full px-5 py-16 md:px-10 md:py-10">
        <Link to={'/'}>
          <h1 className="font-bold text-2xl">Logo</h1>
        </Link>
        <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
        <div className="flex items-center gap-4">
          <Button onClick={()=>navigate('/login')}>Login</Button>
          <ModeToggle />
        </div>
      </nav>
    </section>
  );
}

export default Navbar
