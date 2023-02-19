import type { ButtonProps } from 'src/types'

import style from './Button.module.css'

const Button = ({
    type,
    onClick,
    content,
    image = null,
}: ButtonProps): JSX.Element => {
    return (
        <button className={style.container} type={type} onClick={onClick}>
            {image && <img alt={image} src={image} />}
            {content}
        </button>
    )
}

export default Button
