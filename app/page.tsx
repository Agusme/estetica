import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-lime-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Realzá tu belleza{" "}
          <span
            className="text-[#2D4517]
"
          >
            natural
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-600">
          Tratamientos estéticos personalizados para que te sientas segura,
          cómoda y radiante.
        </p>

        <div className="flex gap-4">
          <button className="btn-spa">Reservar turno</button>

          <button
            className="btn-spa-outline"
          >
            Ver servicios
          </button>
        </div>
      </section>
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Nuestros servicios</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="shadow rounded-xl overflow-hidden">
            <Image
              src="/cleaning.jpg"
              alt="Limpieza facial"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">Limpieza facial</h3>
              <p>Mejorá la salud y apariencia de tu piel.</p>
            </div>
          </div>

          <div className="shadow rounded-xl overflow-hidden">
            <Image
              src="/depilation.jpg"
              alt="Depilación"
              width={400}
              height={300}
              priority
              className="w-full h-48 object-cover"
            />{" "}
            <div className="p-4">
              <h3 className="font-bold mb-2">Depilación definitiva</h3>
              <p>Resultados duraderos y sin dolor.</p>
            </div>
          </div>

          <div className="shadow rounded-xl overflow-hidden">
            <Image
              src="/esthetic.jpg"
              alt="Tratamientos corporales"
              priority
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">Tratamientos corporales</h3>
              <p>Modelá y cuidá tu cuerpo.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 text-center bg-lime-100">
        <h2 className="text-3xl font-semibold mb-4">Reservá tu turno hoy</h2>
        <p className="mb-6">
          Escribinos por WhatsApp y coordinamos tu consulta.
        </p>
        <a
          href="https://wa.me/549381XXXXXXX?text=Hola!%20quiero%20consultar%20por%20un%20turno"
          rel="noopener noreferrer"
          target="_blank"
          className="btn-spa"
        >
          Reservar turno
        </a>
      </section>
    </main>
  );
}
