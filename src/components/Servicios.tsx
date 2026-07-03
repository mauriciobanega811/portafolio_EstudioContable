import { services } from "@/lib/site-config";

export default function Servicios() {
  return (
    <section id="servicios" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          Servicios
        </h2>
        <p className="mt-2 text-3xl font-bold md:text-4xl">
          Soluciones contables e impositivas{" "}
          <span className="gradient-text">para tu negocio</span>
        </p>
        <p className="mt-4 text-foreground/60">
          Acompañamos a empresas, PyMEs, monotributistas y profesionales
          independientes en cada etapa de su actividad económica.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="glass glow-border group rounded-2xl p-6 transition-all"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 font-bold text-primary-light">
              {service.title.charAt(0)}
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/60">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
