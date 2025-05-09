'use client'
import { useState } from 'react'

export default function Contact() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message envoyé ! (simulation)')
    setNom('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className="p-10">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} className="border p-2" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2"></textarea>
        <button type="submit" className="bg-blue-600 text-white p-2">Envoyer</button>
      </form>
    </main>
  )
}
