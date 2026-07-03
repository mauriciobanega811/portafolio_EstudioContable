import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </p>
        <p>{siteConfig.address}</p>
      </div>
    </footer>
  );
}
