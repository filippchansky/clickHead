import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrangeBtn from "../UI/OrangeBtn/OrangeBtn";
import { RootState } from "../../store";
import { addProductArr, removeProductArr } from "../../store/slice/ProductArr";
import style from "./productcard.module.css";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  productArr: number[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  price,
  title,
  productArr,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("productArr", JSON.stringify(productArr));
  });

  const handleClick = () => {
    if (!productArr.includes(id)) {
      dispatch(addProductArr(id));
    } else if (productArr.includes(id)) {
      const index = productArr.indexOf(id);
      dispatch(removeProductArr(id));
    }
  };

  return (
    <div className={style.card}>
      <img className={style.img} src="https://via.placeholder.com/150" alt="" />
      <p className={style.title}>{title}</p>
      <p className={style.price}>{price} Руб.</p>
      <OrangeBtn id={id} clickBtn={handleClick}>
        {productArr.includes(id) ? "Удалить из корзины" : "Добавить в корзину"}
      </OrangeBtn>
    </div>
  );
};
export default ProductCard;
