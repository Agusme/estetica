import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
  objectPosition?: string;
  onOpen: () => void;
}

export default function ServiceCard({
  src,
  alt,
  title,
  description,
  priority = false,
  objectPosition = "object-[center_35%]",
  onOpen,
}: ServiceCardProps) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-t-4 border-spa-800 bg-spa-700 text-white shadow transition duration-300 md:hover:scale-105 md:hover:shadow-lg"
      onClick={onOpen}
    >
      <div className="relative w-full aspect-[16/10] md:aspect-[16/11] lg:aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${objectPosition}`}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 33vw"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="mb-2 font-bold">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="mb-5 px-4 text-center">
        <button
          type="button"
          onClick={onOpen}
          className="cursor-pointer text-xs underline underline-offset-2"
        >
          Ver más
        </button>
      </div>
    </div>
  );
}