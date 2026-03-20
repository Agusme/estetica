import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-16 px-6 text-center" id="services">
      <h2 className="text-3xl font-semibold mb-10">Nuestros servicios</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard
          src="/cleaning.jpg"
          alt="Limpieza facial"
          title="Limpieza facial"
          description="Mejorá la salud y apariencia de tu piel."
        />
        <ServiceCard
          src="/depilation.jpg"
          alt="Depilación"
          title="Depilación definitiva"
          description="Resultados duraderos y sin dolor."
          priority
        />
        <ServiceCard
          src="/esthetic.jpg"
          alt="Tratamientos corporales"
          title="Tratamientos corporales"
          description="Modelá y cuidá tu cuerpo."
          priority
        />
      </div>
    </section>
  );
}
