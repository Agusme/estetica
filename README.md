# Estetica Natural Landing

Landing page desarrollada con foco en conversion, experiencia visual y codigo listo para produccion.

Este proyecto esta pensado como una demostracion real de trabajo frontend moderno: una landing comercial para un centro de estetica con navegacion clara, cards de servicios, modal reutilizable, formulario de reserva y base preparada para deploy.

## Links

- Live Demo: https://estetica-six-kappa.vercel.app/
- GitHub: https://github.com/Agusme
- LinkedIn: https://www.linkedin.com/in/agustina-mena-169298204/

## Que muestra este proyecto

- Diseño de una landing orientada a conversion
- Implementacion con Next.js App Router
- Componentizacion limpia y reutilizable
- UI responsive para mobile, tablet y desktop
- Integracion de Tailwind CSS v4 + daisyUI
- Gestion de estado local para interaccion de modales
- Uso de assets optimizados con `next/image`
- Base solida para deploy en Vercel

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- daisyUI
- ESLint

## Features principales

### Hero comercial
Seccion inicial pensada para comunicar propuesta de valor y dirigir rapido a servicios o reserva.

### Servicios con modal reutilizable
Cada card puede abrir un modal con mas informacion del tratamiento.
Esto muestra manejo de estado, composicion de componentes y experiencia de usuario sin navegacion innecesaria.

### Reserva de turno
La landing incluye una seccion de contacto/reserva con integracion lista para WhatsApp.
Es una solucion rapida, realista y util para negocios que necesitan captar leads sin depender de un backend complejo.

### Responsive design real
El proyecto fue ajustado para que se vea bien en distintos breakpoints, incluyendo casos intermedios como tablet, donde suelen aparecer problemas de recorte o proporcion.

## Arquitectura del proyecto

```text
app/
  components/
    CTA.tsx
    FadeIn.tsx
    Footer.tsx
    Hero.tsx
    Modal.tsx
    Navbar.tsx
    ServiceCard.tsx
    Services.tsx
  globals.css
  layout.tsx
  page.tsx
public/
  clean.webp
depilacion.webp
  masajes.webp
  hero.webp
```

## Decisiones tecnicas destacables

### 1. Componentizacion
Separe la UI en componentes enfocados y reutilizables:
- `ServiceCard` para cada servicio
- `Modal` como componente generico
- `CTA` para la conversion principal
- `FadeIn` para microinteraccion visual

### 2. Reutilizacion real
El modal no esta acoplado a un solo caso de uso. Puede reutilizarse para:
- servicios
- promociones
- testimonios
- FAQs

### 3. Styling hibrido
El proyecto combina:
- utilidades de Tailwind para velocidad y control fino
- daisyUI para patrones de interfaz reutilizables
- estilos propios para preservar identidad visual

### 4. Preparado para escalar
Aunque hoy es una landing, la base permite crecer hacia:
- formulario con backend
- agenda real de turnos
- panel administrativo
- CMS o consumo de API

## Como correrlo localmente

```bash
npm install
npm run dev
```

Abri:

```text
http://localhost:3000
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy

Este proyecto esta preparado para deploy en Vercel, que es la opcion mas natural para Next.js.

### Deploy recomendado

```bash
npm run build
```

Si el build pasa correctamente, el proyecto esta listo para produccion.

### Deploy en Vercel

1. Subir el repositorio a GitHub
2. Importarlo en Vercel
3. Detectar framework: Next.js
4. Deploy automatico

Deploy actual:
- https://estetica-six-kappa.vercel.app/

## Que tipo de perfil demuestra este repo

Este proyecto no busca solo verse lindo. Tambien deja ver criterio tecnico y de producto:

- capacidad para construir interfaces orientadas a negocio
- atencion a detalle visual y responsive
- uso correcto de tooling moderno del ecosistema React
- criterio para mantener el codigo ordenado y escalable
- preparacion para deploy real

## Proximas mejoras posibles

- Preseleccion automatica del servicio al reservar desde el modal
- Integracion con agenda o backend real
- CMS para editar textos y servicios
- Analytics de conversion
- SEO local mas profundo
- Tests de componentes criticos

## Autora

Agustina Mena

- GitHub: https://github.com/Agusme
- LinkedIn: https://www.linkedin.com/in/agustina-mena-169298204/

Proyecto ideal para mostrar habilidades en:
- Frontend Engineering
- UI Implementation
- Responsive Design
- Product-minded Development
- Next.js / React / TypeScript
- Deploy-ready web apps