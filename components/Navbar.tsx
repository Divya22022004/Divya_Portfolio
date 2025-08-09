'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Certifications", href: "/certifications" },
  { name: "Coding", href: "/coding" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 flex flex-wrap justify-between items-center shadow-md bg-white dark:bg-gray-900 z-50 sticky top-0">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        DIVYA R
      </div>
      <div className="flex gap-6 items-center flex-wrap">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`hover:text-blue-600 transition font-medium ${
              pathname === link.href
                ? "text-blue-600 dark:text-blue-300"
                : "text-gray-700 dark:text-gray-300"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
