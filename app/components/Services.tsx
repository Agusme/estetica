"use client";

import { useState } from "react";
import Modal from "./Modal";
import ServiceCard from "./ServiceCard";

interface ServiceDetail {
  src: string;
  alt: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  priority?: boolean;
  objectPosition?: string;
  imageClassName?: string;
  icon?: "leaf" | "sparkles" | "hands";
}

const services: ServiceDetail[] = [
  {
    src: "/clean.webp",
    alt: "Limpieza facial",
    title: "Limpieza facial",
    description: "Mejorá la salud y apariencia de tu piel.",
    fullDescription:
      "Una limpieza profunda pensada para remover impurezas, oxigenar la piel y dejar el rostro más luminoso y equilibrado.",
    benefits: ["Limpieza profunda", "Piel más luminosa", "Rutina adaptada a tu piel"],
    duration: "60 minutos",
    objectPosition: "object-[center_30%]",
    icon: "leaf",
  },
  {
    src: "/depilacion.webp",
    alt: "Depilación",
    title: "Depilación definitiva",
    description: "Resultados duraderos y sin dolor.",
    fullDescription:
      "Tratamiento progresivo para reducir el vello de forma segura, cómoda y adaptada a la sensibilidad de cada zona.",
    benefits: ["Menos vello", "Menos irritación", "Sesiones rápidas"],
    duration: "30 a 45 minutos",
    priority: true,
    objectPosition: "object-[center_48%]",
    imageClassName: "scale-[1.12] group-hover:scale-[1.16]",
    icon: "sparkles",
  },
  {
    src: "/masajes.webp",
    alt: "Masajes relajantes",
    title: "Masajes relajantes",
    description: "Alivio del estrés y bienestar profundo.",
    fullDescription:
      "Sesiones orientadas a relajar el cuerpo, aliviar tensiones y renovar la sensación de bienestar con técnicas adaptadas a tu objetivo.",
    benefits: ["Relajación profunda", "Alivia tensiones", "Bienestar corporal"],
    duration: "50 a 75 minutos",
    priority: true,
    objectPosition: "object-[center_60%]",
    icon: "hands",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <>
      <section className="px-6 py-16 text-center" id="services">
       <div className="mb-6">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">
            Nuestros Servicios{" "}
          </p>
          <h2 className="font-playfair text-5xl text-spa-700">
            Cuidados que se sienten
          </h2>
        </div>

        <div className="mx-auto mb-9 mt-4 flex w-12 items-center justify-center gap-1 text-spa-500">
          <span className="h-px w-4 bg-spa-300" />
          <span className="font-playfair text-lg leading-none">&</span>
          <span className="h-px w-4 bg-spa-300" />
        </div>

        <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              src={service.src}
              alt={service.alt}
              title={service.title}
              description={service.description}
              priority={service.priority}
              objectPosition={service.objectPosition}
              imageClassName={service.imageClassName}
              icon={service.icon}
              onOpen={() => setSelectedService(service)}
            />
          ))}
        </div>
      </section>

      <Modal
        isOpen={selectedService !== null}
        title={selectedService?.title ?? "Servicio"}
        onClose={() => setSelectedService(null)}
      >
        {selectedService && (
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-spa-50 px-4 py-2 text-sm font-semibold text-spa-700">
              Duración estimada: {selectedService.duration}
            </div>
            <p className="leading-7">{selectedService.fullDescription}</p>
            <div>
              <p className="mb-2 font-semibold text-spa-700">Beneficios</p>
              <ul className="space-y-2">
                {selectedService.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="text-spa-700">-</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
