"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const whatsappNumber = "5493815550000";

const services = [
  "Limpieza facial",
  "Depilación definitiva",
  "Tratamientos corporales",
  "Consulta general",
];

export default function CTA() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0]);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const whatsappHref = useMemo(() => {
    const message = [
      "Hola! Quiero reservar un turno.",
      `Nombre: ${name || "Sin completar"}`,
      `Servicio: ${service}`,
      `Fecha preferida: ${date || "A coordinar"}`,
      `Comentario: ${notes || "Sin comentarios"}`,
    ].join("\n");

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [date, name, notes, service]);

  return (
    <section
      id="turnos"
      className="relative overflow-hidden px-6 py-24 text-center"
    >
      <Image
        src="/fondoCTA.webp"
        alt=""
        fill
        aria-hidden="true"
        className="object-cover object-top-left scale-110"
      />
<div className="absolute inset-0 bg-linear-to-r from-white/25 to-transparent" />      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">
            Reservá tu turno{" "}
          </p>
          <h2 className="font-playfair text-5xl text-spa-700">
            Un momento para vos
          </h2>
        </div>

        <div
          className="
    bg-white/95
    backdrop-blur-sm
    rounded-3xl
    shadow-xl
    p-6
    md:p-8
    text-left
    max-w-2xl
    mx-auto
  "
        >
          {" "}
          <div className="grid md:grid-cols-2 gap-4">
            <label className="text-sm text-gray-700 font-medium">
              Nombre
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                className="field-spa mt-2  "
              />
            </label>

            <label className="text-sm text-gray-700 font-medium">
              Servicio
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="field-spa mt-2"
              >
                {services.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid md:grid-cols-[220px_1fr] gap-4 mt-4">
            <label className="text-sm text-gray-700 font-medium">
              Fecha preferida
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="field-spa mt-2"
              />
            </label>

            <label className="text-sm text-gray-700 font-medium">
              Comentarios
              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows={4}
                placeholder="Contanos qué tratamiento querés hacerte o cualquier detalle importante"
                className="field-spa mt-2 resize-none"
              />
            </label>
          </div>
          <div className="mt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p className="text-sm text-gray-600">
              Te redirige a WhatsApp con la información cargada.
            </p>

            <a
              href={whatsappHref}
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm btn-spa inline-flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
