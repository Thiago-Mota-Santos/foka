import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from './ui/Button'
import { Sheet, SheetContent, SheetTrigger } from './ui/Sheet'

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/foka_logo.png"
            alt="Foka Refrigeração"
            width={120}
            height={40}
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm text-black font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className="text-sm text-black font-medium hover:text-primary"
          >
            Sobre
          </Link>
          <Link
            href="/servicos"
            className="text-sm text-black font-medium hover:text-primary"
          >
            Serviços
          </Link>
          <Link
            href="/portfolio"
            className="text-sm text-black font-medium hover:text-primary"
          >
            Portfólio
          </Link>
          <Link
            href="/contato"
            className="text-sm text-black font-medium hover:text-primary"
          >
            Contato
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="default" asChild>
            <Link href="/contato">Solicite um Orçamento</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary">
                Home
              </Link>
              <Link
                href="/sobre"
                className="text-sm font-medium hover:text-primary"
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                className="text-sm font-medium hover:text-primary"
              >
                Serviços
              </Link>
              <Link
                href="/portfolio"
                className="text-sm font-medium hover:text-primary"
              >
                Portfólio
              </Link>
              <Link
                href="/contato"
                className="text-sm font-medium hover:text-primary"
              >
                Contato
              </Link>
              <Button variant="default" asChild>
                <Link href="/contato">Solicite um Orçamento</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
