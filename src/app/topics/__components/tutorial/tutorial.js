'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";


export default function TutorialComponent(props) {
    const { arrowBeforeTw, arrowAfterTw, btnsDivTw, btnsTw, btnArr, bubbleDivTw, mainDivTw, numStep, text, textTw, totalSteps } = props
    return (
        <div
            className={`${mainDivTw}`}
        >
            <div
                className={`${bubbleDivTw} ${arrowBeforeTw} ${arrowAfterTw}`}
            >
                <div
                    className="w-full text-end text-[12px]"
                >
                    {numStep} / {totalSteps}
                </div>
                
                <div
                    className="w-full"
                >
                    <p className={`${textTw}`}>
                        {text}
                    </p>

                    <div className={`${btnsDivTw}`} >
                        {
                            btnArr && btnArr.map((btn_text, btn_idx) => {
                                return(
                                    <PrblmBtn
                                        key={`btn-${btn_text}-${btn_idx}`}
                                        text={btn_text}
                                        tw={`${btnsTw}`}
                                        handleClick={null}
                                    />
                                )
                            })
                        }
                    </div>
                </div> 
            </div>
        </div>
    );
}
