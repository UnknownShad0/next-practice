"use client";
import { FC } from "react";
import { Menu, Bell, User } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-3 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={22} />
        </button>
        <span className="text-xl font-semibold text-gray-800">
          Admin Dashboard
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
            3
          </span>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <User size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
