"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/images/LOGO1.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            className="rounded-lg h-8 w-auto sm:h-10 md:h-10 lg:h-12"
          />
          <h1 className="text-lg sm:text-xl ml-2 text-violet-800 font-semibold">
            NextWave Dev
          </h1>
        </div>

        {/* Centered Links */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8 ">
            <li className="text-violet-700 hover:text-zinc-500 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-zinc-500">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-zinc-500">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="hover:text-zinc-500">
              <Link href="/about">About Me</Link>
            </li>
          </ul>
        </div>

        {/* Contact Me Button */}
        <div className="hidden lg:flex">
          <Link href="/contact">
            <Button className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-200">
              Contact Me
            </Button>
          </Link>
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="lg:hidden">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="text-violet-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg p-4 space-y-4">
          <ul className="flex flex-col space-y-2 text-violet-600">
            <li className="hover:text-zinc-500">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:text-zinc-500">
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="hover:text-zinc-500">
              <Link href="/skills" onClick={() => setIsOpen(false)}>
                Skills
              </Link>
            </li>
            <li className="hover:text-zinc-500">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About Me
              </Link>
            </li>
          </ul>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full mt-2 px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition duration-200">
              Contact Me
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
