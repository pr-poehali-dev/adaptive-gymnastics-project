import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="https://cdn.poehali.dev/files/2ed625df-f001-4b8f-993a-1b74ade186f8.JPG"
                alt="Центр Жизни"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">Центр Жизни</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="px-3 py-2 text-gray-700 hover:text-primary">
              О методике
            </a>
            <a href="#benefits" className="px-3 py-2 text-gray-700 hover:text-primary">
              Преимущества
            </a>
            <a href="#for-whom" className="px-3 py-2 text-gray-700 hover:text-primary">
              Для кого
            </a>
            <a href="#science" className="px-3 py-2 text-gray-700 hover:text-primary">
              Научная основа
            </a>
            <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-primary">
              Контакты
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Записаться
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              О методике
            </a>
            <a
              href="#benefits"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Преимущества
            </a>
            <a
              href="#for-whom"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Для кого
            </a>
            <a
              href="#science"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Научная основа
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">
              Записаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
