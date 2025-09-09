// app/page.tsx (o donde tengas tu Home)
import Navar from "./components/Navar";
import Sidebar from "./components/Sidebar";
import ProfileSection from "./components/ProfileSection";
import ProjectCard from "./components/ProjectCard";
import { title } from "process";

const project = {
  images: [
    { src: "/ProjectoChatbot/img1.png", alt: "Pantalla inicio" },
    { src: "/ProjectoChatbot/img2.png", alt: "Dashboard" },
    { src: "/ProjectoChatbot/img3.png", alt: "Detalle" },
    { src: "/ProjectoChatbot/img4.png", alt: "Detalle" },
    { src: "/ProjectoChatbot/img5.png", alt: "Detalle" },
    { src: "/ProjectoChatbot/img6.png", alt: "Detalle" },
  ],
  title: "Chatbot Vocacional",
  description: "Desarrollo de chatbot Vocacional",
  altText: "Proyecto ejemplo",
  githubLink: "https://github.com",
  techIcons: [
    { src: "/Technologies/FastApi.png", alt: "FastAPI" },
    { src: "/Technologies/Angular.png", alt: "AngularJS" },
    { src: "/Technologies/Spacy.png", alt: "Spacy" },
  ],
};

const project2 = {
  images: [
    { src: "/ProjectoChatbot/img1.png", alt: "Pantalla inicio" },
    { src: "/ProjectoChatbot/img2.png", alt: "Dashboard" },
    { src: "/ProjectoChatbot/img3.png", alt: "Detalle" },
    { src: "/ProjectoChatbot/img4.png", alt: "Detalle" },
    { src: "/ProjectoChatbot/img5.png", alt: "Detalle" },
    { src: "/ProjectoChatbot/img6.png", alt: "Detalle" },
  ],
  altText: "Proyecto ejemplo",
  githubLink: "https://github.com",
  techIcons: [
    { src: "/window.svg", alt: "React" },
    { src: "/vercel.svg", alt: "Next.js" },
    { src: "/globe.svg", alt: "Node.js" },
  ],
};
export default function Home() {
  return (
    <>
      {/* Navbar solo en móvil (en desktop usamos el sidebar) */}
      <div className="md:hidden">
        <Navar />
      </div>

      <div className="flex text-center">
        {/* Aside fijo en desktop */}
        <Sidebar />

        {/* Contenido principal */}
        <main className="flex-1">
          <header className="flex flex-col items-center md:items-start justify-start text-center md:text-left py-12 px-6 md:px-12">
            {/* En desktop ya tienes la foto en el aside; en móvil la muestro aquí */}
            <div className="md:hidden flex flex-col items-center">
              <img
                src="/avatar.png"
                alt="Foto de Andrick Piedra"
                className="w-24 h-24 rounded-full object-cover"
              />
              <h1 className="mt-4 text-4xl font-bold">Andrick Piedra</h1>
              <p className="text-lg text-gray-400 mt-1">
                Desarrollador Web | Backend & Fullstack
              </p>
            </div>

            {/* En desktop, el header solo presenta títulos (la foto ya está en el aside) */}
            <div className="hidden md:block">
              <h1 className="text-5xl font-bold">¡Bienvenido a mi portafolio Web!</h1>
              <p className="text-lg text-gray-400 mt-2">
                Aquí encontraras mi perfil, proyectos, formas de contacto y un poco mas de mi.
              </p>
            </div>


          </header>
          <ProfileSection />
          <section id="proyectos" className="py-16 px-6 md:px-12 text-center">
            <h2 className="text-4xl font-bold mb-8">Proyectos</h2>
            <p className="text-lg text-gray-400 mb-6">
              🚧 Próximamente mostraré mis proyectos destacados aquí.
            </p>
            <div className="w-auto flex-col">
            <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
              <ProjectCard  {...project} />
              <ProjectCard  {...project} />
            </div>

            </div>

          </section>

          <section
            id="contacto"
            className="bg-gray-800 py-16 px-6 md:px-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Contacto</h2>
            <p className="text-lg mb-4">📧 andrickmpl20@gmail.com</p>
            <p className="text-lg">
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/andrick-piedra-596117337"
                className="text-blue-400 hover:underline"
              >
                andrick-piedra
              </a>
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
