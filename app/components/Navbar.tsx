import React from 'react'

export default function Navbar() {
  return (
        <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between"> 
            <a href="#" className="text-2xl font-bold text-spa-700">
            </a>
            <div className="space-x-4">
                <a href="#services" className="text-gray-600 hover:text-spa-700 transition">
                    Servicios
                </a>
                <a href="#contact" className="text-gray-600 hover:text-spa-700 transition">
                    Contacto
                </a>
                <a href="#turnos" className="text-gray-600 hover:text-spa-700 transition">
                     Turnos
                </a>
            </div>
        </div>  
        </nav>

  )
}
