'use client'


export default function TutorialComponent(props) {
    const { arrowBeforeTw, arrowAfterTw, bubbleDivTw, numStep, text, textTw, totalSteps } = props
    return (
        <div
            className={`relative left-[52%] -top-[78%] text-dark-blue`}
        >
            <div
                className={`${bubbleDivTw} ${arrowBeforeTw} ${arrowAfterTw}`}
            >
                <div
                    className="w-full text-end text-[12px] font-medium"
                >
                    {numStep} / {totalSteps}
                </div>
                <p className={`${textTw}`}>
                    {text}
                </p>
            </div>
            
        </div>
    );
}