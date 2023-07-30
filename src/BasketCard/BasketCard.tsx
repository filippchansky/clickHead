import React from 'react'
import { useDispatch } from 'react-redux'
import OrangeBtn from '../components/UI/OrangeBtn/OrangeBtn'
import { Product } from '../models'
import { removeProductArr } from '../store/slice/ProductArr'
import style from "./basketcard.module.css"

interface BasketCardProps {
    product: Product
}

const BasketCard:React.FC<BasketCardProps> = ({product}) => {

    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(removeProductArr(product.id))
    }
    
    return (
        <div className={style.container}>
            <div className={style.card}>
            <div>
            <img className={style.img} src="https://via.placeholder.com/150" alt="" />
            </div>
            <div className={style.info}>
                <span className={style.text}><p>{product.title}</p></span>
                <span className={style.text}><p >{product.price} Руб.</p></span>
            </div>
            <div className={style.btn__delete}>
                <OrangeBtn clickBtn={deleteItem}>Удалить</OrangeBtn>
            </div>
            </div>
        </div>
    )
}
export default BasketCard;