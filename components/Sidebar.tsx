"use client";
import Link from "next/link";
import { FC } from "react";
import { Home, Users, Settings } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  // Navigation items in an array
  const navItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/users", label: "Users", icon: Users },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 fixed md:static top-0 left-0 h-screen w-64 bg-gray-900 text-white transition-transform duration-300 flex flex-col`}
    >
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        MyAdmin
      </div>

      <nav className="mt-4 flex flex-col gap-1 flex-1">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800 transition-colors"
          >
            <Icon size={18} /> {label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        v1.0.0
      </div>
    </aside>
  );
};

export default Sidebar;
