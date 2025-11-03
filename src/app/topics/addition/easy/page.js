'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import PracticeProblems from "../../__components/practice_component/practice";

import { easyProblems } from "../additionPrblms";
import EmptyPracticeProblems from "../../__components/practice_component/EmptyPracticeState";
import { SolutionPage } from "../../__components/practice_component/solution";


export default function PracticeAddition() {
    const router = useRouter()

    // States:
    const [answerInput, setAnswer] = useState(null)
    const [blurBg, setBlurBg] = useState(false)
    const [confirmAnswerPopup, setConfirmAnswerPopup] = useState(false)
    const [numStep, setNumStep] = useState(0)
    const [randomIdx, setRandomIdx] = useState(0)
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
                        />
                    :
                        <EmptyPracticeProblems />
            }
            
        </div>
    );
}