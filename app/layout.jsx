import '../styles/globals.scss'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Ômega Screen | Dep. Técnico',
  description: 'Indústria especializada em tintas serigráficas, produzindo um padrão de qualidade desde 2021 é referência em Pernambuco.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className='root'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}