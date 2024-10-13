import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoIcon from "@/assets/logonew.png";
import { Link } from "react-router-dom";
// import PlatformDialog from "../platform-dialog/PlatformDialog";
// import { Button } from "@/components/ui/button";
// import PlatformDialog from "../platform-dialog/PlatformDialog";

export default function Navbar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "About us", path: "/#about" },
    { title: "At Cafe", path: "/#atcafe" },
    { title: "Get Famous", path: "/#earn" },
    { title: "Earn Money", path: "/#make" },
    { title: "Make Content Viral", path: "/#content" },
  ];

  return (
    <nav className="text-black bg-white rounded-full w-full md:border-0 flex items-center p-4 relative">
      {/* Logo */}
      <div className="flex items-center space-x-24">
        <Link to="/"><img src={LogoIcon} alt="Logo" className="h-[47px] w-[90px]" /></Link>
        {/* Nav Links */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-transform transform ${
          state ? "translate-x-0" : "translate-x-full"
        } md:static md:flex md:flex-row md:items-center md:justify-end md:translate-x-0 md:bg-transparent space-x-16`}
      >
        {menus.map((menu, index) => (
          <a
            key={index}
            href={menu.path}
            className="block md:inline-block mt-2 md:mt-0 md:ml-6 text-[24px] hover:underline text-[#3BA0FF] poppins-medium"
            onClick={() => setState(false)} // Close the drawer when a link is clicked
          >
            {menu.title}
          </a>
        ))}
       {/* <a href="https://chat.ohiapp.com/chatroom">
       <Button className="bg-[#006241] hover:bg-[#006241] px-[35px] py-[28px] rounded-[14px] mt-4 md:mt-0">
          Join O hi
        </Button>
       </a> */}
       {/* <PlatformDialog /> */}
      </div>
      </div>

      {/* Menu Icon for Mobile */}
      <div className="md:hidden z-50 ml-36">
        {state ? (
          <X onClick={() => setState(!state)} className="h-8 w-8 cursor-pointer text-black" />
        ) : (
          <Menu onClick={() => setState(!state)} className="h-8 w-8 cursor-pointer" />
        )}
      </div>

      {/* Overlay */}
      {state && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setState(false)}></div>}
    </nav>
  );
}
