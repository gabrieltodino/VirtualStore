import '../styles/global.scss'

import { ShoppingCartProvider } from '../contexts/ShoppingCarContext'

function MyApp({ Component, pageProps }) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider>
  )
}

export default MyApp
