'use client'

// Node Modules
import { useState } from "react";
import { useRouter } from "next/navigation";

// Components
import EmptyPracticeProblems from "../../__components/practice_component/EmptyPracticeState";
import PracticeProblems from "../../__components/practice_component/practice";
import { SolutionPage } from "../../__components/practice_component/solution";

// Variables
import { easyProblems } from "../additionPrblms";


export default function PracticeAddition() {
    const router = useRouter()

    // States:
    const [answerInput, setAnswer] = useState(null)
    const [blurBg, setBlurBg] = useState(false)
    const [confirmAnswerPopup, setConfirmAnswerPopup] = useState(false)
    const [numStep, setNumStep] = useState(0)
    const [randomIdx, setRandomIdx] = useState(0)
    const [skipBtnDisabled, setSkipBtnDisabled] = useState(false)
    const [solutionDiv, setSolutionDiv] = useState(null)
    const [solvedArr, setSolvedArr] = useState([])
    const [submitDisable, setSubmitDisable] = useState(true)
    const [tutorialDisable, setTutorialDisable] = useState(false)
    const [tutorialEndDiv, setTutorialEndDiv] = useState(false)

    const handleConfirm = () => {
        let answer = Number(answerInput)

        if (answer) {
            setConfirmAnswerPopup(true)
            setAnswer(answer)
        }

        setBlurBg(true)
    }

    const handleConfirmClose = () => {
        setConfirmAnswerPopup(false)
        setBlurBg(false)
    }

    const handleSkipPrblm = () => {
        let prblmArr = easyProblems
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

        if (solvedArr.length + 1 === prblmArr.length) {
            setSkipBtnDisabled(true)
        }

        setSolutionDiv(null)
        setAnswer('')
        setSubmitDisable(true)
    }

    return (
        <div
            className="w-full mt-[32px] flex flex-wrap content-start justify-center"
        >
            {/* Headers */}
            <div>
                <h1 className="w-full">
                    Practice Problems
                </h1>

                <h2
                    className="w-full text-center font-bold text-[40px] mb-[50px]"
                >
                    Easy Addition
                </h2>
            </div>
            
            {
                solutionDiv ?
                    <SolutionPage
                        prblmArr={easyProblems}
                        randomIdx={randomIdx}
                        setAnswer={setAnswer}
                        setRandomIdx={setRandomIdx}
                        setSolutionDiv={setSolutionDiv}
                        setSolvedArr={setSolvedArr}
                        solvedArr={solvedArr}
                        confirmAnswerPopup={confirmAnswerPopup}
                        setConfirmAnswerPopup={setConfirmAnswerPopup}
                        numStep={numStep}
                        setNumStep={setNumStep}
                        solutionDiv={solutionDiv}
                        u_answer={answerInput}
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
                        handleNext={handleSkipPrblm}
                    />
                :
                    easyProblems?.length !== solvedArr?.length && typeof(randomIdx) === 'number' ?
                        <PracticeProblems
                            answerInput={answerInput}
                            prblmArr={easyProblems}
                            randomIdx={randomIdx}
                            setAnswer={setAnswer}
                            setRandomIdx={setRandomIdx}
                            setSolutionDiv={setSolutionDiv}
                            setSolvedArr={setSolvedArr}
                            solvedArr={solvedArr}
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
                    :
                        <EmptyPracticeProblems />
            }
            
        </div>
    );
}