'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Projets() {
  const [projets, setProjets] = useState([])

  useEffect(() => {
    fetch('/api/projets')
      .then(res => res.json())
      .then(data => setProjets(data))
  }, [])

  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold mb-4">Mes Projets</h2>
      <ul className="space-y-6">
        {projets.map(projet => (
          <li key={projet.id} className="border p-4 rounded">
            <h3 className="text-xl font-semibold">{projet.titre}</h3>
            <p>{projet.description}</p>
            <a href={projet.lien} className="text-blue-600 underline">Voir le projet</a>
            <div className="mt-2">
              <Image src={projet.image} alt={projet.titre} width={300} height={200} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
