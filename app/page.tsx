
export default function HomePage() {
  return (
         <>
        <section className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                  Pagos 100% Protegidos
                </span>

                <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                  Contrata servicios con pago seguro{" "}
                  <span className="text-primary">por hitos</span>
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
                  Transforma tu espacio con profesionales verificados. Tu dinero se libera solo cuando apruebas cada etapa del trabajo.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 p-2 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-2 max-w-xl">
                <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                  <span className="material-symbols-outlined text-slate-400">search</span>
                  <input
                    className="w-full py-3 bg-transparent border-none focus:ring-0"
                    placeholder="¿Qué servicio buscas?"
                  />
                </div>

                <div className="flex-1 flex items-center px-4 gap-3">
                  <span className="material-symbols-outlined text-slate-400">location_on</span>
                  <input
                    className="w-full py-3 bg-transparent border-none focus:ring-0"
                    placeholder="Ubicación"
                  />
                </div>

                <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg">
                  Buscar
                </button>
              </div>

              <div className="flex items-center gap-6 text-slate-400">
                <div className="flex items-center gap-1 text-xs font-medium">
                  <span className="material-symbols-outlined text-green-500">verified_user</span>
                  Expertos Verificados
                </div>
                <div className="flex items-center gap-1 text-xs font-medium">
                  <span className="material-symbols-outlined text-green-500">lock</span>
                  Escrow de Seguridad
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video w-full bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjN60i-ywePxWmtj05-JFdm1t6MII9n_7AnQraEcaPjwJwK9q4wLNqHrbR8hZ_nPRsB5aQ7LLzGgCYRUJz0q0Rn6yZWyS8kyAwxmPzN-34gT8XwymY6GZ-PoAZZ09CwBAR71RcuhtXcvVMyko1soSMbuDHPS8O3SGrCrV17L-X2On1AomBRctOa7Jod6GoshR5gbrc0oZST12XR5CNmcCPAAWQmos2Wb-OB1fkhKDZjdRv0-dn-Xxb3fJpflmqmpuFLi9YRS4u13c')",
                  }}
                />
              </div>
            </div>

          </div>
        </section>
        {/* ¿Cómo prefieres empezar? */}
      <section className="max-w-[1000px] mx-auto px-6 py-10 md:py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
            ¿Cómo prefieres empezar?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group relative bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">
                search_insights
              </span>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-black mb-1.5 text-slate-900 dark:text-white">
                Tú eliges
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
                Explora nuestro catálogo, revisa perfiles y selecciona al profesional que mejor se adapte a tu proyecto.
              </p>
              <button className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all duration-200">
                Buscar profesionales
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-xl hover:shadow-primary/20 transition-all duration-300 flex items-start gap-5 overflow-hidden">
            <div className="absolute -top-2 -right-2 p-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-7xl">
                engineering
              </span>
            </div>

            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white relative z-10 group-hover:scale-105 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">
                manage_accounts
              </span>
            </div>

            <div className="flex flex-col h-full relative z-10">
              <h3 className="text-xl font-black mb-1.5">
                Nosotros nos encargamos
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-sm">
                Envía una solicitud rápida y nuestro equipo de Ops encontrará y coordinará a los mejores expertos por ti.
              </p>
              <button className="mt-auto inline-flex items-center gap-2 text-primary text-sm font-bold hover:text-blue-400 transition-all duration-200">
                Solicitud rápida
                <span className="material-symbols-outlined text-lg">
                  bolt
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
              ¿Cómo funciona?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Nuestra plataforma garantiza el control total de tu obra y la seguridad de tu presupuesto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paso 1 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  post_add
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                1. Solicita
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Describe tu proyecto y recibe presupuestos detallados de expertos calificados en minutos.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  account_balance_wallet
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                2. Paga en custodia
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Tu dinero se mantiene seguro en nuestra plataforma de custodia hasta que el trabajo avance.
              </p>
            </div>

            {/* Paso 3 */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  task_alt
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                3. Aprueba hitos
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Libera los pagos solo cuando estés satisfecho con los hitos completados y verificados.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-slate-950 py-12 md:py-16 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
                  Tu tranquilidad es <br />
                  <span className="text-primary">nuestra prioridad</span>
                </h2>

                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-md">
                  ConstruMarket actúa como intermediario para asegurar que tu experiencia sea
                  perfecta, segura y sin sorpresas.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-xl">
                      shield_with_heart
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Pagos en Custodia
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                      Control total de tu inversión.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-xl">
                      workspace_premium
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Profesionales de Élite
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                      Verificación exhaustiva.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-xl">
                      history_toggle_off
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Trazabilidad
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                      Evidencia visual de cada hito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800">
                    <span className="material-symbols-outlined text-xl">
                      support_agent
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      Soporte Ops
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                      Supervisión en cada paso.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="relative h-[380px] md:h-[450px]">
              <div className="absolute inset-0 rounded-4xl overflow-hidden shadow-2xl">

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://img.freepik.com/foto-gratis/ingenieros-tiro-medio-trabajando-juntos_23-2150275666.jpg')",
                  }}
                />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-6 rounded-3xl shadow-xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-white/20">
                    <p className="text-slate-800 text-sm md:text-base font-medium italic leading-relaxed tracking-tight text-center">
                      &quot;No trabajamos por el trabajo de hoy, trabajamos por el trabajo de mañana
                      y para asegurarnos de eso lo hacemos mejor hoy.&quot;
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        </section>



        {/* ================= SERVICIOS DESTACADOS ================= */}
       <section className="max-w-[1200px] mx-auto px-6 py-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
                Servicios destacados
              </h2>
              <a
                className="text-primary font-bold text-sm flex items-center gap-1 group"
                href="#"
              >
                Ver todos
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDL3O8MAXNoFSfX2ppQvLv6IdP-7cFZwCsOqjOljPAlzBNdfZ9f2tOtsCykqrxQWGFWlfmUhI9grSB2-mA9tqOHVfDM_IcNPxHSq0tuHB00TqVr7zFFU2o_Kz78X8r1CF3nNSODnUcLMC7VT898yX1UmLFWPVZTz1Hl1aUMr4G5b_BCiVjooo7NwFQlPmBeZvMibXQBZJMkYVW0gVtSybkPIqYt4-0DTMzFTJzfOCoblqsUFi_QPhVEe-OPSeV5YAlDg77OG9oLFlA')",
                  }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary shadow-sm">
                  TOP SERVICE
                </div>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                Remodelación General
              </h4>
              <p className="text-slate-500 text-sm">
                Baños, cocinas y ampliaciones
              </p>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAFvwDXZRNkbwebPxDgWWPZ3yg1Os6VmG7fKNPMYK16RxTdWzdt74Jp5KFwpqDUGlnmb_HCHN9z1gJxjouiY9YQjAo7ATbtEMZM82ZQAmlCFWsYqCsAfby4MuXJ1GKxhgeB3XtJnXUpM0HlpSBy1jOTtD9BunL93x1ybkkIuVC0-rxQbM05LK09JbHPkQZcyuLagNglS1l5FgGgTNZs-8hbfeHT1tiruDaP3xEqeNKilrWpo4d9syyDUiUmO8NE9aDgsOxUJ1dqqF8')",
                  }}
                />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                Electricidad
              </h4>
              <p className="text-slate-500 text-sm">
                Certificaciones SEC y reparaciones
              </p>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfdwe6jxKl_n63GwTiwU8iUI7CJ2Vydwl4Sxx43gIDa0ljf33hVhZ8Fjewv-xq4eywjYbWzvt_B3PHuvIHfmkhgdPLOv_ae23Ouk2K6fC5Ud9LYfkDuFIPb1hNDIy_GpzGYzGN0XFjWBRBdxG005210k5XlClFOWJuV5oKzfRiSMixiIpQiXiXkcIBgPZd-ewCSyYIN4E7Au0Dd9nXuzmWepSG1Uv-GMW7ZugKEXTk0m_iYBvNA7a1aYBFth2DMQIl-Z9g9iuGv0A')",
                  }}
                />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                Plomería
              </h4>
              <p className="text-slate-500 text-sm">
                Fugas e instalaciones completas
              </p>
            </div>

            {/* Card 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABDOB_ArCvK8D7ren0FD3Dn_ZuigSwWwMMedvzhRTQnD0jM5-bA1JibCgHsCUMUMPs-PQV-zynL6wS43D4CUmIhsh91AfoH8y8SnCmYlFhPIMtCjeA6-x4-sKo49ABWMgh35kBF8KQA7zSCK9h8pTIsn1iOGkZ4jI4oqiB6KV7_6klnPJ6bpFovJFlCSdpEWasYmwXO-4XOURP8BzPYs1iqM8pvWivECcSlDfhfepMVu8b53Xg-hzvyTOGjR3ix4SNFP8V-ySKLQo')",
                  }}
                />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                Pintura Profesional
              </h4>
              <p className="text-slate-500 text-sm">
                Interior y exterior de alta calidad
              </p>
            </div>
          </div>
        </section>


        {/* ================= FOOTER ================= */}
        
      </>
      
  );
}

