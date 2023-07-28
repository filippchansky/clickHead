import React, { MouseEventHandler } from 'react'
import style from "./orangebtn.module.css"

interface OrangeBtnProps {
    children: React.ReactNode
    clickBtn?: MouseEventHandler<HTMLButtonElement>
}

const OrangeBtn:React.FC<OrangeBtnProps> = ({children, clickBtn}) => {
    
    return (
        <button className={style.btn} onClick={clickBtn}>
            {children}
        </button>
    )
}
export default OrangeBtn;