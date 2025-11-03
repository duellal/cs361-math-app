
export default function PrblmBtn(props) {
    const { disabled, handleClick, text, tw } = props
    return (
        <button
            className={`text-dark-blue flex place-items-center justify-center ${tw}`}
            onClick={handleClick}
            disabled={disabled}
        >
            { text }
        </button>
    );
}