'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

export default function ServicosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-accent">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Nossos Serviços
            </h1>
            <p className="max-w-[800px] text-white md:text-xl font-medium">
              Soluções completas em refrigeração industrial para o seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Walk-in Cooler Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-white font-bold shadow-sm">
                Serviço Principal
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
                Projetos e Instalação de Walk-in Cooler
              </h2>
              <div className="space-y-4 text-black md:text-lg">
                <p>
                  Especialistas na construção de Walk-in Coolers, oferecemos
                  soluções personalizadas para atender às necessidades da sua
                  empresa. Um Walk-in Cooler é ideal para armazenamento em
                  grande escala, garantindo a conservação de produtos com máxima
                  eficiência energética e controle de temperatura.
                </p>
                <p>
                  Nossos projetos são desenvolvidos com materiais de alta
                  qualidade e tecnologia avançada, garantindo durabilidade,
                  segurança e desempenho. Seja para indústrias, supermercados,
                  restaurantes ou outros segmentos, entregamos soluções sob
                  medida que se adaptam ao seu espaço e demanda.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-black">Benefícios:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-black">
                      Projetos customizados para o seu negócio
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-black">
                      Materiais de alta resistência e durabilidade
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-black">
                      Controle preciso de temperatura e umidade
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-black">
                      Eficiência energética para redução de custos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-black">
                      Instalação rápida e profissional
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-full h-[500px] overflow-hidden rounded-md relative">
                <Image
                  src="/padaria_02.jpg"
                  alt="Walk-in Cooler"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outros Serviços Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Nossos Serviços em Refrigeração Industrial
            </h2>
            <p className="max-w-[800px] text-black md:text-xl font-medium">
              Além da construção de Walk-in Coolers, oferecemos uma variedade de
              soluções em refrigeração industrial para diferentes segmentos.
              Confira nossos principais serviços:
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-44 relative overflow-hidden rounded-md mb-4">
                  <Image
                    src="/peixaria.png"
                    alt="Balcões Refrigerados para Peixarias"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Balcões Refrigerados para Peixarias
                </h3>
                <p className="text-black">
                  Balcões refrigerados projetados para manter a qualidade e
                  frescor dos pescados, com design funcional e alta eficiência
                  energética. Ideal para peixarias que precisam exibir seus
                  produtos de forma atraente e segura.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-44 relative overflow-hidden rounded-md mb-4">
                  <Image
                    src="/padaria_02.jpg"
                    alt="Balcões Refrigerados para Padarias"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Balcões Refrigerados para Padarias
                </h3>
                <p className="text-black">
                  Soluções refrigeradas para padarias, com balcões que preservam
                  a qualidade de pães, bolos, doces e outros produtos.
                  Oferecemos opções que combinam design moderno e
                  funcionalidade.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-44 relative overflow-hidden rounded-md mb-4">
                  <Image
                    src="/peixes.jpeg"
                    alt="Câmaras Frigoríficas"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Câmaras Frigoríficas
                </h3>
                <p className="text-black">
                  Projetamos e instalamos câmaras frigoríficas para
                  armazenamento em grande escala, ideais para indústrias,
                  frigoríficos e supermercados. Garantimos controle preciso de
                  temperatura e umidade para preservar a qualidade dos produtos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-44 relative overflow-hidden rounded-md mb-4">
                  <Image
                    src="/padaria_02.jpg"
                    alt="Manutenção Preventiva e Corretiva"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Manutenção Preventiva e Corretiva
                </h3>
                <p className="text-black">
                  Serviços de manutenção para garantir o bom funcionamento dos
                  seus sistemas de refrigeração. Realizamos inspeções
                  periódicas, reparos e ajustes para evitar falhas e prolongar a
                  vida útil dos equipamentos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="h-44 relative overflow-hidden rounded-md mb-4">
                  <Image
                    src="/peixes.jpeg"
                    alt="Consultoria Técnica Especializada"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-black">
                  Consultoria Técnica Especializada
                </h3>
                <p className="text-black">
                  Oferecemos consultoria para ajudar sua empresa a escolher as
                  melhores soluções em refrigeração, desde a seleção de
                  equipamentos até a otimização de processos. Nosso objetivo é
                  maximizar a eficiência e reduzir custos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Nosso Processo de Trabalho
            </h2>
            <p className="max-w-[800px] text-black md:text-xl font-medium">
              Na Foka Refrigeração, seguimos um processo claro e organizado para
              garantir a excelência em cada projeto. Conheça as etapas do nosso
              trabalho:
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Análise de Necessidades
              </h3>
              <p className="text-black">
                Entendemos as demandas do seu negócio e avaliamos o espaço
                disponível.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Projeto Personalizado
              </h3>
              <p className="text-black">
                Desenvolvemos um projeto sob medida, com foco em eficiência e
                funcionalidade.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Instalação Profissional
              </h3>
              <p className="text-black">
                Realizamos a instalação com equipe especializada, garantindo
                segurança e qualidade.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Testes e Ajustes
              </h3>
              <p className="text-black">
                Testamos todo o sistema para garantir o perfeito funcionamento.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                5
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                Suporte e Manutenção
              </h3>
              <p className="text-black">
                Oferecemos suporte técnico e manutenção para garantir a
                durabilidade do projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-accent">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Precisa de uma solução em refrigeração?
            </h2>
            <p className="max-w-[700px] text-white md:text-xl font-medium">
              Entre em contato conosco e solicite um orçamento sem compromisso!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-6 font-bold text-black shadow-md hover:shadow-lg transition-shadow"
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
