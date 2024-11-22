import Link from "next/link";

const NavbarLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#212427] sm:text-xl rounded md:p-0 hover:text-[#577BE6]"
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
