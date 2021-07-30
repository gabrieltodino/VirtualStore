import { createContext, ReactNode, useState } from "react";

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
  const [shoppingCart, addToShoppigCart] = useState([]);

  function HandleAddToShoppingCart(Item: string) {
    addToShoppigCart([...shoppingCart, Item]);
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
