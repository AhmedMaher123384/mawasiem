import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/about', label: 'من نحن' },
    { path: '/partners', label: 'شركاء النجاح' },
    { path: '/contact', label: 'وسائل التواصل' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-green-800 to-green-500 shadow-lg">
      {/* ارتفاع navbar كبير ليتّسع الشعار */}
      <div className="flex items-center justify-between h-24 px-6">
        {/* الشعار */}
        <Link to="/" className="flex-shrink-0 transform -translate-y-8">
  <img
    src={logo}
    alt="Mawasim Logo"
    className="h-28 w-auto object-contain"
  />
</Link>


        {/* زر الهامبرغر */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-green-300 focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* القائمة الجانبية المنبثقة */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-gradient-to-r from-green-800 to-green-500 shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 60 }}
      >
        {/* شعار أكبر داخل القائمة */}
        <div className="pt-8 pb-4 flex justify-center">
          <img
            src={logo}
            alt="Mawasim Logo"
            className="h-32 w-auto object-contain"
          />
        </div>
        <div className="p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xl font-medium block transition-colors duration-200 py-4 px-8 text-right rounded-lg my-2 ${
                isActive(item.path)
                  ? 'bg-green-700 text-white'
                  : 'text-white hover:bg-green-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* خلفية شفافة لغلق القائمة عند النقر خارجها */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default Navbar;
