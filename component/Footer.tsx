

export default function Footer() {
     return(
        <footer className="bg-slate-950 text-slate-400 py-16">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-white">
                <span className="material-symbols-outlined text-3xl text-primary">
                  architecture
                </span>
                <h2 className="text-xl font-extrabold">ConstruMarket</h2>
              </div>
              <p className="text-sm max-w-xs">
                Marketplace de construcción con pagos seguros por hitos y control operativo.
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold mb-3">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li>Privacidad</li>
                <li>Términos</li>
                <li>Custodia</li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-3">Ayuda</h5>
              <ul className="space-y-2 text-sm">
                <li>Soporte</li>
                <li>Contacto</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-xs">
            © 2024 ConstruMarket Technologies S.A.
          </div>
        </footer>
     );
}