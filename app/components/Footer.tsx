import React from 'react'

export default function Footer() {
  return (
        <footer className="bg-spa-700 text-white py-6 mt-10">  
        <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Estética Natural. Todos los derechos reservados.</p>
        </div>
        </footer>
  )
}
