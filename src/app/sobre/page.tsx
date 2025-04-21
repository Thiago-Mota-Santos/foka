'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

export default function SobrePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-accent">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Sobre a Foka Refrigeração
            </h1>
            <p className="max-w-[800px] text-white md:text-xl font-medium">
              Há mais de 30 anos, entregando soluções de qualidade em
              refrigeração industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-white font-bold shadow-sm">
                Nossa História
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
                Tradição e expertise em refrigeração
              </h2>
              <div className="space-y-4 text-black md:text-lg">
                <p>
                  A Foka Refrigeração foi fundada há mais de 30 anos por Marcio
                  Goulart de Bitencourt, um profissional apaixonado por
                  refrigeração industrial. Desde o início, a empresa se dedicou
                  a oferecer soluções personalizadas e de alta qualidade,
                  conquistando a confiança de clientes em diversos segmentos
                  industriais.
                </p>
                <p>
                  Ao longo das décadas, a Foka se consolidou como uma referência
                  no mercado, graças ao compromisso com a excelência, a atenção
                  aos detalhes e a busca constante por inovação. Hoje, somos
                  reconhecidos pela nossa capacidade de entregar projetos que
                  superam as expectativas, sempre com foco na eficiência e na
                  durabilidade dos sistemas de refrigeração.
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="w-full h-[400px] overflow-hidden rounded-md relative">
                <Image
                  src="/peixes.jpeg"
                  alt="Nossa História"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-black">
                Oferecer soluções em refrigeração industrial que garantam
                eficiência, qualidade e satisfação para nossos clientes,
                contribuindo para o sucesso de seus negócios.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
              <p className="text-black">
                Ser reconhecida como a empresa líder em refrigeração industrial,
                referência em inovação e excelência no atendimento.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
              <ul className="text-black space-y-2">
                <li>• Qualidade em todos os processos</li>
                <li>• Compromisso com o cliente</li>
                <li>• Inovação e tecnologia</li>
                <li>• Integridade e transparência</li>
                <li>• Respeito ao meio ambiente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              O que nos torna diferentes?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Experiência Comprovada
              </h3>
              <p className="text-black">
                Mais de 30 anos de atuação no mercado de refrigeração
                industrial, com projetos robustos e eficientes.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Atendimento Personalizado
              </h3>
              <p className="text-black">
                Soluções sob medida, desenvolvidas para atender às necessidades
                específicas de cada cliente.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Tecnologia e Inovação
              </h3>
              <p className="text-black">
                Uso das mais avançadas tecnologias e técnicas do setor,
                garantindo sistemas modernos e sustentáveis.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Compromisso com Prazos
              </h3>
              <p className="text-black">
                Planejamento detalhado para cumprir prazos e orçamentos, sem
                surpresas para o cliente.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Equipe Especializada
              </h3>
              <p className="text-black">
                Profissionais altamente capacitados e experientes, com
                treinamento constante para excelência técnica.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Suporte Diferenciado
              </h3>
              <p className="text-black">
                Assistência técnica ágil e eficiente, disponível mesmo após a
                conclusão dos projetos.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Soluções Sustentáveis
              </h3>
              <p className="text-black">
                Foco em eficiência energética e redução de impactos ambientais,
                alinhados às demandas atuais.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <Check className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-black mb-2">
                Carteira de Clientes Consolidada
              </h3>
              <p className="text-black">
                Relacionamentos sólidos com uma ampla carteira de clientes, que
                confiam em nossa expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col space-y-4">
                <p className="text-black italic">
                  &quot;A Foka Refrigeração entregou um projeto impecável para
                  nossa indústria. Recomendo!&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JS
                  </div>
                  <div>
                    <p className="font-bold text-black">João Silva</p>
                    <p className="text-gray-600">Gerente Industrial</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col space-y-4">
                <p className="text-black italic">
                  &quot;Profissionalismo e qualidade são as marcas da Foka.
                  Parceiros de confiança!&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MO
                  </div>
                  <div>
                    <p className="font-bold text-black">Maria Oliveira</p>
                    <p className="text-gray-600">Diretora de Operações</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex flex-col space-y-4">
                <p className="text-black italic">
                  &quot;Desde que contratamos a Foka, nossos problemas com
                  refrigeração acabaram. Equipe excepcional!&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    CP
                  </div>
                  <div>
                    <p className="font-bold text-black">Carlos Pereira</p>
                    <p className="text-gray-600">Proprietário de Peixaria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-accent">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Gostou de conhecer nossa história?
            </h2>
            <p className="max-w-[700px] text-white md:text-xl font-medium">
              Entre em contato e descubra como podemos ajudar sua empresa com
              soluções em refrigeração industrial!
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
