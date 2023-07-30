import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal/Modal";
import OrangeBtn from "../UI/OrangeBtn/OrangeBtn";
import { RootState } from "../../store";
import { addCoin } from "../../store/slice/CoinSlice";
import { addUsd, removeUsd } from "../../store/slice/UsdSlice";
import style from "./donat.module.css";

interface DonatProps {}

const Donat: React.FC<DonatProps> = ({}) => {
  const coinValue = useSelector((state: RootState) => state.coin.coin);
  const usdValue = useSelector((state: RootState) => state.usd.usd);
  const [inputCoin, setInputCoin] = useState<number | string>(""); // можно поменять string на undefined, но с ошибкой
  const [inputUsd, setInputUsd] = useState<number | string>("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  console.log(inputUsd, 'usd');

  

  useEffect(() => {
    localStorage.setItem("usd", JSON.stringify(usdValue));
  });

  useEffect(() => {
    localStorage.setItem("coin", JSON.stringify(coinValue));
  });

  const payUsd = () => {
    dispatch(addUsd(inputUsd));
    setInputUsd("");
  };

  const payCoin = () => {
    console.log(typeof inputCoin);
    if (inputCoin <= usdValue) {
      dispatch(addCoin(inputCoin));
      dispatch(removeUsd(inputCoin));
      setInputCoin("");
    } else {
      setActive(true);
    }
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Пополнить</h1>
        </div>
        <div className={style.content}>
          <div className={style.value}>
            <span>Пополнить Coin</span>
            <p>Баланс: {coinValue}</p>
            <input
              className={style.input}
              type="number"
              value={inputCoin}
              onChange={(e) => setInputCoin(Number(e.target.value))}
              placeholder="Введите кол-во"
            />
            <OrangeBtn active={inputCoin === ''? true: false} clickBtn={payCoin}>Пополнить</OrangeBtn>
            <Modal active={active} setActive={setActive}>
              <h1>Ошибка, недостаточно USD</h1>
            </Modal>
          </div>
          <div className={style.value}>
            <span>Пополнить Usd</span>
            <p>Баланс: {usdValue}</p>
            <input
              className={style.input}
              type="number"
              value={inputUsd}
              onChange={(e) => setInputUsd(Number(e.target.value))}
              placeholder="Введите кол-вой"
            />
            <OrangeBtn active={inputUsd === ''? true: false} clickBtn={payUsd}>Пополнить</OrangeBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donat;
