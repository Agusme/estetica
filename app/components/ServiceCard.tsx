import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
  objectPosition?: string;
}

export default function ServiceCard({
  src,
  alt,
  title,
  description,
  priority = false,
  objectPosition = "object-[center_35%]",
}: ServiceCardProps) {
  return (
    <div className="bg-spa-700 border text-white border-t-4 border-spa-800 shadow rounded-xl overflow-hidden transition duration-300 md:hover:scale-105 md:hover:shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={priority}
        className={`w-full h-34 md:h-40 object-cover ${objectPosition}`}
      />
      <div className="p-4">
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="mb-5">
        <p className="text-xs">Ver mas</p>
      </div>
    </div>
  );
}
