import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Portfolio de Mohamed ALLA",
  description: "Développeur web fullstack passionné",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="bg-black text-white px-6 py-4">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-xl font-bold">Portfolio</h1>
            <ul className="flex gap-6">
              <li><Link href="/" className="hover:underline">Accueil</Link></li>
              <li><Link href="/a-propos" className="hover:underline">À propos</Link></li>
              <li><Link href="/projets" className="hover:underline">Mes projets</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-10">
          {children}
        </main>

        <footer className="bg-black text-white text-center py-4">
          &copy; {new Date().getFullYear()} Mohamed ALLA — Tous droits réservés
        </footer>
      </body>
    </html>
  )
}
