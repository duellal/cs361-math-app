'use client'

// Node Modules
import { useContext, useEffect, useState } from 'react'

// Components
import EmptyPracticeProblems from '../../__components/practice_component/EmptyPracticeState'
import PracticeProblems from '../../__components/practice_component/practice'
import { SolutionPage } from '../../__components/practice_component/solution'

// Context
import EasyAdditionProblemsContext from '@/app/_context/easyAdditionProblemsContext'
import SolvedProblemsContext from '@/app/_context/solvedProblemsContext'
import TimerContext from '@/app/_context/timerContext'
import TutorialContext from '@/app/_context/tutorialContext'

// HTTP Calls
import stop_timer from '@/app/_apiFuncs/timer/stopTimer'
import pause_timer from '@/app/_apiFuncs/timer/pauseTimer'
import resume_timer from '@/app/_apiFuncs/timer/resumeTimer'

export default function PracticeAddition() {
    // Context:
    const { easyAdditionProblems, filterSolvedEasyAddition } = useContext(
        EasyAdditionProblemsContext,
    )
    const { tutorialDisable, setTutorialDisable } = useContext(TutorialContext)
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
    const [tutorialEndDiv, setTutorialEndDiv] = useState(false)

    useEffect(() => {
        filterSolvedEasyAddition()

        if (easyAdditionProblems.length === 1) {
            setSkipBtnDisabled(true)
        }
    }, [easyAdditionProblems.length, filterSolvedEasyAddition])

    const handleConfirm = async (evt) => {
        evt.preventDefault()
        let answer = Number(answerInput)

        if (answer) {
            if (timer.timer_id) {
                await pause_timer({ timer_id })
                setTimer({
                    ...timer,
                    pause: true,
                    start: false,
                })
            }

            setConfirmAnswerPopup(true)
            setAnswer(answer)
        }

        setBlurBg(true)
    }

    const handleConfirmClose = async (evt) => {
        evt.preventDefault()
        await resume_timer({ timer_id })
        setTimer({
            ...timer,
            pause: false,
            start: true,
        })
        setConfirmAnswerPopup(false)
        setBlurBg(false)
    }

    const handleSkipPrblm = async (evt) => {
        evt.preventDefault()

        if (timer.timer_id) {
            await stop_timer({ timer_id: timer.timer_id })
            setTimer({ ...timer.reset_timer, reset_timer: timer.reset_timer })
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

        if (idx >= easyAdditionProblems.length - 1) {
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
                !solvedProblems.addition.some(
                    (prob) =>
                        prob.problem_id ===
                        easyAdditionProblems[idx].problem_id,
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
        await filterSolvedEasyAddition()
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
