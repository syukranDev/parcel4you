import Navbar from '@/components/Navbar'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Navbar/>
      <body className='body-bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
