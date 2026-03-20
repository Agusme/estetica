export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-lime-50 to-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Realzá tu belleza <span className="text-spa-700">natural</span>
      </h1>

      <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-600">
        Tratamientos estéticos personalizados para que te sientas segura, cómoda
        y radiante.
      </p>

      <div className="flex gap-4">
        <a className="btn-spa" href="#turnos">Reservar turno</a>
        <a className="btn-spa-outline" href="#services">Ver servicios</a>
      </div>
    </section>
  );
}
