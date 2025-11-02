'use client'

import ContentDiv from "@/app/__components/contentDiv"
import PrblmBtn from "@/app/__components/PracticePrblmBtn"
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react"
import { useState } from "react"


// Styling:
// Buttons
const mainBtnTw = `rounded-lg h-[45px]`
const bottomBtnsTw = `${mainBtnTw} w-[132px] w-min-fit text-center p-3 cursor-pointer`
// Divs
const divMarginsTw = `px-[50px] py-[20px]`

export function SolutionPage(props) {
    // Variables:
    const { prblmArr, randomIdx, setRandomIdx, setSolutionDiv, solvedArr, u_answer } = props

    let c_answer = prblmArr[randomIdx]?.answer
    let solution_btns_arr = []
    let solution_color
    let solution_title

    // States:
    const [showAnswer, setShowAnswer] = useState(false)
    const [showTip, setShowTip] = useState(false)

    if(c_answer === u_answer){
        solution_btns_arr = ['Next Problem']
        solution_color = 'green'
        solution_title = 'Correct'
    }
    else{
        solution_btns_arr = ['Try Again', 'Next Problem']
        solution_color = 'red'
        solution_title = `Sorry, that's not correct`
    }


    const solution_header = <h3 
                                className={`w-fit text-[35px] font-bold mb-[10px] border-b-4 border-${solution_color}`}
                                key={`h3-title`}
                            >
                                { solution_title }
                            </h3>

    const showEyeText = <p 
                            className="w-fit text-nowrap"
                            key={`tool-tip-p`}
                        >
                            {`${showAnswer ? 'Hide' : 'Show'} Explanation`}
                        </p>

    
    const handleNext = () => {
        let idx = randomIdx + 1

        if (solvedArr.length === prblmArr.length) {
            setRandomIdx(null)
            setSolutionDiv(null)
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

                if(idx >= prblmArr.length) {
                    idx = 0
                }

                if (!solvedArr.includes(idx)) {
                    setRandomIdx(idx)
                }
            }
        }

        setSolutionDiv(null)
    }

    const handleTryAgain = () => {
        setSolutionDiv(false)
    }

    return (
        <div
            className={`w-[810px] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw}`}
        >
            <ContentDiv
                div_tw={`w-[520px] border-[6px] border-${solution_color} rounded-3xl flex justify-center bg-dark-blue py-[5px] h-[80px]`}
                order={[solution_header]}
            />

            <h4 className={`w-full text-center text-[24px] font-bold mt-[20px]`}>
                Answer Explanation
            </h4>
            <p className={`w-full text-center text-[18px] mb-[20px]`}>
                (This is only <strong><i>one</i></strong> way to solve the problem)
            </p>

            {/* Solution Div */}
            <div
                className={`w-[90%] border-6 border-dark-blue h-auto bg-dark-blue/30`}
            >
                {/* Eye Icon + Tool Tip */}
                <div className={`text-dark-blue w-full flex justify-end pr-[15px] pt-[5px] relative`}>
                    {
                        showTip ?
                            <div className="w-fit flex flex-wrap justify-center">
                                <ContentDiv
                                    div_tw={`border-2 rounded-xl border-white absolute top-[-60px] bg-dark-blue text-white w-fit`}
                                    order={[showEyeText]}
                                />
                            </div>
                        : null
                    }
                    <button
                        className="cursor-pointer"
                        onClick={() => setShowAnswer(!showAnswer)}
                        onMouseEnter={() => setShowTip(true)}
                        onMouseLeave={() => setShowTip(false)}
                    >
                    {/* Add tooltip on hover to have text saying "Show solution" */}
                        {
                            showAnswer ? 
                                <EyeSlashIcon size={32} weight="bold" className="text-dark-blue"/>
                            :
                                <EyeIcon size={32} weight="bold" className="text-dark-blue" />

                        }                        
                    </button>
                </div>

                {/* Explanation */}
                <div className={`w-full ${!showAnswer && ' blur-sm'} justify-center flex`}>
                    {prblmArr[randomIdx]?.solution}
                </div>
            </div>

            {/* Buttons */}
            <div
                className="w-[90%] flex justify-center" 
            >
                {
                    solution_btns_arr.map((btn_txt, idx) => {
                        let click = btn_txt.includes('Try') ? handleTryAgain : handleNext

                        return (
                            <PrblmBtn
                                key={`${idx + 1}-btn`}
                                text={btn_txt}
                                tw={`mx-[30px] mt-[32px] min-w-fit ${bottomBtnsTw}`}
                                handleClick={click}
                            />)
                    })
                }
            </div>
        </div>
    )
}