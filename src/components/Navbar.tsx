import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-primary">
            {siteConfig.name}
          </span>
          <span className="text-xs tracking-wide text-primary/60 uppercase">
            {siteConfig.tagline}
          </span>
        </Link>

        <ul className="hidden gap-8 text-sm font-medium text-foreground/80 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Consulta gratuita
        </a>
      </nav>
    </header>
  );
}
