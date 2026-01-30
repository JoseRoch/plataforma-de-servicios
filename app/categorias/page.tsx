import Link from "next/link";

export const metadata = {
  title: 'ConstruMarket | Categorias',
  description: 'Categorias de servicios con pagos en custodia',
}

export default function CategoriaPage() {
   return (
      <main className="flex-1">
  <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-8">
    <div className="max-w-3xl">
      <nav className="flex mb-4 text-xs font-medium text-slate-500 gap-2">
        <Link className="hover:text-primary transition-colors" href="/">Inicio</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-bold">
          Explorar Categorías
        </span>
      </nav>

      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
        ¿Qué proyecto tienes <br />
        <span className="text-primary">en mente hoy?</span>
      </h1>

      <p className="text-lg text-slate-500 dark:text-slate-400">
        Selecciona una categoría para encontrar profesionales verificados bajo nuestro control operacional.
      </p>
    </div>
  </section>

  <section className="max-w-[1200px] mx-auto px-6 py-10">
    <div className="grid lg:grid-cols-2 gap-8 items-center bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="p-8 md:p-12 space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Garantía de Control Operacional
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Tecnología fintech aplicada a tu construcción.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {[
            { icon: "shield", title: "Pagos en Custodia", desc: "Liberación por hitos aprobados." },
            { icon: "verified", title: "Profesionales de Élite", desc: "Filtros técnicos rigurosos." },
            { icon: "visibility", title: "Trazabilidad", desc: "Reportes de avance diario." },
            { icon: "support_agent", title: "Soporte Ops", desc: "Gestión activa de imprevistos." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined text-lg">
                  {item.icon}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-64 lg:h-full min-h-[320px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpF2Rzt4F6ZbZCPSgnbuKPgfkgJWR_51lGuuhUrl49fC_hljF6C9j7YzTwDthy025ATXmsvzmeXmzRQsv10cw7TAtkkGykkKuqX28yn_DEQRskl-l8_5qm9Wk5bCirDpxT9tCCphRDNFZTjRhKkvqJJUFtEklqYbe7KCJb2rnjyT0YXlIS1GnzgkcrxqWGrmG3O1gAqQ2HA3tuiJWEiGJvagcAC7xBYnue_7H5EiMtGl8ppQF0r-CmVX-WqqQrPgWf8xkc3oXf3Gs')",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center p-6 bg-slate-900/10">
          <div className="glass-card p-6 rounded-3xl max-w-[280px]">
            <p className="text-slate-800 text-[13px] md:text-sm font-medium italic leading-relaxed text-center">
              &quot;No trabajamos por el trabajo de hoy, trabajamos por el trabajo de mañana y para asegurarnos de eso lo hacemos mejor hoy.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    <section className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="space-y-16">

        {/* 1. Remodelaciones */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                1. Remodelaciones de Vivienda
              </h3>
              <p className="text-slate-500 text-sm">
                Transforma tus espacios existentes con diseño y funcionalidad.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Cocinas",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL3O8MAXNoFSfX2ppQvLv6IdP-7cFZwCsOqjOljPAlzBNdfZ9f2tOtsCykqrxQWGFWlfmUhI9grSB2-mA9tqOHVfDM_IcNPxHSq0tuHB00TqVr7zFFU2o_Kz78X8r1CF3nNSODnUcLMC7VT898yX1UmLFWPVZTz1Hl1aUMr4G5b_BCiVjooo7NwFQlPmBeZvMibXQBZJMkYVW0gVtSybkPIqYt4-0DTMzFTJzfOCoblqsUFi_QPhVEe-OPSeV5YAlDg77OG9oLFlA",
                items: ["Muebles a medida", "Encimeras de piedra", "Grifería y fontanería"],
              },
              {
                title: "Baños",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjN60i-ywePxWmtj05-JFdm1t6MII9n_7AnQraEcaPjwJwK9q4wLNqHrbR8hZ_nPRsB5aQ7LLzGgCYRUJz0q0Rn6yZWyS8kyAwxmPzN-34gT8XwymY6GZ-PoAZZ09CwBAR71RcuhtXcvVMyko1soSMbuDHPS8O3SGrCrV17L-X2On1AomBRctOa7Jod6GoshR5gbrc0oZST12XR5CNmcCPAAWQmos2Wb-OB1fkhKDZjdRv0-dn-Xxb3fJpflmqmpuFLi9YRS4u13c",
                items: ["Revestimientos", "Sanitarios modernos", "Iluminación LED"],
              },
              {
                title: "Open Concepts",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABDOB_ArCvK8D7ren0FD3Dn_ZuigSwWwMMedvzhRTQnD0jM5-bA1JibCgHsCUMUMPs-PQV-zynL6wS43D4CUmIhsh91AfoH8y8SnCmYlFhPIMtCjeA6-x4-sKo49ABWMgh35kBF8KQA7zSCK9h8pTIsn1iOGkZ4jI4oqiB6KV7_6klnPJ6bpFovJFlCSdpEWasYmwXO-4XOURP8BzPYs1iqM8pvWivECcSlDfhfepMVu8b53Xg-hzvyTOGjR3ix4SNFP8V-ySKLQo",
                items: ["Derribo de muros", "Refuerzos estructurales", "Pisos continuos"],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-40 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${card.img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <h4 className="absolute bottom-4 left-4 text-white font-bold">
                    {card.title}
                  </h4>
                </div>

                <div className="p-4">
                  <ul className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    {card.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-white p-8 md:p-12 rounded-4xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest">
              En menos de 24h
            </span>
            <h3 className="text-3xl font-black">Servicios Express</h3>
            <p className="text-white/80">
              ¿Una emergencia o un arreglo menor? Te conectamos con profesionales listos para actuar hoy mismo.
            </p>
          </div>

          <button className="bg-white text-primary font-black px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
            SOLICITAR AHORA
            <span className="material-symbols-outlined">bolt</span>
          </button>
        </div>

      </div>
    </section>



    {/* El resto del código sigue exactamente el mismo patrón:
        - class -> className
        - style -> style={{ backgroundImage: "url(...)" }}
        No hay más cambios necesarios para Next.js */}
    </main>

   );
}