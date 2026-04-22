"use client";

import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, title, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal modal-open modal-middle"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="modal-box max-w-2xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          aria-label="Cerrar modal"
        >
          x
        </button>
        <h3 className="font-playfair text-2xl text-spa-700 pr-10">{title}</h3>
        <div className="mt-4 text-gray-700">{children}</div>
         <div className="mt-4 flex justify-end">
             <a className="btn-spa" href="#turnos" onClick={onClose}>
              Reservar turno
            </a>
         </div>
      </div>
      <div className="modal-backdrop">
        <button type="button" onClick={onClose} aria-label="Cerrar" />
      </div>
    </div>
  );
}
