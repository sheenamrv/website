import Link from "next/link";

const NavbarLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 lg:text-[#ffffff] md:text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-[#577BE6] sm:text-[#000000] transition-all hover:scale-110"
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
