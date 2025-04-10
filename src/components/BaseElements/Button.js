import style from "./Button.module.scss";

const Button = ({text, type = 'primary', theme = 'dark', icon, width = 250, iconPlacement = 'front'}) => {

    return (
        <div className={`${style.Button} ${style[theme]} ${type === 'secondary' ? style.Secondary : ''}`} style={{width: width}}>
            <div className={style.Label}>
                {icon && iconPlacement === 'front' && <div className={style.Icon}>{icon}</div>}
                {text}
                {icon && iconPlacement === 'back' && <div className={style.Icon}>{icon}</div>}
            </div>
        </div>
    )
}

export default Button;