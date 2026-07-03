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
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-accent uppercase">
            Contacto
          </h2>
          <p className="mt-2 text-3xl font-bold text-primary md:text-4xl">
            Conversemos sobre tu negocio
          </p>
          <p className="mt-4 text-foreground/70">
            Completá el formulario y te contactamos por WhatsApp, o
            escribinos directamente por los siguientes medios.
          </p>

          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-semibold text-primary">Teléfono / WhatsApp</dt>
              <dd className="text-foreground/70">{siteConfig.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Email</dt>
              <dd className="text-foreground/70">{siteConfig.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Dirección</dt>
              <dd className="text-foreground/70">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Horario de atención</dt>
              <dd className="text-foreground/70">{siteConfig.hours}</dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="text-sm font-medium text-primary">
                Nombre
              </label>
              <input
                id="nombre"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm outline-none focus:border-primary"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="text-sm font-medium text-primary">
                Teléfono
              </label>
              <input
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm outline-none focus:border-primary"
                placeholder="Tu teléfono"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="text-sm font-medium text-primary">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                required
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 text-sm outline-none focus:border-primary"
                placeholder="Contanos en qué podemos ayudarte"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Enviar consulta por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
