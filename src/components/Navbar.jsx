import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              Koli Go
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">Accueil</Link>
            <Link to="#services" className="text-gray-700 hover:text-primary">Services</Link>
            <Link to="#about" className="text-gray-700 hover:text-primary">À propos</Link>
            <Link to="#contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Accueil</Link>
              <Link to="#services" className="block px-3 py-2 text-gray-700 hover:text-primary">Services</Link>
              <Link to="#about" className="block px-3 py-2 text-gray-700 hover:text-primary">À propos</Link>
              <Link to="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;