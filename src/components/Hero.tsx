import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="blob -top-24 -left-24 h-80 w-80 bg-primary animate-blob" />
      <div className="blob top-10 right-0 h-96 w-96 bg-accent animate-blob animation-delay-2000" />
      <div className="blob bottom-0 left-1/3 h-72 w-72 bg-primary-dark animate-blob animation-delay-4000" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-wide text-primary-light uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {siteConfig.tagline}
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Tu contabilidad e impuestos,{" "}
            <span className="gradient-text">reinventados.</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-semibold text-background shadow-[0_0_30px_-8px_var(--color-primary)] transition-transform hover:scale-105"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-white/5"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="hidden justify-self-end md:block">
          <div className="grid w-full max-w-sm grid-cols-2 gap-4">
            {[
              ["+15", "años de experiencia"],
              ["300+", "clientes activos"],
              ["100%", "cumplimiento AFIP"],
              ["24hs", "tiempo de respuesta"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="glass glow-border rounded-2xl p-5 text-center transition-all"
              >
                <p className="text-2xl font-bold gradient-text">{value}</p>
                <p className="mt-1 text-xs text-foreground/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
