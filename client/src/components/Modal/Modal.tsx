import type { AnyAction } from '@reduxjs/toolkit'

import { useDispatch } from 'react-redux'

import style from './Modal.module.css'

interface ModalProps {
    children: React.ReactNode
    functionModal?: () => AnyAction
    syncFunction?: () => void
}

const Modal = ({
    children,
    functionModal,
    syncFunction,
}: ModalProps): JSX.Element => {
    const dispatch = useDispatch()

    const handleModalContainerClick = (e: React.MouseEvent): void => {
        e.stopPropagation()
    }

    const closeModalFunction = (): void => {
        if (functionModal) {
            dispatch(functionModal())
        }
    }

    return (
        <article
            className={style.modal}
            onClick={syncFunction ?? closeModalFunction}
        >
            <div
                className={style.container}
                onClick={handleModalContainerClick}
            >
                <button
                    className={style.modalClose}
                    onClick={syncFunction ?? closeModalFunction}
                >
                    x
                </button>
                {children}
            </div>
        </article>
    )
}

export default Modal
