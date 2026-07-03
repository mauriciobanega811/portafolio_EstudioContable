import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background text-foreground/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">{siteConfig.name}</span>.
          Todos los derechos reservados.
        </p>
        <p>{siteConfig.address}</p>
      </div>
    </footer>
  );
}
