import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-linear-to-b from-lime-50 to-white px-6 py-16 sm:px-10 lg:min-h-screen lg:px-20">
      <div className="absolute inset-y-0 right-0 w-full md:w-[68%]">
        <Image
          src="/hero.webp"
          alt="Ambiente de estética con velas y toallas"
          fill
          className="object-cover object-[68%_center] opacity-45 blur-[1px] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.18)_26%,black_54%)] md:opacity-100 md:blur-0 md:[mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.18)_15%,black_34%)]"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,252,245,0.98)_0%,rgba(250,252,245,0.86)_42%,rgba(250,252,245,0.64)_100%)] md:bg-[linear-gradient(90deg,rgba(250,252,245,1)_0%,rgba(250,252,245,0.94)_34%,rgba(250,252,245,0)_62%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
          <h1 className="mb-6 font-playfair text-[2.65rem]  leading-[1.08] text-spa-700 sm:text-5xl md:text-6xl">
            Realzá tu belleza natural
          </h1>

          <p className="mx-auto mb-8 max-w-md font-merriweather text-lg leading-8 text-gray-600 md:mx-0 md:text-base md:leading-7">
            Tratamientos estéticos personalizados para que te sientas segura,
            cómoda y radiante.
          </p>

<div className="mt-3 flex flex-col items-center gap-4 sm:flex-row md:justify-start">            <a className="btn-spa" href="#turnos">
              Reservar turno
            </a>
            <a className="btn-spa-outline" href="#services">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
