'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";


export default function TutorialComponent(props) {
    const { arrowBeforeTw, arrowAfterTw, btnsDivTw, btnsTw, btnArr, bubbleDivTw, handleConfirm, handleConfirmClose, mainDivTw, numStep, setAnswer, setNumStep, setSolutionDiv, setSubmitDisable, setTutorialDisable, skipHandleClick, skipText, skipTw, text, textTw, totalSteps, tutorialEndDiv, setTutorialEndDiv, showAnswer, setShowAnswer, setBlurBg } = props
    return (
        <div
            className={`${mainDivTw}`}
        >
            <div
                className={`${bubbleDivTw} ${arrowBeforeTw} ${arrowAfterTw}`}
            >
                {/* Skip tutorial + Tutorial # of Steps out of total Steps */}
                <div
                    className="flex justify-between items-center w-full text-end text-[12px] pt-3 pb-2 px-3"
                >
                    <PrblmBtn
                        text={skipText}
                        tw={skipTw}
                        handleClick={skipHandleClick}
                    />

                    <span>
                        {numStep} / {totalSteps}
                    </span>
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

                                if(numStep === 1 && btn_idx === 0){
                                    return
                                }
                                else{
                                    return (
                                        <PrblmBtn
                                            key={`btn-${btn_idx}`}
                                            text={text}
                                            tw={`${btnsTw}`}
                                            handleClick={evt => handleClick({ evt, handleConfirm, handleConfirmClose, numStep, setAnswer, setSolutionDiv, setSubmitDisable, setNumStep, setTutorialDisable, tutorialEndDiv, setTutorialEndDiv, showAnswer, setShowAnswer, setBlurBg, setTutorialDisable })}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </div> 
            </div>
        </div>
    );
}
