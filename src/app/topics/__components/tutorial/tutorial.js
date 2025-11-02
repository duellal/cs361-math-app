'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";


export default function TutorialComponent(props) {
    const { arrowBeforeTw, arrowAfterTw, btnsDivTw, btnsTw, btnArr, bubbleDivTw, mainDivTw, numStep, setNumStep, setTutorialDisable, text, textTw, totalSteps } = props
    return (
        <div
            className={`${mainDivTw} border`}
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
                            btnArr && btnArr.map((btn_obj, btn_idx) => {
                                const { text, handleClick } = btn_obj

                                return(
                                    <PrblmBtn
                                        key={`btn-${btn_idx}`}
                                        text={text}
                                        tw={`${btnsTw}`}
                                        handleClick={evt => handleClick({evt, numStep, setNumStep, setTutorialDisable})}
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
