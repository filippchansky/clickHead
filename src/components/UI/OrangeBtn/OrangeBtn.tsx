import React, { MouseEventHandler } from 'react'
import style from "./orangebtn.module.css"

interface OrangeBtnProps {
    children: React.ReactNode
    clickBtn?: MouseEventHandler<HTMLButtonElement>
    active?: boolean
}

const OrangeBtn:React.FC<OrangeBtnProps> = ({children, clickBtn, active}) => {
    
    return (
        <button disabled={active} className={style.btn} onClick={clickBtn}>
            {children}
        </button>
    )
}
export default OrangeBtn;