import React from 'react'
import { Product } from '../models'
import style from "./basketcard.module.css"

interface BasketCardProps {
    product: Product
}

const BasketCard:React.FC<BasketCardProps> = ({product}) => {
    
    return (
        <div className={style.container}>
            <div className={style.card}>
            <div>
            <img className={style.img} src="https://via.placeholder.com/150" alt="" />
            </div>
            <div className={style.info}>
                <span className={style.text}>Название:<p>{product.title}</p></span>
                <span className={style.text}>Цена:<p >{product.price} Руб.</p></span>
            </div>
            </div>
        </div>
    )
}
export default BasketCard;