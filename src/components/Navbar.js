// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 shadow-lg">
      <ul className="flex justify-center space-x-8 text-white">
        <li>
          <Link to="/" className="hover:text-gray-300 text-lg">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300 text-lg">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300 text-lg">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
