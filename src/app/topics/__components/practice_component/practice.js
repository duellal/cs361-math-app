'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";
import { useRouter } from "next/navigation";
import { SimpleProblem } from "./problem";
import { useState } from "react";
import ContentDiv from "@/app/__components/contentDiv";
import { XIcon } from "@phosphor-icons/react";


// Buttons
const mainBtnTw = `rounded-lg h-[45px]`
const bottomBtnsTw = `${mainBtnTw} w-[132px] w-min-fit text-center p-3 cursor-pointer`
const confirmAnswerBtnTw = `${bottomBtnsTw} w-[180px] border-dark-blue h-fit py-[5px] text-[14px] font-bold`
const cancelBtnTw = `cursor-pointer absolute top-[20px] right-[30px]
cursor-pointer absolute top-[20px] right-[30px] text-dark-blue`

// Divs
const divMarginsTw = `px-[50px] py-[20px]`

// Headers
const h2Tw = `text-[30px] font-bold text-center mb-[10px] text-dark-blue w-full`


export default function PracticeProblemsDiv() {
    const router = useRouter()

    // States:
    const [answerInput, setAnswer] = useState(null)
    const [blurBg, setBlurBg] = useState(false)
    const [confirmAnswerPopup, setConfirmAnswerPopup] = useState(false)
    const [hintPopup, setHintPopup] = useState(false)
    const [submitDisable, setSubmitDisable] = useState(true)
    const [videoPopup, setVideoPopup] = useState(false)

    // Styling with Variables:
    const popupDivTw = `w-full h-[calc(100vh-145px)] ${blurBg ? `backdrop-blur-xs` : null} absolute top-[100px] place-items-center place-content-center`


    let answer = 33
    let hint = {
        33: `What is 20 + 10, and 0 + 3? Then, add those two sums together.`
    }


    const handleConfirm = () => {
        console.log('Submit Answer?', answerInput)
        let answer = Number(answerInput)

        if (answer) {
            setConfirmAnswerPopup(true)
            setAnswer(answer)
        }
        else {
            console.log('Handle Error here')
        }

        setBlurBg(true)
    }

    const handleConfirmClose = (evt) => {
        setConfirmAnswerPopup(false)
        setBlurBg(false)
    }

    const handleHint = () => {
        setBlurBg(true)
        setHintPopup(true)
    }

    const handleHintClose = (evt) => {
        setHintPopup(false)
        setBlurBg(false)
    }

    const handleVideoBtn = () => {
        setBlurBg(true)
        setVideoPopup(true) 
    }

    const handleVideoClose = (evt) => {
        setVideoPopup(false)
        setBlurBg(false)
    }

    const handleSkip = () => {
        console.log('Skip btn')
    }


    let confirmAnswer = <div 
                            className="w-full flex flex-wrap justify-center text-dark-blue text-center"
                            key={`confirm-answer-box-div`}
                        >
                            <p className="w-full mb-[10px]">
                                You answered:
                            </p>
                            <div className="w-fit px-[25px] py-[3px] border-2 border-dark-blue">
                                { answerInput }
                            </div>
                        </div>

    let confirmBtns =   <div 
                            className="w-[95%] text-dark-blue flex justify-between"
                            key={`confirm-btn-div`}
                        >
                            <PrblmBtn
                                text={'Yes, submit my answer'}
                                handleClick={handleConfirm}
                                tw={`${confirmAnswerBtnTw}`}
                            />

                            <PrblmBtn
                                text={'No, I want to edit my answer'}
                                handleClick={handleConfirmClose}
                                tw={`${confirmAnswerBtnTw}`}
                            />
                        </div>

    let confirmCancelBtn = <div
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

    const confirmH2 = <h2
                        key={`confirmAnswer-h2`}
                        className={h2Tw}
                    >
                        Confirm Answer
                    </h2>


    let confirmText =   <p
                            className="w-full text-dark-blue text-center mt-[30px] mb-[20px]"
                        >
                            Would you like to submit your answer?
                        </p>

    const hintCancelBtn = <div 
                        key={`hint-cancel-div`}
                        className="w-full"
                    >
                        <button
                            onClick={handleHintClose}
                            className={`${cancelBtnTw}`}
                        >
                            <XIcon size={22} weight="bold" />
                        </button>
                    </div>
    
    const hintH2 =  <h2 
                        key={`hint`}
                        className={h2Tw}
                    >
                        Hint
                    </h2>

    const hintText = <p
                    key={`hint-text`}
                    className={`text-dark-blue text-center text-[18px] px-[20px] font-[500]`}
                >
                    { hint[answer] }
                </p>

    const videoCancelBtn = <button
                        key={`tutorial-btn`}
                        onClick={handleVideoClose}
                        className={`${cancelBtnTw}`}
                    >
                        <XIcon size={22} weight="bold" />
                    </button>

    const videoH2 = <h2 
                        key={`tutorial-h2`}
                        className={`${h2Tw} mb-[-10px]`}
                    >
                            Tutorial
                        </h2>

    const videoVideo = <video
                            key={`tutorial-video`}
                            width={500}
                            height={300}
                            controls
                            autoPlay
                            className="rounded-[40px] mt-[20px]"
                        >
                            <source src={null} type="video/mp4" />
                        </video>
    

    return (
        <div
            className={`w-[810px] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw}`}
        >
            {/* h2, hint button + tutorial button */}
            <div className={`w-full flex items-end justify-between`}>
                <h2 className={`border-b-2 border-light-blue text-[35px] font-bold mb-[10px]`}>
                    Directions
                </h2>

                <div className={`w-[50%] flex justify-end self-center`}>
                    <PrblmBtn 
                        text={'Need a Hint?'}
                        handleClick={handleHint}
                        tw={`${bottomBtnsTw} w-auto`}
                    />

                
                    <PrblmBtn
                        text={'?'}
                        handleClick={handleVideoBtn}
                        tw={`size-[40px] text-medium-blue text-[30px] font-black rounded-full place-content-center self-center cursor-pointer`}
                    />
                </div>
            </div>
            
            {/* Instructions */}
            <div
                className={`w-full text-[24px] font-medium`}
            >
                <p>
                    Input the best answer below.
                </p>
            </div>

            {/* Problem */}
            <SimpleProblem
                numArr={[20, '+', 13, '=', null]}
                setAnswer={setAnswer}
            />

            {/* Answer Input + Submit/Skip Problem Btns */}
            <div className={`w-full mb-[20px] flex justify-between`}>
                <div className="w-[75%] h-[50%] flex justify-between">
                    <p className={`font-bold text-[30px] mr-[15px] content-end`}>
                        Answer:
                    </p>

                    <input
                        type="text"
                        placeholder="Type Answer Here"
                        className="w-full bg-white text-dark-blue font-medium rounded-lg border-3 border-light-blue p-[10px] h-fit focus:border-dark-blue"
                        onChange={(evt => {
                            let value = evt.target.value

                            if(value.length > 0){
                                setSubmitDisable(false)
                            }
                            else{
                                setSubmitDisable(true)
                            }

                            setAnswer(value)
                        })}
                    />
                </div>

                <div className="">
                    <PrblmBtn
                        disabled={submitDisable}
                        text={'Submit'}
                        tw={`${bottomBtnsTw} mb-[15px] disabled:bg-[#C4C5C8] disabled:cursor-default`}
                        handleClick={handleConfirm}
                    />

                    <PrblmBtn
                        text={'Skip Problem'}
                        tw={`${bottomBtnsTw}`}
                        handleClick={handleSkip}
                    />
                </div>
            </div>

            {
                hintPopup && 
                    <div className={`${popupDivTw}`}>
                        <ContentDiv
                            div_key={`hint-div`}
                            div_tw={`absolute top-[20%] w-[460px] border-[12px] border-light-blue bg-white text-dark-blue flex content-evenly flex-wrap`}
                            order={[hintCancelBtn, hintH2, hintText]}
                        />
                    </div>
            }

            {
                videoPopup &&
                    <div className={`${popupDivTw}`}>
                        <ContentDiv
                            div_key={`tutorial-div`}
                            div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[550px] content-end justify-between`}
                            order={[videoH2, videoCancelBtn, videoVideo]}
                        />
                    </div>
            }

            {
                confirmAnswerPopup && 
                    <div className={`${popupDivTw}`}>
                        <ContentDiv
                            div_key={`tutorial-div`}
                            div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[460px]`}
                            order={[confirmH2, confirmCancelBtn, confirmAnswer, confirmText, confirmBtns]}
                        />
                    </div>
            }
        </div>
    );
}