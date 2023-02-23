import type { ButtonProps } from 'src/types'

import style from './ButtonDisabled.module.css'

const ButtonDisabled = ({ content, type }: ButtonProps): JSX.Element => {
    return (
        <button disabled className={style.botoncito} type={type}>
            {content}
        </button>
    )
}

export default ButtonDisabled
