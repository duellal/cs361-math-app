'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";
import { useRouter } from "next/navigation";
import { SimpleProblem } from "./problem";
import { useState } from "react";
import ContentDiv from "@/app/__components/contentDiv";

const divMargins = `px-[50px] py-[20px]`
const mainBtnTw = `rounded-lg h-[45px]`
const bottomBtns = `${mainBtnTw} w-[132px] w-min-fit text-center p-3 cursor-pointer`


export default function PracticeProblemsDiv() {
    const router = useRouter()
    const [hintPopup, setHintPopup] = useState(false)
    const [blurBg, setBlurBg] = useState(false)

    let answer = 33
    let hint = {
        33: `What is 20 + 10, and 0 + 3? Then, add those two sums together.`
    }


    const hintBtn = <button>

    </button>
    
    const title = <h2 
                    key={`hint`}
                    className={`text-[24px]/8 font-[500] text-center pb-[10px] text-dark-blue`}
                >
                    Hint
                </h2>

    const text = <p
        key={`hint-text`}
        className={`text-dark-blue text-center text-[15px] px-[20px] font-[500]`}
    >
        { hint[answer] }
    </p>


    const handleHint = (evt) => {
        evt.preventDefault()
        setHintPopup(true)
        setBlurBg(true)
    }

    const handleTutorialBtn = () => {
        console.log('Tutorial btn')
    }

    const handleSubmit = () => {
        console.log('Submit btn')
    }

    const handleSkip = () => {
        console.log('Skip btn')
    }


    return (
        <div
            className={`w-[810px] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMargins}`}
        >
            {/* h2, hint button + tutorial button */}
            <div className={`w-full flex items-end justify-between`}>
                <h2 className={`w-[250px] border-b-2 border-light-blue text-[35px] font-bold mb-[10px]`}>
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
                    className={`size-full ${blurBg ? `backdrop-blur-xs` : null} absolute top-[100px] flex place-items-center place-content-center`}
                >
                    <ContentDiv
                        div_key={`hint-div`}
                        div_tw={`w-[460px] border-[12px] border-light-blue bg-white text-dark-blue h-[200px]`}
                        order={[hintBtn, title, text]}
                    />
                </div>
            }
        </div>
    );
}