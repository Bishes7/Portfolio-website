"use client";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function NavBar() {
  const theme = "dark";

  const [isHamburgerMenu, setIsHamburgerMenu] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenu(!isHamburgerMenu);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-5">
        {/* desktop view */}
        <div className="flex items-center justify-between h-11 ">
          <Link href="/" className="text-xl font-bold text-primary">
            DevFolio&trade;
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive ? " text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <button className="p-2 rounded-lg hover:bg-gray-100 text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer  ">
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>

          <button
            onClick={toggleHamburgerMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer "
          >
            {isHamburgerMenu ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* mobile view */}
        {isHamburgerMenu && (
          <div className="md:hidden">
            <div className="py-4 space-y-4 ">
              {menuItems.map((item) => (
                <div key={item.label} onClick={toggleHamburgerMenu}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary transition-colors "
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <button className="flex items-center py-2 hover:text-primary transition-colors  ">
                {theme === "dark" ? (
                  <SunIcon className="w-5 h-5 mr-2" />
                ) : (
                  <MoonIcon className="w-5 h-5 mr-2" />
                )}
              </button>
              <div>
                <button></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
