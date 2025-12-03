'use client'

import { useContext } from 'react'

import ContentDiv from '@/app/__components/contentDiv'
import PrblmBtn from '@/app/__components/PracticePrblmBtn'

import TutorialContext from '@/app/_context/tutorialContext'

import { confirmAnswerBtnTw, h3Tw } from '@/app/_styling/tw_variables'

export default function SkipTutorial(props) {
    const { popupDivTw, setAnswer, setSubmitDisable, setSkipTutorial } = props

    let { setTutorialDisable } = useContext(TutorialContext)

    let skipTutorialBtns = (
        <div
            className="w-[95%] text-dark-blue flex justify-between"
            key={`completed-tutorial-btn-div`}
        >
            <PrblmBtn
                text={'Yes, Skip Tutorial'}
                handleClick={() => {
                    setSkipTutorial(false)
                    setTutorialDisable(true)
                    setAnswer('')
                    setSubmitDisable(true)
                }}
                tw={`${confirmAnswerBtnTw}`}
                cssClass={'prblm-btns'}
            />

            <PrblmBtn
                text={'No, Continue Tutorial'}
                handleClick={() => {
                    setSkipTutorial(false)
                    setTutorialDisable(false)
                }}
                tw={`${confirmAnswerBtnTw}`}
                cssClass={'prblm-btns'}
            />
        </div>
    )

    const skipTutorialH3 = (
        <h3 key={`skipTutorialAnswer-h3`} className={`m-0 ${h3Tw}`}>
            Skip Tutorial
        </h3>
    )

    const skipTutorialP1 = (
        <p
            className="w-full text-dark-blue text-center mt-[30px] mb-[20px]"
            key={`skip-p1`}
        >
            If you missed anything, you can review the instructions anytime on
            the Help page.
        </p>
    )

    const skipTutorialP2 = (
        <p
            className="w-full text-dark-blue text-center mt-[30px] mb-[20px]"
            key={`skip-p2`}
        >
            Are you sure you want to skip it?
        </p>
    )

    return (
        <div className={`${popupDivTw}`}>
            <ContentDiv
                div_key={`tutorial-div`}
                div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-light-blue bg-white w-[460px] rounded-[60px]`}
                order={[
                    skipTutorialH3,
                    skipTutorialP1,
                    skipTutorialP2,
                    skipTutorialBtns,
                ]}
            />
        </div>
    )
}
