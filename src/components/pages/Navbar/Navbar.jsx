import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="flex py-6 shadow-lg justify-center items-center gap-10 text-xl font-bold">
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/blogs'}>Blogs</Link>
        <Link to={'/users'}>Our Users</Link>
        <Link to={'/posts'}>User Posts</Link>
      </nav>
    </div>

  );
};

export default Navbar;
