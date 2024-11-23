import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavbarLink from "./NavbarLink";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navbarLinks = [
  {
    title: "About Me",
    path: "#about",
  },
  {
    title: "Experiences",
    path: "#experiences",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto mb-4">
        <Link href={"/"}>
          <Image
            src={`${basePath}/images/logo.svg`}
            alt="Sheena Verana website logo"
            width={80}
            height={80}
            className="w-[80px] h-[80px] "
          />
        </Link>
        <button
          className="md:hidden flex items-center justify-center text-2xl text-[#577BE6]"
          id="hamburger-btn"
        >
          <span className="material-icons">menu</span>
        </button>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-4 md:mt-0">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavbarLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="menu md:hidden bg-white shadow-lg p-4" id="mobile-navbar">
        <ul className="flex flex-col items-center space-y-4">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <NavbarLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
