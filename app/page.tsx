import Link from 'next/link'
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-10 gap-8 text-center">
      <Image src="/image/portfolio-cover.jpg" alt="Moi" width={150} height={150} className="rounded-full" />
      <h1>ALLA Mohamed</h1>
      <p>Développeur passionné par le web et les nouvelles technologies</p>

      <div className="flex gap-4">
        <Link href="/a-propos" className="text-blue-600 underline">À propos</Link>
        <Link href="/projets" className="text-blue-600 underline">Mes projets</Link>
        <Link href="/contact" className="text-blue-600 underline">Contact</Link>
      </div>
    </main>
  )
}
