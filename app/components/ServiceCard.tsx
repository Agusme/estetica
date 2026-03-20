import Image from "next/image";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
}

export default function ServiceCard({
  src,
  alt,
  title,
  description,
  priority = false,
}: ServiceCardProps) {
  return (
    <div className="shadow rounded-xl overflow-hidden transition duration-300 md:hover:scale-105 md:hover:shadow-lg">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        priority={priority}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
