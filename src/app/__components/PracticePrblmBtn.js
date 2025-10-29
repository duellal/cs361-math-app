
export default function PrblmBtn(props) {
    const { text, handleSubmit, tw } = props
    return (
        <button
            className={`border-3 border-dark-blue bg-white text-black px-2 mr-[15px] flex place-items-center ${tw}`}
            onClick={handleSubmit}
        >
            { text }
        </button>
    );
}