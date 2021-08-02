import { createContext, ReactNode, useState } from "react";
import { useCookies } from 'react-cookie';

type ShoppingCartContextProps = {
  shoppingCart: string[];
  HandleAddToShoppingCart: (Item: string) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cookies, setCookie] = useCookies(['ShoppingCart']);
  const [shoppingCart, addToShoppigCart] = useState(cookies.ShoppingCart ? cookies.ShoppingCart : []);

  let arrayItems = shoppingCart

  function HandleAddToShoppingCart(Item: string) {
    addToShoppigCart([...shoppingCart, Item]);

    arrayItems.push(Item)

    setCookie('ShoppingCart', arrayItems, { path: '/' });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        HandleAddToShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
