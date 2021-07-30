import { createContext, ReactNode, useState } from "react";

type ShoppingCartContextProps = {
    shoppingCart: string[];
    HandleAddToShoppingCart: (Item : string) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function ShoppingCartProvider ({ children }: ShoppingCartProviderProps) {
    const [shoppingCart, addToShoppigCart] = useState([]);

    function HandleAddToShoppingCart(Item : string) {
        let ActualCart = shoppingCart
        ActualCart.push(Item)
        addToShoppigCart(ActualCart)
    }
  return (
    <ShoppingCartContext.Provider value={{
        shoppingCart,
        HandleAddToShoppingCart,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
