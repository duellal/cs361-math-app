const tutorialStepsArr = [
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `Click the question mark to see a video tutorial!`
    }, 
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `At any time, if you need help solving the problem, click the "Need a Hint?" button.`
    },
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `Move your cursor over this box and click to input your answer!`
    },
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `If you don't want to answer the question, you have the option to skip the problem here.`
    },
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `Once you input your answer, click "Submit" to see if you are right! Be careful, you can't submit until you input an answer.`
    },
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `Once you hit submit, a pop-up will show asking you to confirm your answer. You can submit your answer shown, or go back and edit your answer.`
    },
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `Whether you have the correct answer, you can see the explanation to getting the right answer!`
    },
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `If you would like to give the problem another shot, click "Try Again".`
    },
    {
        mainDivTw: `w-[300px] relative left-[52%] -top-[78%] text-dark-blue text-[14px] font-medium`,
        text: `If you want to go to the next problem, click this button!`
    },
]

export const btnArr = [
    {
        text: 'Skip Tutorial',
        handleClick: function (props) { 
            const { evt, setTutorialDisable } = props
            evt.preventDefault()
            setTutorialDisable(true)
        }
    },
    {
        text: 'Next',
        handleClick: function (props) {
            const { evt, setNumStep, numStep } = props
            evt.preventDefault()
            setNumStep(numStep)
         }
    }
]

export default tutorialStepsArr