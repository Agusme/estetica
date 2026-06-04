import Image from "next/image";

type ServiceIcon = "leaf" | "sparkles" | "hands";

interface ServiceCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
  objectPosition?: string;
  imageClassName?: string;
  icon?: ServiceIcon;
  onOpen: () => void;
}

function CardIcon({ icon }: { icon: ServiceIcon }) {
  const iconClass = "h-7 w-7 text-[#647a46]";

  if (icon === "sparkles") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 5l1.8 5.2L23 12l-5.2 1.8L16 19l-1.8-5.2L9 12l5.2-1.8L16 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 19l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 20l.8 2.2L27 23l-2.2.8L24 26l-.8-2.2L21 23l2.2-.8L24 20Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "hands") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 25V13c0-1.2.9-2 2-2s2 .8 2 2v7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 20V9c0-1.2.9-2 2-2s2 .8 2 2v11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18 20v-8c0-1.2.9-2 2-2s2 .8 2 2v10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M22 22v-5c0-1.2.9-2 2-2s2 .8 2 2v5c0 4-3.2 7-8 7h-2c-3.1 0-5.6-1.2-7-3.4L5.5 20a2.1 2.1 0 0 1 3-2.9L12 20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={iconClass}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M17 26c0-8.2-5.2-13.5-11-15 0 7.3 4.6 12.4 11 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 23c1.3-6.8 5.7-11.2 11-12-.2 6.4-4.2 10.6-10.2 12.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 14.5 17 26m7-12-8 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ServiceCard({
  src,
  alt,
  title,
  description,
  priority = false,
  objectPosition = "object-[center_35%]",
  imageClassName = "",
  icon = "leaf",
  onOpen,
}: ServiceCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full overflow-hidden rounded-lg bg-white text-center shadow-[0_18px_45px_rgba(45,69,23,0.12)] transition duration-300  hover:shadow-[0_22px_55px_rgba(45,69,23,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spa-500"
    >
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={360}
          priority={priority}
          className={`h-44 w-full object-cover transition duration-500 group-hover:scale-105 ${objectPosition} ${imageClassName}`}
        />
      </div>

      <div className="relative px-6 pb-7 pt-10">
        <span className="absolute left-1/2 top-0 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#edf1e3] shadow-[0_8px_20px_rgba(45,69,23,0.12)]">
          <CardIcon icon={icon} />
        </span>

        <h3 className="mb-2 font-playfair text-xl font-semibold text-[#304D25]">
          {title}
        </h3>

        <p className="mx-auto min-h-12 max-w-[15rem] text-sm leading-6 text-stone-600">
          {description}
        </p>

        <span className="mx-auto mt-4 block h-px w-8 bg-[#b7c79b]" />
      </div>
    </button>
  );
}
