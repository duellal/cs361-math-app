'use client'

// Node Modules
import { useContext, useState } from 'react'
import { XIcon } from '@phosphor-icons/react'

// Components
import CompletedTutorial from '../popups/completedTutorial'
import ConfirmAnswer from '../popups/confirmAnswer'
import ContentDiv from '@/app/__components/contentDiv'
import { EasyHorizAddProblem } from './problem'
import HintText from './hint'
import PrblmBtn from '@/app/__components/PracticePrblmBtn'
import SkipTutorial from '../popups/skipTutorial'
import TimerDisplay from './TimerDisplay'
import TutorialComponent from '../tutorial/tutorial'

// Context:
import UserContext from '@/app/_context/userContext'
import EasyAdditionProblemsContext from '@/app/_context/easyAdditionProblemsContext'
import TutorialContext from '@/app/_context/tutorialContext'

// HTTP Call Functions:
import submit_answer from '@/app/_apiFuncs/user/completed_problems/submitAnswer'

// Styling:
import {
    bottomBtnsTw,
    cancelBtnTw,
    divMarginsTw,
    h3Tw,
} from '@/app/_styling/tw_variables'

// Variables
import tutorialStepsArr, { btnArr } from '../tutorial/tutorialArrays'

export default function PracticeProblemsDiv(props) {
    const {
        answerInput,
        blurBg,
        handleConfirm,
        handleConfirmClose,
        setBlurBg,
        setAnswer,
        confirmAnswerPopup,
        setConfirmAnswerPopup,
        numStep,
        setNumStep,
        randomIdx,
        handleSkipPrblm,
        setSolutionDiv,
        skipBtnDisabled,
        submitDisable,
        setSubmitDisable,
        tutorialEndDiv,
        setTutorialEndDiv,
        seconds,
        setSeconds,
        stopTimer,
        setStopTimer,
        timerText,
        setTimerText,
        startTimer,
        setStartTimer,
        pauseTimer,
        setPauseTimer,
    } = props

    // States:
    const [hintPopup, setHintPopup] = useState(false)
    const [inputErr, setInputErr] = useState(null)
    const [skipTutorialDiv, setSkipTutorial] = useState(false)
    const [videoPopup, setVideoPopup] = useState(false)

    const { user } = useContext(UserContext)
    const { easyAdditionProblems } = useContext(EasyAdditionProblemsContext)
    let { tutorialDisable, setTutorialDisable } = useContext(TutorialContext)

    const problem = easyAdditionProblems[randomIdx]
    // Styling with Variables:
    const popupDivTw = `w-full h-[calc(100vh-145px)] ${blurBg ? `backdrop-blur-xs` : null} absolute top-[100px] place-items-center place-content-center`

    const handleHint = () => {
        setBlurBg(true)
        setHintPopup(true)
    }

    const handleHintClose = (evt) => {
        setHintPopup(false)
        setBlurBg(false)
    }

    const handleTimerBtn = (evt) => {
        evt.preventDefault()

        if (timerText.includes('pause')) {
            setTimerText('start timer')
            setStartTimer(false)
            setPauseTimer(true)
        } else {
            setTimerText('pause timer')
            setStartTimer(true)
            setPauseTimer(false)
        }
    }

    const handleVideoBtn = () => {
        setBlurBg(true)
        setVideoPopup(true)
    }

    const handleVideoClose = (evt) => {
        setVideoPopup(false)
        setBlurBg(false)
    }

    const handleTutorialAgainClick = () => {
        setTutorialEndDiv(false)
        setTutorialDisable(false)
    }

    const handlePracticeClick = () => {
        setTutorialEndDiv(false)
        setTutorialDisable(true)
    }

    const handleSubmitBtn = async () => {
        let answer = Number(answerInput)

        if (Object.keys(user).length > 0) {
            let { problem_id } = problem
            let user_id = user['_id']

            let submitAnswer = await submit_answer({
                answer,
                problem_id,
                user_id,
            })

            if (submitAnswer?.status !== 201) {
                console.log('SUBMIT ANSWER ERROR:\n', submitAnswer.data)
            }
        }

        setBlurBg(false)
        setConfirmAnswerPopup(false)
        setSolutionDiv(true)
        setStopTimer(true)
        setSeconds(0)
    }

    const hintCancelBtn = (
        <div key={`hint-cancel-div`} className="w-full">
            <button onClick={handleHintClose} className={`${cancelBtnTw}`}>
                <XIcon size={22} weight="bold" />
            </button>
        </div>
    )

    const hinth3 = (
        <h3 key={`hint`} className={h3Tw}>
            Hint
        </h3>
    )

    const hintText = <HintText key={`hint-text`} problem={problem} />

    const videoCancelBtn = (
        <button
            key={`tutorial-btn`}
            onClick={handleVideoClose}
            className={`${cancelBtnTw}`}
        >
            <XIcon size={22} weight="bold" />
        </button>
    )

    const videoh3 = (
        <h3 key={`tutorial-h3`} className={`${h3Tw} mb-[-10px]`}>
            Tutorial
        </h3>
    )

    const videoVideo = (
        <video
            key={`tutorial-video`}
            width={500}
            height={300}
            controls
            autoPlay
            className="rounded-[40px] mt-[20px]"
        >
            <source src={null} type="video/mp4" />
        </video>
    )

    return (
        <div className="w-full flex justify-center">
            <div
                className={`w-[65%]  min-h-[calc(100dvh-610px)]  flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw} ${!tutorialDisable ? 'pointer-events-none' : null}`}
            >
                {/* h3, hint button, timer, + tutorial button */}
                <div className={`w-full flex items-center justify-between`}>
                    <div className="w-full min-h-[105px]">
                        <h3
                            className={`max-w-fit border-b-2 border-light-blue text-[35px] font-bold mb-[10px]`}
                        >
                            Directions
                        </h3>
                        {/* Instructions */}
                        <p className="max-w-fit text-[24px] font-medium">
                            Input the best answer below.
                        </p>
                    </div>

                    <div className="min-h-[105px] gap-[12px] flex flex-wrap items-between">
                        <div className={`w-full flex justify-center`}>
                            <PrblmBtn
                                text={timerText}
                                handleClick={handleTimerBtn}
                                tw={`${bottomBtnsTw} w-[132px] p-3 bg-white mx-[10px] capitalize`}
                            />

                            <TimerDisplay
                                pause={pauseTimer}
                                start={startTimer}
                                stop={stopTimer}
                                seconds={seconds}
                                setSeconds={setSeconds}
                            />
                        </div>
                        <div className={`w-full flex justify-center`}>
                            <PrblmBtn
                                text={'Need a Hint?'}
                                handleClick={handleHint}
                                tw={`${bottomBtnsTw} w-[132px] p-3 bg-white w-auto mx-[10px]`}
                            />

                            <PrblmBtn
                                text={'?'}
                                handleClick={handleVideoBtn}
                                tw={`size-[40px] text-medium-blue text-[30px] font-black rounded-full place-content-center cursor-pointer bg-white border-3 border-dark-blue`}
                            />
                        </div>
                    </div>
                </div>

                {/* Problem */}
                <EasyHorizAddProblem
                    key={`${Math.floor(Math.random() * randomIdx)}`}
                    numArr={problem?.operands}
                    setAnswer={setAnswer}
                />

                {/* Answer Input + Submit/Skip Problem Btns */}
                <div className={`w-full mb-[20px] flex justify-between`}>
                    <div className="w-[75%] h-[50%] flex justify-between">
                        <p className={`font-bold text-[30px] mr-[15px]`}>
                            Answer:
                        </p>

                        <div className={`w-full`}>
                            <input
                                type="text"
                                placeholder="Type Answer Here"
                                className="w-full bg-white text-dark-blue font-medium rounded-lg border-3 border-light-blue p-[10px] h-fit focus:border-dark-blue"
                                onChange={(evt) => {
                                    let value = evt.target.value

                                    if (value.length > 0) {
                                        if (!/^[0-9.+\-*/^()]+$/.test(value)) {
                                            setInputErr(true)
                                            setSubmitDisable(true)
                                        } else {
                                            setInputErr(false)
                                            setSubmitDisable(false)
                                        }
                                    } else {
                                        setSubmitDisable(true)
                                        setInputErr(false)
                                    }

                                    setAnswer(value)
                                }}
                                value={answerInput ? answerInput : ''}
                            />

                            {inputErr ? (
                                <p className="text-error-red font-bold mt-[10px] text-center [text-shadow:0px_0px_10px_white]">
                                    Input must be a number
                                </p>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        <PrblmBtn
                            disabled={submitDisable}
                            text={'Submit'}
                            tw={`${bottomBtnsTw} w-[132px] p-3 bg-white mb-[15px] disabled:bg-[#C4C5C8] disabled:cursor-default`}
                            handleClick={handleConfirm}
                        />

                        <PrblmBtn
                            text={'Skip Problem'}
                            tw={`${bottomBtnsTw} w-[132px] p-3 bg-white disabled:bg-[#C4C5C8] disabled:cursor-default`}
                            handleClick={handleSkipPrblm}
                            disabled={skipBtnDisabled}
                        />
                    </div>
                </div>

                {hintPopup && (
                    <div className={`${popupDivTw}`}>
                        <ContentDiv
                            div_key={`hint-div`}
                            div_tw={`absolute top-[20%] w-[460px] border-[12px] border-light-blue bg-white text-dark-blue flex content-evenly flex-wrap rounded-[60px]`}
                            order={[hintCancelBtn, hinth3, hintText]}
                        />
                    </div>
                )}

                {videoPopup && (
                    <div className={`${popupDivTw}`}>
                        <ContentDiv
                            div_key={`tutorial-div`}
                            div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[550px] content-end justify-between rounded-[60px]`}
                            order={[videoh3, videoCancelBtn, videoVideo]}
                        />
                    </div>
                )}

                {confirmAnswerPopup && (
                    <ConfirmAnswer
                        answerInput={answerInput}
                        handleConfirmClose={handleConfirmClose}
                        handleSubmitBtn={handleSubmitBtn}
                        popupDivTw={popupDivTw}
                    />
                )}

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
                                    setBlurBg={setBlurBg}
                                    setNumStep={setNumStep}
                                    setSolutionDiv={setSolutionDiv}
                                    setSubmitDisable={setSubmitDisable}
                                    setTutorialDisable={setTutorialDisable}
                                    skipText={'Skip Tutorial'}
                                    skipTw={`text-center text-black  border-b-2 border-light-blue cursor-pointer border-0`}
                                    skipHandleClick={() => {
                                        setSkipTutorial(true)
                                        setBlurBg(true)
                                        setTutorialDisable(true)
                                    }}
                                    text={text}
                                    textTw={`w-[80%] justify-self-center text-center text-dark-blue`}
                                    totalSteps={tutorialStepsArr.length}
                                    tutorialEndDiv={tutorialEndDiv}
                                    setTutorialEndDiv={setTutorialEndDiv}
                                />
                            )
                        )
                    })}

                {tutorialDisable && tutorialEndDiv && (
                    <CompletedTutorial
                        popupDivTw={popupDivTw}
                        handleTutorialAgainClick={handleTutorialAgainClick}
                        handlePracticeClick={handlePracticeClick}
                    />
                )}

                {skipTutorialDiv && (
                    <SkipTutorial
                        popupDivTw={popupDivTw}
                        setAnswer={setAnswer}
                        setSubmitDisable={setSubmitDisable}
                        setSkipTutorial={setSkipTutorial}
                        setTutorialDisable={setTutorialDisable}
                    />
                )}
            </div>
        </div>
    )
}
