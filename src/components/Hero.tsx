import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappDefaultMessage
  )}`;

  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-semibold tracking-wide text-accent-light uppercase">
            {siteConfig.tagline}
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Tu contabilidad e impuestos, en manos de profesionales.
          </h1>
          <p className="mt-6 text-lg text-white/80">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-primary-dark transition-colors hover:bg-accent-light"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
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
                className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur"
              >
                <p className="text-2xl font-bold text-accent-light">{value}</p>
                <p className="mt-1 text-xs text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
