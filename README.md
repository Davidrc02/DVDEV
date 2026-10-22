# dvdev

Sitio web de **David Rodríguez Cano**, desarrollador web. Presenta su perfil, experiencia profesional, servicios y stack (Angular, React, Java/Spring Boot, bases de datos y OpenShift) con un diseño pensado para captar proyectos y conversaciones profesionales.

Contacto: [davidrc3po@gmail.com](mailto:davidrc3po@gmail.com)

## Stack del proyecto

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4

El arranque original sale de Figma Make; el código de producto vive en `src/`.

## Requisitos

- Node.js 22
- npm (o pnpm 10, según `.mise.toml`)

## Cómo arrancarlo

```bash
npm install
npm run dev
```

El servidor de desarrollo queda en `http://localhost:8443`.

## Scripts

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila la web para producción |
| `npm run preview` | Sirve el build localmente |
| `npm run format` | Formatea el código con oxfmt |

## Estructura

```
src/
  App.tsx      Página principal (landing)
  main.tsx     Punto de entrada de React
  index.css    Estilos globales y tema
public/        Assets estáticos
```

## Build de producción

```bash
npm run build
npm run preview
```

La salida queda en `dist/`.
