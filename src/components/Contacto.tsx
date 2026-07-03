"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const texto = [
      `Hola, mi nombre es ${nombre || "-"}.`,
      telefono ? `Mi teléfono es ${telefono}.` : null,
      mensaje ? `Consulta: ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join(" ");

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      texto
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            Contacto
          </h2>
          <p className="mt-2 text-3xl font-bold md:text-4xl">
            Conversemos sobre{" "}
            <span className="gradient-text">tu negocio</span>
          </p>
          <p className="mt-4 text-foreground/60">
            Completá el formulario y te contactamos por WhatsApp, o
            escribinos directamente por los siguientes medios.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-primary-light">Teléfono / WhatsApp</dt>
              <dd className="text-foreground/60">{siteConfig.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary-light">Email</dt>
              <dd className="text-foreground/60">{siteConfig.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary-light">Dirección</dt>
              <dd className="text-foreground/60">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary-light">Horario de atención</dt>
              <dd className="text-foreground/60">{siteConfig.hours}</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 shadow-[0_0_60px_-25px_var(--color-primary)]"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="text-sm font-medium text-foreground/80">
                Nombre
              </label>
              <input
                id="nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary/50"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-sm font-medium text-foreground/80">
                Teléfono
              </label>
              <input
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary/50"
                placeholder="Tu teléfono"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="text-sm font-medium text-foreground/80">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary/50"
                placeholder="Contanos en qué podemos ayudarte"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-primary to-accent py-3 font-semibold text-background transition-transform hover:scale-[1.02]"
            >
              Enviar consulta por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
