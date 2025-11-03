'use client'

import ContentDiv from "@/app/__components/contentDiv"
import PrblmBtn from "@/app/__components/PracticePrblmBtn"
import { XIcon } from "@phosphor-icons/react"

import { confirmAnswerBtnTw, cancelBtnTw, h3Tw } from "@/app/_styling/tw_variables";

export default function ConfirmAnswer(props){
    const { answerInput, handleConfirmClose, handleSubmitBtn, popupDivTw } = props

    let confirmAnswer = <div
                            className="w-full flex flex-wrap justify-center text-dark-blue text-center"
                            key={`confirm-answer-box-div`}
                        >
                            <p className="w-full mb-[10px]">
                                You answered:
                            </p>
                            <div className="w-fit px-[25px] py-[3px] border-2 border-dark-blue">
                                {answerInput}
                            </div>
                        </div>

    let confirmBtns =   <div
                            className="w-[95%] text-dark-blue flex justify-between"
                            key={`confirm-btn-div`}
                        >
                            <PrblmBtn
                                text={'Yes, submit my answer'}
                                handleClick={handleSubmitBtn}
                                tw={`${confirmAnswerBtnTw}`}
                            />

                            <PrblmBtn
                                text={'No, I want to edit my answer'}
                                handleClick={handleConfirmClose}
                                tw={`${confirmAnswerBtnTw}`}
                            />
                        </div>

    let confirmCancelBtn =  <div
                                key={`confirm-cancel-div`}
                                className="w-full"
                            >
                                <button
                                    onClick={handleConfirmClose}
                                    className={`${cancelBtnTw}`}
                                >
                                    <XIcon size={22} weight="bold" />
                                </button>
                            </div>

    const confirmh3 =   <h3
                            key={`confirmAnswer-h3`}
                            className={h3Tw}
                        >
                            Confirm Answer
                        </h3>


    let confirmText =   <p
                            className="w-full text-dark-blue text-center mt-[30px] mb-[20px]"
                            key={`confirm-p`}
                        >
                            Would you like to submit your answer?
                        </p>


    return (
        <div className={`${popupDivTw}`}>
            <ContentDiv
                div_key={`tutorial-div`}
                div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[460px] rounded-[60px]`}
                order={[confirmh3, confirmCancelBtn, confirmAnswer, confirmText, confirmBtns]}
            />
        </div>
    )
}