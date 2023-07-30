import React, { useEffect } from "react";
import Basket from "../Basket/Basket";

interface BasketPageProps {}

const BasketPage: React.FC<BasketPageProps> = ({}) => {

  useEffect(() => {
    document.title = 'Корзина'
  },[])

  return (
    <div>
      <Basket />
    </div>
  );
};
export default BasketPage;
