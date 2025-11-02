'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";
import { useRouter } from "next/navigation";
import { SimpleProblem } from "./problem";
import { useState } from "react";
import ContentDiv from "@/app/__components/contentDiv";
import { XIcon } from "@phosphor-icons/react";
import TutorialComponent from "../tutorial/tutorial";


// Buttons
const mainBtnTw = `rounded-lg h-[45px]`
const bottomBtnsTw = `${mainBtnTw} w-[132px] text-center p-3 cursor-pointer`
const confirmAnswerBtnTw = `${bottomBtnsTw} w-[180px] border-dark-blue h-fit py-[5px] text-[14px] font-bold`
const cancelBtnTw = `cursor-pointer absolute top-[20px] right-[30px]
cursor-pointer absolute top-[20px] right-[30px] text-dark-blue`

// Divs
const divMarginsTw = `px-[50px] py-[20px]`

// Headers
const h3Tw = `text-[30px] font-bold text-center mb-[10px] text-dark-blue w-full`


export default function PracticeProblemsDiv(props) {
    const { answerInput, prblmArr, randomIdx, setAnswer, setRandomIdx, setSolutionDiv, setSolvedArr, solvedArr } = props
    const router = useRouter()

    // States:
    const [blurBg, setBlurBg] = useState(false)
    const [confirmAnswerPopup, setConfirmAnswerPopup] = useState(false)
    const [hintPopup, setHintPopup] = useState(false)
    const [inputErr, setInputErr] = useState(null)
    const [numStep, setNumStep] = useState(1)
    const [totalSteps, setTotalSteps] = useState(8)
    const [submitDisable, setSubmitDisable] = useState(true)
    const [tutorialDisable, setTutorialDisable] = useState(false)
    const [videoPopup, setVideoPopup] = useState(false)

    // Styling with Variables:
    const popupDivTw = `w-full h-[calc(100vh-145px)] ${blurBg ? `backdrop-blur-xs` : null} absolute top-[100px] place-items-center place-content-center`
    

    const handleConfirm = () => {
        let answer = Number(answerInput)

        if (answer) {
            setConfirmAnswerPopup(true)
            setAnswer(answer)
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
        let idx = randomIdx + 1

        if (solvedArr.length === prblmArr.length) {
            setRandomIdx(null)
            return
        }
        else if (idx >= prblmArr.length) {
            idx = 0
        }

        if (!solvedArr.includes(idx)) {
            setRandomIdx(idx)
        }
        else {
            while (solvedArr.includes(idx)) {
                idx += 1

                if (idx >= prblmArr.length) {
                    idx = 0
                }

                if (!solvedArr.includes(idx)) {
                    setRandomIdx(idx)
                }
            }
        }
    }

    const handleSubmitBtn = () => {
        if(answerInput === prblmArr[randomIdx].answer){
            setSolvedArr([...solvedArr, randomIdx])
        }

        setBlurBg(false)
        setConfirmAnswerPopup(false)
        setSolutionDiv(true)
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
                                handleClick={handleSubmitBtn}
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

    const confirmh3 = <h3
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
    
    const hinth3 =  <h3 
                        key={`hint`}
                        className={h3Tw}
                    >
                        Hint
                    </h3>

    const hintText = <p
                    key={`hint-text`}
                    className={`text-dark-blue text-center text-[18px] px-[20px] font-[500]`}
                >
                    { prblmArr[randomIdx]?.hint }
                </p>

    const videoCancelBtn = <button
                        key={`tutorial-btn`}
                        onClick={handleVideoClose}
                        className={`${cancelBtnTw}`}
                    >
                        <XIcon size={22} weight="bold" />
                    </button>

    const videoh3 = <h3 
                        key={`tutorial-h3`}
                        className={`${h3Tw} mb-[-10px]`}
                    >
                            Tutorial
                        </h3>

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
            {/* h3, hint button + tutorial button */}
            <div className={`w-full flex items-end justify-between`}>
                <h3 className={`border-b-2 border-light-blue text-[35px] font-bold mb-[10px]`}>
                    Directions
                </h3>

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
                numArr={prblmArr[randomIdx]?.problem}
                setAnswer={setAnswer}
            />

            {/* Answer Input + Submit/Skip Problem Btns */}
            <div className={`w-full mb-[20px] flex justify-between`}>
                <div className="w-[75%] h-[50%] flex justify-between">
                    <p className={`font-bold text-[30px] mr-[15px] content-end`}>
                        Answer:
                    </p>

                    <div className={`w-full`}>
                        <input
                            type="text"
                            placeholder="Type Answer Here"
                            className="w-full bg-white text-dark-blue font-medium rounded-lg border-3 border-light-blue p-[10px] h-fit focus:border-dark-blue"
                            onChange={(evt => {
                                let value = evt.target.value

                                if (value.length > 0) {
                                    if(!value.match(/[0-9]/)){
                                        setInputErr(true)
                                        setSubmitDisable(true)
                                    }
                                    else{
                                        setInputErr(false)
                                        setSubmitDisable(false)
                                    }
                                }
                                else {
                                    setSubmitDisable(true)
                                    setInputErr(false)
                                }

                                setAnswer(value)
                            })}
                        />

                        {
                            inputErr ? 
                                <p className="text-error-red font-bold mt-[10px] text-center [text-shadow:0px_0px_10px_white]">
                                    Input must be a number
                                </p>
                            : null
                        }
                    </div>
                    
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
                            div_tw={`absolute top-[20%] w-[460px] border-[12px] border-light-blue bg-white text-dark-blue flex content-evenly flex-wrap rounded-[60px]`}
                            order={[hintCancelBtn, hinth3, hintText]}
                        />
                    </div>
            }

            {
                videoPopup &&
                    <div className={`${popupDivTw}`}>
                        <ContentDiv
                            div_key={`tutorial-div`}
                            div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[550px] content-end justify-between rounded-[60px]`}
                            order={[videoh3, videoCancelBtn, videoVideo]}
                        />
                    </div>
            }

            {
                confirmAnswerPopup && 
                    <div className={`${popupDivTw}`}>
                        <ContentDiv
                            div_key={`tutorial-div`}
                            div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[460px] rounded-[60px]`}
                            order={[confirmh3, confirmCancelBtn, confirmAnswer, confirmText, confirmBtns]}
                        />
                    </div>
            }

            {
                !tutorialDisable && 
                    <TutorialComponent
                        text={`Some text for width here`}
                        textTw={`text-wrap text-dark-blue`}
                        bubbleDivTw={`relative left-1/5 top-[-125px] min-size-fit bg-white 
                            border-4 border-dark-blue rounded-[10px] px-3 pt-2 pb-5`
                        }
                        arrowBeforeTw={`before:content-[''] before:absolute
                            before:left-[18%] before:bottom-[-32px]
                            before:border-l-[16px] before:border-l-dark-blue
                            before:border-r-[16px] before:border-r-transparent
                            before:border-t-[16px] before:border-t-dark-blue
                            before:border-b-[16px] before:border-b-transparent`
                        }
                        arrowAfterTw={`after:content-[''] after:absolute
                            after:left-[20%] after:bottom-[-20px]
                            after:border-l-[10px] after:border-l-white
                            after:border-r-[10px] after:border-r-transparent
                            after:border-t-[10px] after:border-t-white
                            after:border-b-[10px] after:border-b-transparent`
                        }
                        numStep={numStep}
                        totalSteps={totalSteps}
                    />
            }
        </div>
    );
}