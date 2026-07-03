import { siteConfig, team } from "@/lib/site-config";

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-primary/[0.03] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-accent uppercase">
              Sobre nosotros
            </h2>
            <p className="mt-2 text-3xl font-bold text-primary md:text-4xl">
              {siteConfig.name}
            </p>
            <p className="mt-6 text-foreground/70">
              Somos un estudio contable con más de 15 años de trayectoria,
              formado por contadores públicos matriculados especializados en
              impuestos, liquidaciones y asesoramiento financiero. Trabajamos
              con empresas de todos los tamaños, monotributistas y
              profesionales independientes, ofreciendo un servicio cercano,
              actualizado y a la medida de cada cliente.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/80">
              {[
                "Contadores públicos matriculados",
                "Atención personalizada y trato directo",
                "Actualización permanente en normativa AFIP y ARBA",
                "Respuesta ágil ante consultas urgentes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {member.initials}
                </div>
                <p className="mt-4 font-semibold text-primary">
                  {member.name}
                </p>
                <p className="mt-1 text-xs text-foreground/60">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
