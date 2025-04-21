'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

const aboutImages = [
  { src: '/padaria_02.jpg', alt: 'Padaria' },
  { src: '/peixaria.png', alt: 'Peixaria' },
  { src: '/peixes.jpeg', alt: 'Nossa História' },
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-28 lg:py-32 bg-gradient-to-b from-primary to-accent">
        <div className="container px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-6 text-white">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  Mais de 30 anos de excelência em refrigeração industrial
                </h1>
                <p className="max-w-[600px] text-white md:text-xl font-medium">
                  Soluções personalizadas e de alta qualidade para atender às
                  necessidades dos nossos clientes.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row pt-2">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="font-bold text-black shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link href="/contato">Solicite um Orçamento</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary font-bold shadow-md hover:shadow-lg transition-shadow"
                  asChild
                >
                  <Link href="/servicos">Conheça Nossos Serviços</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/peixaria.png"
                alt="Refrigeração Industrial"
                width={550}
                height={550}
                className="w-full aspect-video object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-black">
                Nossos Serviços
              </h2>
              <p className="max-w-[900px] text-black font-medium md:text-xl">
                Oferecemos soluções completas em refrigeração industrial
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-3">
                <h3 className="text-2xl font-bold text-black">
                  Walk-in Cooler
                </h3>
                <p className="text-black">
                  Projetos e instalação de câmaras frigoríficas personalizadas
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-3">
                <h3 className="text-2xl font-bold text-black">
                  Balcões Refrigerados
                </h3>
                <p className="text-black">Soluções para peixarias e padarias</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-3">
                <h3 className="text-2xl font-bold text-black">Manutenção</h3>
                <p className="text-black">Serviços preventivos e corretivos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-white font-bold shadow-sm">
                Nossa História
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
                30 anos construindo excelência
              </h2>
              <p className="text-black md:text-lg">
                A Foka Refrigeração foi fundada há mais de 30 anos por Marcio
                Goulart de Bitencourt, um profissional apaixonado por
                refrigeração industrial.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-primary" />
                  <span className="text-black font-medium">
                    Experiência comprovada no mercado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-primary" />
                  <span className="text-black font-medium">
                    Atendimento personalizado
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-primary" />
                  <span className="text-black font-medium">
                    Soluções sob medida
                  </span>
                </div>
              </div>
              <Button
                variant="default"
                className="mt-6 font-bold shadow-md hover:shadow-lg transition-shadow"
                asChild
              >
                <Link href="/sobre">
                  Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="relative w-full h-[500px] overflow-hidden rounded-md">
                {aboutImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={800}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-4000 ease-in-out ${
                      currentImage === index
                        ? 'opacity-100 scale-100 blur-0'
                        : 'opacity-0 scale-[1.03] blur-[3px]'
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-accent text-white">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Entre em Contato
              </h2>
              <p className="mx-auto max-w-[700px] text-white font-medium md:text-xl">
                Estamos prontos para ajudar você com as melhores soluções em
                refrigeração
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3 w-full max-w-3xl mt-6">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 rounded-lg shadow-lg">
                <Phone className="h-10 w-10" />
                <p className="font-medium">(48) 3258-1011</p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 rounded-lg shadow-lg">
                <Mail className="h-10 w-10" />
                <p className="font-medium">fokamarcio@gmail.com</p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 rounded-lg shadow-lg">
                <MapPin className="h-10 w-10" />
                <p className="font-medium">
                  Rua Aduci Arbueis do Nascimento 250
                </p>
              </div>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="mt-10 font-bold text-black shadow-md hover:shadow-lg transition-shadow"
              asChild
            >
              <Link href="/contato">Solicite um Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
