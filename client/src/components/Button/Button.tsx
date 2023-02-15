import style from './Button.module.css'

interface IButton extends HTMLElement {
    // type:
    onClick: VoidFunction
    // content:
    // image:
}

const Button: IButton = ({
    type,
    onClick,
    content,
    image,
    ...props
}): JSX.Element => {
    return (
        <button className={style.container} type={type} onClick={onClick}>
            {image && <img src={image} alt={image} />}
            {content}
        </button>
    )
}

export default Button
