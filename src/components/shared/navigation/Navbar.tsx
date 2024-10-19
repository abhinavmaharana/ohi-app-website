import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import LogoIcon from "@/assets/logonew1.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const menus = [
    { title: "About us", path: "/#about" },
    { title: "At Cafe", path: "/#atcafe" },
    { title: "Get Famous", path: "/#earn" },
    { title: "Earn Money", path: "/#make" },
    { title: "Make Content Viral", path: "/#content" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed bg-white top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg rounded-full px-[40px] mt-5" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between p-3">
        {/* Logo */}
        <Link to="/">
          <img src={LogoIcon} alt="Logo" className="h-[40px] w-[80px]" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {menus.map((menu, index) => (
            <a
              key={index}
              href={menu.path}
              className="text-[18px] hover:underline text-[#3BA0FF] poppins-medium"
            >
              {menu.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          {isMenuOpen ? (
            <X onClick={() => setMenuOpen(!isMenuOpen)} className="h-8 w-8 cursor-pointer text-black" />
          ) : (
            <Menu onClick={() => setMenuOpen(!isMenuOpen)} className="h-8 w-8 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {menus.map((menu, index) => (
          <a
            key={index}
            href={menu.path}
            className="text-[24px] mb-4 text-[#3BA0FF] poppins-medium"
            onClick={() => setMenuOpen(false)} // Close menu after clicking a link
          >
            {menu.title}
          </a>
        ))}
      </div>

      {/* Overlay Background when Mobile Menu is Open */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setMenuOpen(false)}></div>
      )}
    </nav>
  );
}
