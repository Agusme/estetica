import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="py-16 px-6 text-center" id="services">
      <h2 className="text-3xl font-playfair font-semibold mb-10 text-spa-700">Nuestros servicios</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard
          src="/clean.jpg"
          alt="Limpieza facial"
          title="Limpieza facial"
          description="Mejorá la salud y apariencia de tu piel."
          objectPosition="object-[center_30%]"
        />
        <ServiceCard
          src="/depi.png"
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
          objectPosition="object-[center_60%]"
        />
      </div>
    
    </section>
  );
}
