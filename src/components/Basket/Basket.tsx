import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../BasketCard/BasketCard";
import Modal from "../UI/Modal/Modal";
import OrangeBtn from "../UI/OrangeBtn/OrangeBtn";
import Donat from "../Donat/Donat";
import { RootState } from "../../store";
import { removeCoin } from "../../store/slice/CoinSlice";
import { clearProductArr } from "../../store/slice/ProductArr";
import { removeUsd } from "../../store/slice/UsdSlice";
import style from "./basket.module.css";

interface BasketProps {}

const Basket: React.FC<BasketProps> = ({}) => {
  const [active, setActive] = useState(false);
  const [activeErr, setActiveErr] = useState(false);
  const [methodPayment, setMethodPayment] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [modalSuccess, setModalSuccess] = useState(false);
  const usdValue = useSelector((state: RootState) => state.usd.usd);
  const coinValue = useSelector((state: RootState) => state.coin.coin);
  const dispatch = useDispatch();
  const methodValue = ["USD", "Coin"];
  let finaliPrice = 0;
  const productSort = useSelector(
    (state: RootState) => state.productArr.productArr
  );
  const data = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    if (finaliPrice === 0) {
      setDisabled(true);
    } else setDisabled(false);
  });

  const dataSort = data
    .slice(0, 1)
    .flatMap((elem) =>
      elem.products.filter((item) => productSort.includes(item.id))
    );

  const uniqueArray = dataSort.filter((elem) => elem.id !== elem.id);

  console.log(uniqueArray, "qwe");

  console.log(dataSort);

  data.slice(0, 1).map((elem) =>
    elem.products
      .filter((prod) => productSort.includes(prod.id))
      .map((elem) => (finaliPrice += elem.price))
      .join("")
  ); // TODO: закинуть в useEffect

  console.log(finaliPrice);

  const changeMethod = (method: string) => {
    if (method === "USD") {
      setMethodPayment(method);
    } else if (method === "Coin") {
      setMethodPayment(method);
    }
  };

  const payment = () => {
    if (methodPayment === "USD") {
      if (finaliPrice > usdValue) {
        setActiveErr(true);
      } else if (finaliPrice <= usdValue) {
        dispatch(removeUsd(finaliPrice));
        dispatch(clearProductArr());
        setActive(false);
        alert("Успешно");
      }
    } else if (methodPayment === "Coin") {
      if (finaliPrice > coinValue) {
        setActiveErr(true);
      } else if (finaliPrice <= coinValue) {
        dispatch(removeCoin(finaliPrice));
        dispatch(clearProductArr());
        setActive(false);
        alert("Успешно");
      }
    }
  };

  return (
    <div className={`container ${style.container}`}>
      <h1 className={style.title}>Товаров в корзине: {productSort.length}</h1>
      <div className={style.basket}>
        <div className={style.product}>
          {dataSort.map((product) => (
            <BasketCard key={product.id} product={product} />
          ))}
        </div>
        <div className={style.purchase}>
          <span className={style.info}>
            Итого к оплате<p>{finaliPrice}</p>
          </span>
          <OrangeBtn active={disabled} clickBtn={() => setActive(true)}>
            Перейти к оплате
          </OrangeBtn>
          <Modal active={active} setActive={setActive}>
            <div className={style.modal__container}>
              <div>
                <h1>Выберите способ оплаты</h1>
              </div>
              <div className={style.content}>
                <Modal active={activeErr} setActive={setActiveErr}>
                  <h1>Недостаточно {methodPayment}</h1>
                  <Donat />
                </Modal>
                {methodValue.map((elem) => (
                  <div
                    key={elem}
                    className={
                      methodPayment === elem
                        ? [style.method, style.active].join(" ")
                        : style.method
                    }
                    onClick={() => changeMethod(elem)}
                  >
                    {elem}
                  </div>
                ))}
              </div>
              <p>
                К оплате:{" "}
                <span>
                  {finaliPrice} {methodPayment}
                </span>
              </p>
              <OrangeBtn clickBtn={payment}>Оплатить</OrangeBtn>
              <Modal active={modalSuccess} setActive={setModalSuccess}>
                <h1>Успешно!</h1>
              </Modal>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default Basket;
