import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="border-b">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold">Amr Fathy</Link>
        <ul className="flex gap-4 text-sm text-gray-700">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className="hover:text-black">{l.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
