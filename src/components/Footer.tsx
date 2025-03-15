import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/foka_logo.png"
              alt="Foka Refrigeração"
              width={120}
              height={40}
            />
            <p className="text-sm text-muted-foreground">
              Mais de 30 anos de excelência em refrigeração industrial
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>Rua Aduci Arbueis do Nascimento 250</li>
              <li>Tel: (48) 3258-1011</li>
              <li>WhatsApp: (48) 99981-4935</li>
              <li>Email: fokamarcio@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-primary">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-primary">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidade" className="hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Foka Refrigeração. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
