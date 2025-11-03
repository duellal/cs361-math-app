'use client'

import ContentDiv from "@/app/__components/contentDiv"
import PrblmBtn from "@/app/__components/PracticePrblmBtn"

import { confirmAnswerBtnTw, h3Tw, h4Tw } from "@/app/_styling/tw_variables";

export default function CompletedTutorial(props){
    const { handleTutorialAgainClick, handlePracticeClick, popupDivTw } = props

    let completedTutorialBtns =   <div
                            className="w-[95%] text-dark-blue flex justify-between"
                            key={`completed-tutorial-btn-div`}
                        >
                            <PrblmBtn
                                text={'Go over the tutorial again!'}
                                handleClick={handleTutorialAgainClick}
                                tw={`${confirmAnswerBtnTw}`}
                            />

                            <PrblmBtn
                                text={'Practice some problems!'}
                                handleClick={handlePracticeClick}
                                tw={`${confirmAnswerBtnTw}`}
                            />
                        </div>

    const completedTutorialH3 = <h3
                                    key={`completedTutorialAnswer-h3`}
                                    className={`m-0 ${h3Tw}`}
                                >
                                    Congradulations!
                                </h3>

    const completedTutorialH4 = <h4
                                    key={`completedTutorialAnswer-h4`}
                                    className={h4Tw}
                                >
                                    You Completed the Tutorial
                                </h4>


    return (
        <div className={`${popupDivTw}`}>
            <ContentDiv
                div_key={`tutorial-div`}
                div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[460px] rounded-[60px]`}
                order={[completedTutorialH3, completedTutorialH4,  completedTutorialBtns]}
            />
        </div>
    )
}