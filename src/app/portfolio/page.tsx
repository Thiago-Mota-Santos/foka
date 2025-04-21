'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-accent">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Nossos Projetos e Cases de Sucesso
            </h1>
            <p className="max-w-[800px] text-white md:text-xl font-medium">
              Confira alguns dos projetos que realizamos e veja como ajudamos
              nossos clientes a alcançar excelência em refrigeração industrial.
            </p>
          </div>
        </div>
      </section>

      {/* Introdução Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-black md:text-lg">
              Ao longo de mais de 30 anos de atuação, a Foka Refrigeração já
              entregou centenas de projetos de refrigeração industrial para
              clientes de diversos segmentos. Cada trabalho é uma prova do nosso
              compromisso com a qualidade, a eficiência e a satisfação do
              cliente. Aqui, você pode conferir alguns dos nossos cases de
              sucesso e entender como podemos ajudar o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Case 1 Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div className="w-full flex items-center justify-center">
              <div className="w-full h-[400px] overflow-hidden rounded-lg relative">
                <Image
                  src="/peixaria.png"
                  alt="Walk-in Cooler para Supermercado"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-white font-bold shadow-sm">
                Case de Sucesso
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
                Walk-in Cooler para Supermercado de Grande Porte
              </h2>
              <div className="space-y-4 text-black">
                <p>
                  Um supermercado de grande porte precisava de uma solução de
                  armazenamento refrigerado para aumentar a capacidade de
                  estocagem de produtos perecíveis, como carnes, laticínios e
                  hortifrúti.
                </p>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desafios:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Espaço limitado no estoque</li>
                    <li>
                      Necessidade de controle preciso de temperatura para
                      diferentes tipos de produtos
                    </li>
                    <li>Prazo curto para instalação</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Solução da Foka:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Projeto personalizado de um Walk-in Cooler com divisórias
                      internas para diferentes temperaturas
                    </li>
                    <li>Uso de materiais de alta eficiência energética</li>
                    <li>
                      Instalação realizada em tempo recorde, sem interromper as
                      operações do supermercado
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resultados:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Aumento de 40% na capacidade de armazenamento</li>
                    <li>Redução de 20% no consumo de energia</li>
                    <li>
                      Total satisfação do cliente com o prazo e a qualidade do
                      projeto
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case 2 Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div className="space-y-6 md:order-2">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-white font-bold shadow-sm">
                Case de Sucesso
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
                Balcão Refrigerado para Peixaria Premium
              </h2>
              <div className="space-y-4 text-black">
                <p>
                  Uma peixaria de alto padrão precisava de um balcão refrigerado
                  que mantivesse a qualidade dos pescados e proporcionasse uma
                  exibição atraente para os clientes.
                </p>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desafios:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Necessidade de um design moderno e funcional</li>
                    <li>
                      Controle preciso de temperatura para preservar a qualidade
                      dos pescados
                    </li>
                    <li>Espaço reduzido no ponto de venda</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Solução da Foka:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Desenvolvimento de um balcão refrigerado com design
                      personalizado e iluminação LED
                    </li>
                    <li>
                      Sistema de refrigeração de alta eficiência para manter a
                      temperatura ideal
                    </li>
                    <li>
                      Instalação rápida e sem interferência nas operações da
                      loja
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resultados:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Aumento de 30% nas vendas devido à melhor exibição dos
                      produtos
                    </li>
                    <li>Redução de perdas por deterioração de pescados</li>
                    <li>
                      Elogios dos clientes pelo visual moderno e funcional
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center md:order-1">
              <div className="w-full h-[400px] overflow-hidden rounded-lg relative">
                <Image
                  src="/peixes.jpeg"
                  alt="Balcão Refrigerado para Peixaria"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case 3 Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 md:gap-16 md:grid-cols-2">
            <div className="w-full flex items-center justify-center">
              <div className="w-full h-[400px] overflow-hidden rounded-lg relative">
                <Image
                  src="/padaria_02.jpg"
                  alt="Câmara Frigorífica para Indústria"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary px-4 py-2 text-sm text-white font-bold shadow-sm">
                Case de Sucesso
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
                Câmara Frigorífica para Indústria de Alimentos Congelados
              </h2>
              <div className="space-y-4 text-black">
                <p>
                  Uma indústria de alimentos congelados precisava ampliar sua
                  capacidade de armazenamento com uma câmara frigorífica de
                  grande porte.
                </p>
                <div>
                  <h3 className="text-xl font-bold mb-2">Desafios:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Necessidade de uma câmara com controle preciso de
                      temperatura para produtos congelados
                    </li>
                    <li>Espaço limitado na fábrica</li>
                    <li>Prazo apertado para conclusão do projeto</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Solução da Foka:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Projeto e instalação de uma câmara frigorífica com
                      capacidade para 500 toneladas de produtos
                    </li>
                    <li>
                      Sistema de refrigeração de alta eficiência e baixo consumo
                      energético
                    </li>
                    <li>
                      Conclusão do projeto dentro do prazo, sem interrupções na
                      produção
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resultados:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Aumento de 50% na capacidade de armazenamento</li>
                    <li>Redução de 15% no consumo de energia</li>
                    <li>
                      Total satisfação do cliente com a qualidade e o prazo de
                      entrega
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Projetos Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
              Galeria de Projetos Realizados
            </h2>
            <p className="max-w-[800px] text-black md:text-lg">
              Confira algumas imagens dos nossos projetos realizados. Cada foto
              representa um desafio superado e um cliente satisfeito com a
              qualidade do nosso trabalho.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-64 overflow-hidden rounded-lg relative">
              <Image
                src="/peixaria.png"
                alt="Projeto Peixaria"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg relative">
              <Image
                src="/peixes.jpeg"
                alt="Projeto Peixes"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg relative">
              <Image
                src="/padaria_02.jpg"
                alt="Projeto Padaria"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg relative">
              <Image
                src="/padaria_02.jpg"
                alt="Projeto Câmara Frigorífica"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg relative">
              <Image
                src="/peixaria.png"
                alt="Projeto Walk-in Cooler"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-lg relative">
              <Image
                src="/peixes.jpeg"
                alt="Projeto Balcão Refrigerado"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary to-accent">
        <div className="container px-6 md:px-8">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Gostou dos nossos projetos?
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
