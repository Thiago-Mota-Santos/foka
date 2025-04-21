import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { puffinFont } from '@/utils/fonts'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Foka Refrigeração - Soluções em Refrigeração Industrial',
  description: 'Mais de 30 anos de excelência em refrigeração industrial',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${puffinFont.variable} antialiased font-puffin`}
      >
        <Navigation />
        {children}
        <Footer />
        <Toaster
          position="top-right"
          closeButton
          richColors
          toastOptions={{
            unstyled: false,
            classNames: {
              closeButton: 'ml-[324px] mt-4',
            },
          }}
        />
      </body>
    </html>
  )
}
