
export default function PrblmBtn(props) {
    const { text, handleClick, tw } = props
    return (
        <button
            className={`border-3 border-dark-blue bg-white text-black p-2 mr-[15px] flex place-items-center justify-center ${tw}`}
            onClick={handleClick}
        >
            { text }
        </button>
    );
}