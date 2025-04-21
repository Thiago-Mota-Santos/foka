import { Montserrat } from 'next/font/google'

// Since Puffin is a commercial font, we're using Montserrat as an alternative
// which has similar clean, modern characteristics
export const puffinFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-puffin',
  display: 'swap',
})
