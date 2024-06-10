import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoIcon from "@/assets/logo.png";

export default function Navbar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "About us", path: "#about" },
    { title: "At Cafe", path: "#atcafe" },
    { title: "Get Famous", path: "#earn" },
    { title: "Earn Money", path: "#make" },
    { title: "Make Content Viral", path: "#content" },
  ];

  return (
    <nav className="text-black w-full md:border-0 flex items-center justify-between p-4 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src={LogoIcon} alt="Logo" className="h-[54px] w-[91px]" />
      </div>

      {/* Menu Icon for Mobile */}
      <div className="md:hidden">
        {state ? (
          <X onClick={() => setState(!state)} className="h-8 w-8 cursor-pointer" />
        ) : (
          <Menu onClick={() => setState(!state)} className="h-8 w-8 cursor-pointer" />
        )}
      </div>

      {/* Nav Links */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-transform transform ${
          state ? "translate-x-0" : "translate-x-full"
        } md:static md:flex md:flex-row md:items-center md:justify-end md:translate-x-0 md:bg-transparent space-x-5`}
      >
        {menus.map((menu, index) => (
          <a
            key={index}
            href={menu.path}
            className="block md:inline-block mt-2 md:mt-0 md:ml-6 text-[20px] hover:underline font-light"
            onClick={() => setState(false)} // Close the drawer when a link is clicked
          >
            {menu.title}
          </a>
        ))}
        <Button className="bg-[#006241] px-[35px] py-[28px] rounded-[14px] mt-4 md:mt-0" onClick={() => setState(false)}>
        Join O hi
        </Button>
      </div>

      {/* Overlay */}
      {state && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setState(false)}></div>}
    </nav>
  );
}
