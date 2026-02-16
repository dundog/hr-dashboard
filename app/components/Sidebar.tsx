"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import DarkModeToggle from "./components/DarkModeToggle";
import { div } from "framer-motion/client";
const menuItems = [
  { name: "Dashboard", href: "/" },
  { name: "Employees", href: "/employees" },
  { name: "Leave", href: "/leave" },
  { name: "Login", href: "/login" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
  

    <div className="h-screen w-64 bg-white/70 backdrop-blur-xl border-r border-white/40 shadow-xl fixed left-0 top-0 p-6">
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-indigo-500 bg-clip-text text-transparent">
          HR System
        </h1>
      </motion.div>

      {/* Menu */}
      <nav className="space-y-3">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`block px-4 py-3 rounded-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-white/60 hover:shadow-sm"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          );
        })}
      </nav>
      
      <div>
        <div>
        <DarkModeToggle/>
      </div>
      </div>
    </div>
  );
}
