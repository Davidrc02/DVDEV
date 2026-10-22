import { useState } from "react";

type IconName = "arrow" | "code" | "database" | "layers" | "mail" | "menu" | "close";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3-9 5 9 5 9-5-9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: (
      <>
        <path d="M4 8h16" />
        <path d="M4 16h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const services = [
  {
    number: "01",
    icon: "code" as const,
    title: "Aplicaciones frontend",
    text: "Desarrollo de interfaces y funcionalidades para aplicaciones de negocio con Angular y PrimeNG o React, conectadas a sus servicios backend.",
    tags: ["Angular", "PrimeNG", "React"],
  },
  {
    number: "02",
    icon: "database" as const,
    title: "Backend y APIs REST",
    text: "Diseño y desarrollo de servicios con Java y Spring Boot, trabajando con bases de datos relacionales y optimizando consultas.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "Oracle"],
  },
  {
    number: "03",
    icon: "layers" as const,
    title: "Calidad y entrega",
    text: "Acompaño el ciclo de desarrollo con planes de pruebas, pipelines CI/CD y despliegues en OpenShift.",
    tags: ["Pruebas", "CI/CD", "OpenShift", "Git"],
  },
];

const experience = [
  {
    period: "Nov. 2025 — Actualidad",
    company: "Atos · Proyecto JCCM",
    role: "Desarrollador Full Stack",
    description:
      "Desarrollo de APIs REST y funcionalidades con Java/Spring Boot y Angular/PrimeNG. Optimización de consultas y usabilidad, participación en pipelines CI/CD y despliegues en OpenShift.",
    tags: ["Java", "Spring Boot", "Angular", "PrimeNG", "OpenShift"],
  },
  {
    period: "Abr. 2025 — Nov. 2025",
    company: "Atos · Proyecto Correos Frío",
    role: "Desarrollador Full Stack",
    description:
      "Desarrollo de evolutivos y correctivos con Spring Boot y React, trabajando con PostgreSQL y diseñando y ejecutando pruebas unitarias, de integración y funcionales.",
    tags: ["Spring Boot", "React", "PostgreSQL", "Testing"],
  },
  {
    period: "Jul. 2023 — Abr. 2025",
    company: "Atos / Eviden",
    role: "Consultor SOC L1",
    description:
      "Monitorización y gestión de incidencias de seguridad para clientes B2B, con análisis, resolución y escalado mediante ServiceNow, SMILE, Darktrace y Varonis.",
    tags: ["Ciberseguridad", "Darktrace", "Varonis", "ServiceNow"],
  },
];

