'use client'

// Node Modules
import { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@phosphor-icons/react'

// Components
import ContentDiv from '@/app/__components/contentDiv'
import Explanation from './Explanation'
import PrblmBtn from '@/app/__components/PracticePrblmBtn'
import TutorialComponent from '../tutorial/tutorial'

// Styling
import { bottomBtnsTw, divMarginsTw } from '@/app/_styling/tw_variables'

// Variables
import tutorialStepsArr, { btnArr } from '../tutorial/tutorialArrays'

export function SolutionPage(props) {
    // Variables:
    const {
        handleConfirm,
        handleConfirmClose,
        handleNext,
        setAnswer,
        numStep,
        c_answer,
        problem,
        setNumStep,
        setSolutionDiv,
        tutorialDisable,
        setTutorialDisable,
        setSubmitDisable,
        tutorialEndDiv,
        setTutorialEndDiv,
        setStopTimer,
        u_answer,
    } = props

    let solution_btns_arr = []
    let solution_border_color
    let solution_title

    // States:
    const [showAnswer, setShowAnswer] = useState(false)
    const [showTip, setShowTip] = useState(false)

    if (c_answer === u_answer) {
        solution_btns_arr = ['Next Problem']
        solution_border_color = 'border-green'
        solution_title = 'Correct'
    } else {
        solution_btns_arr = ['Try Again', 'Next Problem']
        solution_border_color = 'border-red'
        solution_title = `Sorry, that's not correct`
    }

    const solution_header = (
        <h3
            className={`w-fit text-[35px] font-bold mb-[10px] border-b-4 ${solution_border_color}`}
            key={`h3-title`}
        >
            {solution_title}
        </h3>
    )

    const showEyeText = (
        <p className="w-fit text-nowrap" key={`tool-tip-p`}>
            {`${showAnswer ? 'Hide' : 'Show'} Explanation`}
        </p>
    )

    const handleTryAgain = () => {
        setSolutionDiv(false)
        setStopTimer(false)
    }

    return (
        <div className="w-full flex justify-center">
            <div
                className={`w-[65%] min-h-[calc(100dvh-610px)] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw}`}
            >
                <ContentDiv
                    div_tw={`w-[520px] border-[6px] ${solution_border_color} rounded-3xl flex justify-center bg-dark-blue py-[5px] h-[80px]`}
                    order={[solution_header]}
                />

                <h4
                    className={`w-full text-center text-[26px] font-bold mt-[20px]`}
                >
                    Answer Explanation
                </h4>
                <p className={`w-full text-center text-[18px] mb-[20px]`}>
                    (This is only{' '}
                    <strong>
                        <i>one</i>
                    </strong>{' '}
                    way to solve the problem)
                </p>

                {/* Solution Div */}
                <div
                    className={`w-[90%] border-6 border-dark-blue h-auto bg-dark-blue/30`}
                >
                    {/* Eye Icon + Tool Tip */}
                    <div
                        className={`text-dark-blue w-full flex justify-end pr-[15px] pt-[5px] relative`}
                    >
                        {showTip ? (
                            <div className="w-fit flex flex-wrap justify-center">
                                <ContentDiv
                                    div_tw={`border-2 rounded-xl border-white absolute top-[-60px] bg-dark-blue text-white w-fit`}
                                    order={[showEyeText]}
                                />
                            </div>
                        ) : null}
                        <button
                            className="cursor-pointer"
                            onClick={() => setShowAnswer(!showAnswer)}
                            onMouseEnter={() => setShowTip(true)}
                            onMouseLeave={() => setShowTip(false)}
                        >
                            {/* Add tooltip on hover to have text saying "Show solution" */}
                            {showAnswer ? (
                                <EyeSlashIcon
                                    size={32}
                                    weight="bold"
                                    className="text-dark-blue"
                                />
                            ) : (
                                <EyeIcon
                                    size={32}
                                    weight="bold"
                                    className="text-dark-blue"
                                />
                            )}
                        </button>
                    </div>

                    <div
                        className={`w-full ${!showAnswer && ' blur-sm'} justify-center flex`}
                    >
                        {/* Explanation */}
                        <Explanation key="explanation" problem={problem} />
                    </div>
                </div>

                {/* Buttons */}
                <div className="w-[90%] flex justify-center">
                    {solution_btns_arr.map((btn_txt, idx) => {
                        let click = btn_txt.includes('Try')
                            ? handleTryAgain
                            : handleNext

                        return (
                            <PrblmBtn
                                key={`${idx + 1}-btn`}
                                text={btn_txt}
                                tw={`mx-[30px] mt-[32px] min-w-fit ${bottomBtnsTw} w-[132px] p-3 bg-white`}
                                handleClick={click}
                            />
                        )
                    })}
                </div>

                {!tutorialDisable &&
                    tutorialStepsArr.map((step, step_idx) => {
                        const { text, mainDivTw } = step

                        return (
                            numStep === step_idx && (
                                <TutorialComponent
                                    key={`tutorial-step-${step_idx + 1}`}
                                    arrowBeforeTw={`before:content-[''] before:absolute
                                        before:left-[18.5%] before:bottom-[-40px]
                                        before:border-l-[20px] before:border-l-dark-blue
                                        before:border-r-[20px] before:border-r-transparent
                                        before:border-t-[20px] before:border-t-dark-blue
                                        before:border-b-[20px] before:border-b-transparent`}
                                    arrowAfterTw={`after:content-[''] after:absolute
                                        after:left-[20%] after:bottom-[-28px]
                                        after:border-l-[14px] after:border-l-white
                                        after:border-r-[14px] after:border-r-transparent
                                        after:border-t-[14px] after:border-t-white
                                        after:border-b-[14px] after:border-b-transparent`}
                                    btnArr={btnArr}
                                    btnsDivTw={`w-full flex justify-evenly my-[8px]`}
                                    btnsTw={`${bottomBtnsTw} h-auto w-[110px] border-2 border-dark-blue bg-light-blue my-2`}
                                    bubbleDivTw={`relative left-[23%] top-[-135px] 
                                        min-size-fit bg-white 
                                        border-4 border-dark-blue rounded-[30px] px-3`}
                                    handleConfirm={handleConfirm}
                                    handleConfirmClose={handleConfirmClose}
                                    mainDivTw={`${mainDivTw} pointer-events-auto`}
                                    numStep={step_idx + 1}
                                    setAnswer={setAnswer}
                                    setNumStep={setNumStep}
                                    setSolutionDiv={setSolutionDiv}
                                    setSubmitDisable={setSubmitDisable}
                                    setTutorialDisable={setTutorialDisable}
                                    skipText={'Skip Tutorial'}
                                    skipTw={`text-center text-black  border-b-2 border-light-blue cursor-pointer border-0`}
                                    skipHandleClick={(props) => {
                                        const { evt, setTutorialDisable } =
                                            props
                                        evt.preventDefault()
                                        setTutorialDisable(true)
                                    }}
                                    text={text}
                                    textTw={`w-[80%] justify-self-center text-center text-dark-blue`}
                                    totalSteps={tutorialStepsArr.length}
                                    tutorialEndDiv={tutorialEndDiv}
                                    setTutorialEndDiv={setTutorialEndDiv}
                                    showAnswer={showAnswer}
                                    setShowAnswer={setShowAnswer}
                                />
                            )
                        )
                    })}
            </div>
        </div>
    )
}
