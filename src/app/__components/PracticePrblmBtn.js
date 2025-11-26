export default function PrblmBtn(props) {
    const { cssClass, disabled, handleClick, text, tw } = props
    return (
        <button
            className={`${cssClass} text-dark-blue flex place-items-center justify-center ${tw}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
