import React from 'react'
import style from "./burgermenu.module.css"

interface BurgerMenuProps {
    active: boolean
    setActive: Function
    children: React.ReactNode
}

const BurgerMenu:React.FC<BurgerMenuProps> = ({active,setActive, children}) => {
    
    return (
        <div className={active? [style.burger, style.active].join(' ') : style.burger}>
            {children}
        </div>
    )
}
export default BurgerMenu;