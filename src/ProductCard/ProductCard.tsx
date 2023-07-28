import React from 'react'
import OrangeBtn from '../components/UI/OrangeBtn/OrangeBtn'
import style from "./productcard.module.css"

interface ProductCardProps {
    id: number
    title: string
    price: number
}

const ProductCard:React.FC<ProductCardProps> = ({id,price,title}) => {
    
    return (
        <div className={style.card}>
            <img className={style.img} src="https://via.placeholder.com/150" alt="" />
            <p className={style.title}>{title}</p>
            <p className={style.price}>{price} Руб.</p>
            <OrangeBtn>В корзину</OrangeBtn>
        </div>
    ) 
}
export default ProductCard;