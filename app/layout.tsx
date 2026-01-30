import "./globals.css";
import { Inter } from "next/font/google";
import  Navbar from '@/component/Navbar'
import Footer from '@/component/Footer';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'ConstruMarket',
  description: 'Plataforma de servicios con pagos en custodia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="light" >
       <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Navbar/>
        {children}
         <Footer/>
        </div>
      </body>
    </html>
  );
}


