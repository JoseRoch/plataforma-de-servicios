import Link from "next/link";

export default function Navbar() {
   return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
          <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl font-bold text-primary">
                architecture
              </span>
               <Link href="/">
               <h2 className="text-xl font-extrabold tracking-tight">
                ConstruMarket
              </h2>
               </Link>
              
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link className="text-sm font-semibold hover:text-primary" href="/categorias">Categorías</Link>
              <Link className="text-sm font-semibold hover:text-primary" href="#">Cómo funciona</Link>
              <Link className="text-sm font-semibold hover:text-primary" href="#">Proyectos</Link>
              <Link className="text-sm font-semibold hover:text-primary" href="#">Seguridad</Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary">
                Iniciar sesión
              </button>
              <button className="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm">
                Unirse
              </button>
            </div>
          </div>
        </header>
   );


}