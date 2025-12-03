'use client'

// Node Modules
import { useContext, useEffect, useState } from 'react'

// Components
import EmptyPracticeProblems from '../../__components/practice_component/EmptyPracticeState'
import PracticeProblems from '../../__components/practice_component/practice'
import { SolutionPage } from '../../__components/practice_component/solution'

// Context
import SolvedProblemsContext from '@/app/_context/solvedProblemsContext'
import UserContext from '@/app/_context/userContext'
import TimerContext from '@/app/_context/timerContext'
import EasyAdditionProblemsContext from '@/app/_context/easyAdditionProblemsContext'

// HTTP Calls
import stop_timer from '@/app/_apiFuncs/timer/stopTimer'

export default function PracticeAddition() {
    // Context:
    const { easyAdditionProblems, filterSolvedEasyAddition } = useContext(
        EasyAdditionProblemsContext,
    )
    const { solvedProblems, setSolvedProblems } = useContext(
        SolvedProblemsContext,
    )

    const { timer, setTimer } = useContext(TimerContext)
    const timer_id = timer?.timer_id

    // States:
    const [answerInput, setAnswer] = useState(null)
    const [blurBg, setBlurBg] = useState(false)
    const [confirmAnswerPopup, setConfirmAnswerPopup] = useState(false)
    const [numStep, setNumStep] = useState(0)
    const [randomIdx, setRandomIdx] = useState(0)
    const [skipBtnDisabled, setSkipBtnDisabled] = useState(false)
    const [solutionDiv, setSolutionDiv] = useState(null)
    const [submitDisable, setSubmitDisable] = useState(true)
    const [tutorialDisable, setTutorialDisable] = useState(false)
    const [tutorialEndDiv, setTutorialEndDiv] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [stopTimer, setStopTimer] = useState(false)
    const [timerText, setTimerText] = useState('start timer')
    const [startTimer, setStartTimer] = useState(false)
    const [pauseTimer, setPauseTimer] = useState(false)

    useEffect(() => {
        filterSolvedEasyAddition()

        if (easyAdditionProblems.length === 1) {
            setSkipBtnDisabled(true)
        }
    }, [easyAdditionProblems.length, filterSolvedEasyAddition])

    const handleConfirm = () => {
        let answer = Number(answerInput)

        if (answer) {
            if (Object.keys(timer).length > 0) {
                stop_timer({ timer_id })
                setTimer({})
                setSeconds(0)
            }

            setConfirmAnswerPopup(true)
            setAnswer(answer)
        }

        setBlurBg(true)
    }

    const handleConfirmClose = () => {
        setConfirmAnswerPopup(false)
        setBlurBg(false)
    }

    const handleSkipPrblm = async () => {
        if (Object.keys(timer) > 0) {
            setTimer({})
            setSeconds(0)
            setTimerText('start timer')
            setStartTimer(false)
            setPauseTimer(false)
            setStopTimer(false)
        }

        if (
            answerInput &&
            answerInput === easyAdditionProblems[randomIdx].solution
        ) {
            setSolvedProblems({
                ...solvedProblems,
                addition: [
                    ...solvedProblems.addition,
                    easyAdditionProblems[randomIdx],
                ],
            })
        }

        let idx = randomIdx + 1

        if (idx >= easyAdditionProblems.length) {
            idx = 0
        }

        if (
            !solvedProblems.addition.some(
                (prob) => prob.problem_id === easyAdditionProblems[idx],
            )
        ) {
            setRandomIdx(idx)
        } else {
            while (
                solvedProblems.addition.some(
                    (prob) => prob.problem_id === easyAdditionProblems[idx],
                )
            ) {
                idx += 1

                if (idx >= easyAdditionProblems.length) {
                    idx = 0
                }

                if (
                    !solvedProblems.addition.some(
                        (prob) => prob.problem_id === easyAdditionProblems[idx],
                    )
                ) {
                    setRandomIdx(idx)
                }
            }
        }

        setSolutionDiv(null)
        setAnswer('')
        setSubmitDisable(true)
    }

    return (
        <div className="w-full mt-[32px] flex flex-wrap min-h-[calc(100dvh-246px)] content-start justify-center">
            {/* Headers */}
            <div>
                <h1 className="w-full">Practice Problems</h1>

                <h2 className="w-full text-center font-bold text-[40px] mb-[50px]">
                    Easy Addition
                </h2>
            </div>

            {solutionDiv ? (
                <SolutionPage
                    setAnswer={setAnswer}
                    setSolutionDiv={setSolutionDiv}
                    numStep={numStep}
                    setNumStep={setNumStep}
                    u_answer={answerInput}
                    c_answer={easyAdditionProblems[randomIdx]?.solution}
                    problem={easyAdditionProblems[randomIdx]}
                    handleConfirm={handleConfirm}
                    handleConfirmClose={handleConfirmClose}
                    setSubmitDisable={setSubmitDisable}
                    tutorialDisable={tutorialDisable}
                    setTutorialDisable={setTutorialDisable}
                    tutorialEndDiv={tutorialEndDiv}
                    setTutorialEndDiv={setTutorialEndDiv}
                    handleNext={handleSkipPrblm}
                    setStopTimer={setStopTimer}
                />
            ) : easyAdditionProblems?.length > 0 &&
              typeof randomIdx === 'number' ? (
                <PracticeProblems
                    answerInput={answerInput}
                    randomIdx={randomIdx}
                    setAnswer={setAnswer}
                    setRandomIdx={setRandomIdx}
                    setSolutionDiv={setSolutionDiv}
                    confirmAnswerPopup={confirmAnswerPopup}
                    setConfirmAnswerPopup={setConfirmAnswerPopup}
                    numStep={numStep}
                    setNumStep={setNumStep}
                    solutionDiv={solutionDiv}
                    blurBg={blurBg}
                    setBlurBg={setBlurBg}
                    handleConfirm={handleConfirm}
                    handleConfirmClose={handleConfirmClose}
                    submitDisable={submitDisable}
                    setSubmitDisable={setSubmitDisable}
                    tutorialDisable={tutorialDisable}
                    setTutorialDisable={setTutorialDisable}
                    tutorialEndDiv={tutorialEndDiv}
                    setTutorialEndDiv={setTutorialEndDiv}
                    skipBtnDisabled={skipBtnDisabled}
                    setSkipBtnDisabled={setSkipBtnDisabled}
                    handleSkipPrblm={handleSkipPrblm}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    stopTimer={stopTimer}
                    setStopTimer={setStopTimer}
                    timerText={timerText}
                    setTimerText={setTimerText}
                    startTimer={startTimer}
                    setStartTimer={setStartTimer}
                    pauseTimer={pauseTimer}
                    setPauseTimer={setPauseTimer}
                />
            ) : (
                <EmptyPracticeProblems
                    prblmArr={
                        easyAdditionProblems?.length === 0
                            ? solvedProblems
                            : easyAdditionProblems
                    }
                />
            )}
        </div>
    )
}
