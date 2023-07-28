import React from 'react'
import style from "./header.module.css"
import logo from "./../../img/logo_header.svg"
import { Link } from 'react-router-dom'
import OrangeBtn from '../UI/OrangeBtn/OrangeBtn'

interface HeaderProps {
    
}

const Header:React.FC<HeaderProps> = ({}) => {

    return (
       <header className={`container ${style.container}`}>
            <div className={style.header}>
                <div className={style.logo}>
                    <Link to={'/'}>
                    <img src={logo} alt="" />
                    </Link>
                </div>
                <nav>
                    <ul className={style.nav}>
                        <Link to={'/catalog'}>
                        <li className={style.nav__link}>Каталог</li>
                        </Link>
                        <li className={style.nav__link}>О нас</li>
                        <li className={style.nav__link}>Информация</li>
                    </ul>
                </nav>
                <OrangeBtn>
                    Корзина
                </OrangeBtn>
            </div>
       </header>
    )
}
export default Header;