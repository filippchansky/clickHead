import React from 'react'
import style from "./modal.module.css"

interface ModalProps {
    children: React.ReactNode
    active: boolean
    setActive: Function
}

const Modal:React.FC<ModalProps> = ({children, active,setActive}) => {
    
    return (
        <div className={active? [style.modal, style.active].join(' ') : style.modal} onClick={() => setActive(false)}>
            <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default Modal;