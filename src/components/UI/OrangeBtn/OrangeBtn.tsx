import React, { MouseEventHandler } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import style from "./orangebtn.module.css"

interface OrangeBtnProps {
    children: React.ReactNode
    clickBtn?: MouseEventHandler<HTMLButtonElement>
    active?: boolean
    id?: number
}

const OrangeBtn:React.FC<OrangeBtnProps> = ({children, clickBtn, active, id}) => {

    const productArr = useSelector((state:RootState) => state.productArr.productArr)
    console.log(id, 'qwe')
    
    return (
        <button disabled={active} className={productArr.includes(id!)? [style.btn, style.active].join(' ') : style.btn} onClick={clickBtn}>
            {children}
        </button>
    )
}
export default OrangeBtn;