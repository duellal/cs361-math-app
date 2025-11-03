const tutorialStepsArr = [
    {
        mainDivTw: `w-[300px] h-fit relative left-[52%] -top-[75%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `Click the question mark to see a video tutorial!`
    }, 
    {
        mainDivTw: `w-[300px] h-fit relative left-[40%] -top-[80%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `At any time, if you need help solving the problem, click the "Need a Hint?" button.`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[-8%] -top-[10%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `Move your cursor over this box and click to input your answer!`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[46%] -top-[-2%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `If you don't want to answer the question, you have the option to skip the problem here.`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[46%] -top-[22%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `Once you input your answer, click "Submit" to see if you are right! Be careful, you can't submit until you input an answer.`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[10%] -top-[92%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `Once you hit submit, a pop-up will show asking you to confirm your answer.`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[-10%] -top-[32%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `You can submit your answer shown by clicking this button.`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[15%] -top-[32%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `Or you can go back and edit your answer.`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[30%] -top-[78%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `You can even go back by clicking this X!`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[45%] -top-[68%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `Whether you have the correct answer, you can see the explanation for getting the right answer!`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[45%] -top-[68%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `Whether you have the correct answer, you can see the explanation for getting the right answer!`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[-10%] -top-[-3%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `If you would like to give the problem another shot, click "Try Again".`
    },
    {
        mainDivTw: `w-[300px] h-fit relative left-[18%] -top-[-6%] text-dark-blue text-[14px] font-medium -my-[24%]`,
        text: `If you want to go to the next problem, click this button!`
    },
]

export const btnArr = [
    {
        text: 'Back',
        handleClick: function (props) {
            const { evt, handleConfirm, handleConfirmClose, numStep, setAnswer, setSubmitDisable, setNumStep, setSolutionDiv, setShowAnswer } = props
            
            console.log('NumStep:', numStep)

            evt.preventDefault()
            setNumStep(numStep - 2)
            if(numStep - 1 === 4){
                setSubmitDisable(true)
                setAnswer(null)
            }
            else if (numStep - 1 === 5) {
                handleConfirmClose()
            }
            else if (numStep - 1 === 9) {
                setSolutionDiv(false)
                handleConfirm()
            }
            else if (numStep === 11) {
                setShowAnswer(false)
            }
        }
    },
    {
        text: 'Next',
        handleClick: function (props) {
            const { evt, handleConfirm, handleConfirmClose, numStep, setAnswer, setSubmitDisable, setNumStep, setSolutionDiv, setTutorialDisable, setTutorialEndDiv, setShowAnswer } = props
            evt.preventDefault()
            setNumStep(numStep)

            console.log('Next numstep:', numStep)

            if (numStep === 4) {
                setSubmitDisable(false)
                setAnswer(30)
            }
            else if(numStep === 5){
                handleConfirm()
            }
            else if(numStep === 9){
                handleConfirmClose()
                setSolutionDiv(true)
            }
            else if(numStep === 10){
                setShowAnswer(true)
            }
            else if(numStep === 13){
                setTutorialEndDiv(true)
                setSolutionDiv(false)
                setAnswer('')
                setSubmitDisable(true)
                setTutorialDisable(true)
            }
        }
    }
]

export default tutorialStepsArr