const principles = [
  ["01", "Claridad", "Código que se entiende hoy y se mantiene mañana."],
  ["02", "Criterio", "Cada decisión técnica responde a un objetivo real."],
  ["03", "Detalle", "Una buena experiencia vive en las pequeñas cosas."],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="dvdev, inicio" onClick={closeMenu}>
          <span className="brand-mark">d</span>
          <span>dvdevtech</span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Navegación principal">
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a href="#servicios" onClick={closeMenu}>Servicios</a>
          <a href="#stack" onClick={closeMenu}>Stack</a>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>
            Hablemos
            <Icon name="arrow" />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Disponible para nuevos proyectos
            </div>
            <h1>
              Desarrollo productos <em>de principio a fin.</em>
            </h1>
            <p className="hero-intro">
              Soy <strong>David Rodríguez Cano</strong>, desarrollador Full Stack con más de 3 años
              de experiencia en entornos tecnológicos. Construyo aplicaciones con Java, Spring Boot,
              Angular y React, y también aporto experiencia en operaciones de ciberseguridad.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">
                Cuéntame tu idea
                <Icon name="arrow" />
              </a>
              <a className="text-link" href="#sobre-mi">
                Conóceme
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Representación de código de una aplicación web">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar">
                <div className="window-dots"><span /><span /><span /></div>
                <span>developer.ts</span>
                <span className="window-code">01</span>
              </div>
              <div className="code-content" aria-hidden="true">
                <p><span className="c-purple">interface</span> <span className="c-yellow">Developer</span> {"{"}</p>
                <p className="indent">name: <span className="c-green">string</span>;</p>
                <p className="indent">stack: <span className="c-green">string[]</span>;</p>
                <p>{"}"}</p>
                <br />
                <p><span className="c-purple">const</span> dvdev = {"{"}</p>
                <p className="indent">name: <span className="c-orange">'David Rodríguez Cano'</span>,</p>
                <p className="indent">stack: [</p>
                <p className="indent-more"><span className="c-orange">'Angular'</span>,</p>
                <p className="indent-more"><span className="c-orange">'Spring Boot'</span>,</p>
                <p className="indent-more"><span className="c-orange">'Java'</span>,</p>
                <p className="indent-more"><span className="c-orange">'React'</span>,</p>
                <p className="indent-more"><span className="c-orange">'PostgreSQL'</span>,</p>
                <p className="indent-more"><span className="c-orange">'OpenShift'</span>,</p>
                <p className="indent-more"><span className="c-orange">'CI/CD'</span>,</p>
                <p className="indent-more"><span className="c-orange">'Ciberseguridad'</span></p>
                <p className="indent">]</p>
                <p>{"}"};</p>
                <span className="cursor" />
              </div>
              <div className="window-footer">
                <span>✓ Ready to build</span>
                <span>TypeScript</span>
              </div>
            </div>
            <div className="floating-tag tag-angular"><span>A</span> Angular</div>
            <div className="floating-tag tag-spring"><span>◉</span> Spring Boot</div>
          </div>
        </section>

        <section className="marquee" aria-label="Tecnologías principales">
          <div className="marquee-track">
            <span>ANGULAR</span><i>✦</i><span>SPRING BOOT</span><i>✦</i>
            <span>PRIMENG</span><i>✦</i><span>JAVA</span><i>✦</i>
            <span>REACT</span><i>✦</i><span>POSTGRESQL</span><i>✦</i>
            <span>OPENSHIFT</span><i>✦</i><span>CI/CD</span><i>✦</i>
            <span>ANGULAR</span><i>✦</i><span>SPRING BOOT</span><i>✦</i>
            <span>PRIMENG</span><i>✦</i><span>JAVA</span><i>✦</i>
            <span>REACT</span><i>✦</i><span>POSTGRESQL</span><i>✦</i>
            <span>OPENSHIFT</span><i>✦</i><span>CI/CD</span><i>✦</i>
          </div>
        </section>

        <section className="about section" id="sobre-mi">
          <div className="section-label"><span>01</span> Sobre mí</div>
          <div className="about-grid">
            <h2>Desarrollo con visión de producto y <em>criterio técnico.</em></h2>
            <div className="about-copy">
              <p>
                Mi experiencia combina desarrollo Full Stack en proyectos empresariales con una
                etapa previa en operaciones de ciberseguridad para clientes B2B.
              </p>
              <p>
                Trabajo desde la lógica de negocio y las APIs hasta la interfaz, las pruebas y el
                despliegue. También cuento con formación superior en Desarrollo de Aplicaciones
                Web e inglés de nivel profesional avanzado.
              </p>
              <a className="inline-link" href="#contacto">
                Trabajemos juntos <Icon name="arrow" />
              </a>
            </div>
          </div>

          <div className="principles">
            {principles.map(([number, title, text]) => (
              <article className="principle" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experiencia">
          <div className="section-label"><span>02</span> Experiencia profesional</div>
          <div className="experience-heading">
            <h2>Software fiable, desde el <em>desarrollo hasta la operación.</em></h2>
            <p>
              Más de tres años en entornos tecnológicos, entre el desarrollo de aplicaciones web y
              la monitorización y gestión de incidencias de seguridad.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={item.period}>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span>{item.company}</span>
                </div>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
                <div className="experience-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="experience-note">
            Grado Superior en Desarrollo de Aplicaciones Web (DAW) · Inglés: nivel profesional
            avanzado.
          </p>
        </section>

        <section className="services section" id="servicios">
          <div className="section-heading">
            <div className="section-label light"><span>03</span> Lo que hago</div>
            <h2>Tecnología al servicio de <em>buenas ideas.</em></h2>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon name={service.icon} /></span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stack section" id="stack">
          <div className="section-label"><span>04</span> Mi stack</div>
          <div className="stack-layout">
            <div>
              <h2>Herramientas que convierto en <em>soluciones.</em></h2>
              <p className="stack-intro">
                Un ecosistema moderno para construir productos web completos, consistentes y preparados para crecer.
              </p>
            </div>
            <div className="stack-cards">
              <article className="stack-card featured">
                <span className="stack-letter">A</span>
                <div><h3>Angular</h3><p>Frontend · UI · SPA</p></div>
                <span className="stack-arrow">↗</span>
              </article>
              <article className="stack-card">
                <span className="stack-letter spring">S</span>
                <div><h3>Spring Boot</h3><p>Backend · APIs REST · Java</p></div>
                <span className="stack-arrow">↗</span>
              </article>
              <article className="stack-card compact">
                <span>DB</span><div><h3>Bases de datos</h3><p>PostgreSQL · MySQL · Oracle</p></div>
              </article>
              <article className="stack-card compact">
                <span>CI</span><div><h3>Entrega</h3><p>CI/CD · OpenShift · Git</p></div>
              </article>
              <article className="stack-card compact">
                <span>R</span><div><h3>React</h3><p>Frontend · Correos Frío</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact-kicker"><span className="status-dot" /> ¿Tienes un proyecto en mente?</div>
          <h2>Hagamos algo <em>que importe.</em></h2>
          <p>Cuéntame qué quieres construir y veamos cómo puedo ayudarte a hacerlo realidad.</p>
          <a className="button button-light" href="mailto:davidrc3po@gmail.com">
            <Icon name="mail" />
            davidrc3po@gmail.com
            <Icon name="arrow" />
          </a>
          <div className="contact-orbit orbit-contact-one" />
          <div className="contact-orbit orbit-contact-two" />
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">d</span>
          <span>dvdevtech</span>
        </a>
        <p>David Rodríguez Cano · Desarrollador web</p>
        <a href="#inicio" className="back-top">Volver arriba ↑</a>
      </footer>
    </div>
  );
}
