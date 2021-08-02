import "../styles/global.scss";

import { ShoppingCartProvider } from "../contexts/ShoppingCarContext";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </CookiesProvider>
  );
}

export default MyApp;
