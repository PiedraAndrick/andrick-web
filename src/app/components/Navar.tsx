import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-100">
          Andrick Piedra
        </Link>
        <div className="space-x-6">
          <Link href="#perfil" className="hover:text-blue-400">
            Perfil
          </Link>
          <Link href="#proyectos" className="hover:text-blue-400">
            Proyectos
          </Link>
          <Link href="#contacto" className="hover:text-blue-400">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}