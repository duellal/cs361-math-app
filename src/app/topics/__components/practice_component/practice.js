'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";
import { useRouter } from "next/navigation";
import { SimpleProblem } from "./problem";
import { useState } from "react";
import ContentDiv from "@/app/__components/contentDiv";
import { XIcon } from "@phosphor-icons/react";

const divMargins = `px-[50px] py-[20px]`
const mainBtnTw = `rounded-lg h-[45px]`
const bottomBtns = `${mainBtnTw} w-[132px] w-min-fit text-center p-3 cursor-pointer`


export default function PracticeProblemsDiv() {
    const router = useRouter()

    // States:
    const [blurBg, setBlurBg] = useState(false)
    const [hintPopup, setHintPopup] = useState(false)
    const [tutorialPopup, setTutorialPopup] = useState(false)

    let answer = 33
    let hint = {
        33: `What is 20 + 10, and 0 + 3? Then, add those two sums together.`
    }

    const handleHint = () => {
        setBlurBg(true)
        setHintPopup(true)
    }

    const handleHintClose = (evt) => {
        setHintPopup(false)
        setBlurBg(false)
    }

    const handleTutorialBtn = () => {
        setBlurBg(true)
        setTutorialPopup(true) 
    }

    const handleTutorialClose = (evt) => {
        setTutorialPopup(false)
        setBlurBg(false)
    }

    const handleSubmit = () => {
        console.log('Submit btn')
    }

    const handleSkip = () => {
        console.log('Skip btn')
    }


    const hintBtn = <div className="w-full">
                        <button
                            onClick={handleHintClose}
                            className="cursor-pointer absolute top-[20px] right-[30px]"
                        >
                            <XIcon size={22} weight="bold" />
                        </button>
                    </div>
    
    const title = <h2 
                    key={`hint`}
                    className={`text-[24px]/8 font-[500] text-center pb-[10px] text-dark-blue mb-[-10px]`}
                >
                    Hint
                </h2>

    const text = <p
                    key={`hint-text`}
                    className={`text-dark-blue text-center text-[15px] px-[20px] font-[500]`}
                >
                    { hint[answer] }
                </p>

    const tutorialBtn = <button
                            onClick={handleTutorialClose}
                            className="cursor-pointer absolute top-[20px] right-[30px] text-dark-blue"
                        >
                            <XIcon size={22} weight="bold" />
                        </button>

    const tutorialH2 = <h2 
                            key={`tutorial-h2`}
                            className={`text-[24px]/8 font-bold text-center pb-[10px] text-dark-blue mb-[-10px] w-full`}
                        >
                            Tutorial
                        </h2>

    const tutorialVideo = <video
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
            className={`w-[810px] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMargins}`}
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
                        tw={`${bottomBtns} w-auto`}
                    />

                
                    <PrblmBtn
                        text={'?'}
                        handleClick={handleTutorialBtn}
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
                    />
                </div>

                <div className="">
                    <PrblmBtn
                        text={'Submit'}
                        tw={`${bottomBtns} mb-[15px]`}
                        handleClick={handleSubmit}
                    />

                    <PrblmBtn
                        text={'Skip Problem'}
                        tw={`${bottomBtns}`}
                        handleClick={handleSkip}
                    />
                </div>
            </div>

            {
                hintPopup && 
                    <div
                        className={`w-full h-[calc(100vh-145px)] ${blurBg ? `backdrop-blur-xs` : null} absolute top-[100px] place-items-center place-content-center`}
                    >
                        <ContentDiv
                            div_key={`hint-div`}
                            div_tw={`absolute top-[20%] w-[460px] border-[12px] border-light-blue bg-white text-dark-blue h-[200px] flex content-evenly flex-wrap`}
                            order={[hintBtn, title, text]}
                        />
                    </div>
            }

            {
                tutorialPopup &&
                    <div
                        className={`w-full h-[calc(100vh-145px)] ${blurBg ? `backdrop-blur-xs` : null} absolute top-[100px] place-items-center place-content-center`}
                    >
                        <ContentDiv
                            div_key={`tutorial-div`}
                            div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[550px] content-end justify-between`}
                            order={[tutorialH2, tutorialBtn, tutorialVideo]}
                        />
                    </div>
            }
        </div>
    );
}