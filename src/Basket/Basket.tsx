import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BasketCard from "../BasketCard/BasketCard";
import OrangeBtn from "../components/UI/OrangeBtn/OrangeBtn";
import { RootState } from "../store";
import style from "./basket.module.css";

interface BasketProps {}

const Basket: React.FC<BasketProps> = ({}) => {
  let finaliPrice = 0;
  const productSort = useSelector(
    (state: RootState) => state.productArr.productArr
  );
  const data = useSelector((state: RootState) => state.product.products);

  const dataSort = data.flatMap((elem) => elem.products.filter(item => productSort.includes(item.id)));

  const uniqueArray = dataSort.filter(elem => elem.id!== elem.id);

  console.log(uniqueArray, 'qwe')

  console.log(dataSort)

    data.map((elem) =>
      elem.products
        .filter((prod) => productSort.includes(prod.id))
        .map((elem) => (finaliPrice += elem.price))
        .join("")
    ); // TODO: закинуть в useEffect
  

  console.log(finaliPrice)

  return (
    <div className={`container ${style.container}`}>
      <div className={style.basket}>
        <div className={style.product}>
          <h1>Товаров в корзине: {productSort.length}</h1>
          {dataSort.map(product => (
            <BasketCard key={product.id} product={product} />
          ))}
        </div>
        <div className={style.purchase}>
          <span className={style.info}>
            Итого к оплате<p>{finaliPrice}</p>
          </span>
          <OrangeBtn>Перейти к оплате</OrangeBtn>
        </div>
      </div>
    </div>
  );
};
export default Basket;
