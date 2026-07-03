import { siteConfig, team } from "@/lib/site-config";

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              Sobre nosotros
            </h2>
            <p className="mt-2 text-3xl font-bold md:text-4xl">
              <span className="gradient-text">{siteConfig.name}</span>
            </p>
            <p className="mt-6 text-foreground/60">
              Somos un estudio contable con más de 15 años de trayectoria,
              formado por contadores públicos matriculados especializados en
              impuestos, liquidaciones y asesoramiento financiero. Trabajamos
              con empresas de todos los tamaños, monotributistas y
              profesionales independientes, ofreciendo un servicio cercano,
              actualizado y a la medida de cada cliente.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/70">
              {[
                "Contadores públicos matriculados",
                "Atención personalizada y trato directo",
                "Actualización permanente en normativa AFIP y ARBA",
                "Respuesta ágil ante consultas urgentes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="glass glow-border rounded-2xl p-6 text-center transition-all"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-bold text-background">
                  {member.initials}
                </div>
                <p className="mt-4 font-semibold text-foreground">
                  {member.name}
                </p>
                <p className="mt-1 text-xs text-foreground/50">
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
