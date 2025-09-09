import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="md:sticky md:top-0 md:h-[100dvh] md:w-72 border-r border-white/10 bg-gray-900/40 backdrop-blur md:flex hidden">
      <div className="w-full h-full flex flex-col items-center p-6 gap-6">
        {/* Avatar + nombre */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/avatar.png"
            alt="Foto de Andrick Piedra"
            className="w-80 "
          />
          <h1 className="mt-4 text-xl font-semibold">Andrick Piedra</h1>
          <p className="text-sm text-gray-400">Backend & Fullstack</p>
        </div>

        {/* Navegación vertical */}
        <nav className="w-full">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="#perfil"
                className="block w-full rounded-lg px-3 py-2 hover:bg-white/5 transition"
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                href="#proyectos"
                className="block w-full rounded-lg px-3 py-2 hover:bg-white/5 transition"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="block w-full rounded-lg px-3 py-2 hover:bg-white/5 transition"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer pequeño del aside */}
        <div className="mt-auto text-xs text-gray-500">
          <a
            href="mailto:andrickmpl20@gmail.com"
            className="hover:underline"
          >
            andrickmpl20@gmail.com
          </a>
        </div>
      </div>
    </aside>
  );
}
