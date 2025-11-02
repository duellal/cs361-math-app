
export default function PrblmBtn(props) {
    const { disabled, handleClick, text, tw } = props
    return (
        <button
            className={`border-3 border-dark-blue text-dark-blue p-2 flex place-items-center justify-center ${tw}`}
            onClick={handleClick}
            disabled={disabled}
        >
            { text }
        </button>
    );
}