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
}

const services: ServiceDetail[] = [
  {
    src: "/clean.jpg",
    alt: "Limpieza facial",
    title: "Limpieza facial",
    description: "MejorÃ¡ la salud y apariencia de tu piel.",
    fullDescription:
      "Una limpieza profunda pensada para remover impurezas, oxigenar la piel y dejar el rostro más luminoso y equilibrado.",
    benefits: [
      "Limpieza profunda",
      "mÃ¡s luminosa",
      "Rutina adaptada a tu piel",
    ],
    duration: "60 minutos",
    objectPosition: "object-[center_38%]",
  },
  {
    src: "/depilacion.png",
    alt: "Depilación",
    title: "Depilación definitiva",
    description: "Resultados duraderos y sin dolor.",
    fullDescription:
      "Tratamiento progresivo para reducir el vello de forma segura, cómoda y adaptada a la sensibilidad de cada zona.",
    benefits: ["Menos vello", "Menos irritación", "Sesiones rápidas"],
    duration: "30 a 45 minutos",
    priority: true,
    objectPosition: "object-[center_60%]",
  },
  {
    src: "/esthetic.jpg",
    alt: "Tratamientos corporales",
    title: "Tratamientos corporales",
    description: "Modelá y cuidá tu cuerpo.",
    fullDescription:
      "Sesiones orientadas a mejorar textura, tonicidad y bienestar corporal con técnicas adaptadas a tu objetivo.",
    benefits: [
      "Mejora la tonicidad",
      "Favorece el drenaje",
      "Plan personalizado",
    ],
    duration: "50 a 75 minutos",
    priority: true,
    objectPosition: "object-[center_60%]",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );

  return (
    <>
      <section className="py-16 px-6 text-center" id="services">
        <h2 className="text-3xl font-playfair font-semibold mb-10 text-spa-700">
          Nuestros servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              src={service.src}
              alt={service.alt}
              title={service.title}
              description={service.description}
              priority={service.priority}
              objectPosition={service.objectPosition}
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
