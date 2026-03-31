import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-linear-to-b from-lime-50 to-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-spa-700 font-playfair text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Realzá tu belleza natural
          </h1>

          <p className="font-merriweather text-lg md:text-xl mb-6 max-w-xl text-gray-600 font-light">
            Tratamientos estéticos personalizados para que te sientas segura,
            cómoda y radiante.
          </p>

          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            <a className="btn-spa" href="#turnos">
              Reservar turno
            </a>
            <a className="btn-spa-outline" href="#services">
              Ver servicios
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative w-full aspect-[4/3]  overflow-hidden shadow-lg">
          <Image
            src="/hero.jpg"
            alt="Tratamiento estético"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}