import { services } from "@/lib/site-config";

export default function Servicios() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-semibold tracking-wide text-accent uppercase">
          Servicios
        </h2>
        <p className="mt-2 text-3xl font-bold text-primary md:text-4xl">
          Soluciones contables e impositivas para tu negocio
        </p>
        <p className="mt-4 text-foreground/70">
          Acompañamos a empresas, PyMEs, monotributistas y profesionales
          independientes en cada etapa de su actividad económica.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
              {service.title.charAt(0)}
            </div>
            <h3 className="text-lg font-semibold text-primary">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-foreground/70">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
