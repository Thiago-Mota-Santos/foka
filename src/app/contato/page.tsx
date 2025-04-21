'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/TextArea'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const subject = `Contato via site - ${formData.name}`
    const body = `
      Nome: ${formData.name}
      Email: ${formData.email}
      Telefone: ${formData.phone}
      Empresa: ${formData.company}
      Mensagem: ${formData.message}
    `
    const mailtoUrl = `mailto:fokamarcio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entre em Contato
            </h1>
            <p className="text-muted-foreground">
              Entre em contato conosco! Estamos sempre disponíveis para te
              atender.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-start space-x-4">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">(48) 3258-1011</p>
                <p className="text-sm text-muted-foreground">
                  (48) 99981-4935 (WhatsApp)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  fokamarcio@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div className="space-y-1">
                <p className="text-sm font-medium">Endereço</p>
                <p className="text-sm text-muted-foreground">
                  Rua Aduci Arbueis do Nascimento 250
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Envie sua mensagem</h2>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo e entraremos em contato o mais breve
              possível.
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <Input
                placeholder="Nome"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              <Input
                type="tel"
                placeholder="Telefone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white text-black"
                required
              />
              <Input
                placeholder="Empresa"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-white text-black"
              />
            </div>
            <Textarea
              className="min-h-[150px] bg-white text-black"
              placeholder="Mensagem"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
