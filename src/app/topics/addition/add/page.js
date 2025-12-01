'use client'

import PrblmBtn from '@/app/__components/PracticePrblmBtn'
import Link from 'next/link'

// Styling:
// Buttons
const mainBtnTw = `rounded-lg h-[45px]`
const bottomBtnsTw = `${mainBtnTw} w-[132px] w-min-fit text-center p-3 cursor-pointer`

// Divs
const divMarginsTw = `px-[50px] py-[20px]`

// Text
const h3Tw = `text-[50px] font-bold text-center mt-[20px] mb-[40px] text-dark-blue text-white`
const pTw = `w-full self-center text-white text-center text-[20px] font-bold`

export default function AddAdditionProblems({ prblmArr }) {
    if (!prblmArr) {
        return (
            <div className="w-full flex justify-center">
                <div
                    className={`w-[65%] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw}`}
                >
                    <h3 className={h3Tw}>Problems Not Available</h3>

                    {/* <div className="h-fit flex flex-wrap gap-y-8">
                        <p className={pTw}>
                            {`We haven't been able to load your problems yet.`}
                        </p>

                        <p
                            className={`${pTw} align-start self-start mt-[-28px]`}
                        >
                            {`This can happen if the topic is new or the set is still being generated.`}
                        </p>

                        <p className={pTw}>
                            You can try a different topic anytime using the
                            button below.
                        </p>
                    </div>
                    <div className="w-full my-[20px] flex justify-center">
                        <Link href="/topics">
                            <PrblmBtn
                                text="Select a New Topic"
                                tw={`${bottomBtnsTw} border-3 border-dark-blue w-fit font-bold p-3 bg-white`}
                            />
                        </Link>
                    </div> */}
                </div>
            </div>
        )
    }
    return (
        <div className="w-full flex justify-center">
            <div
                className={`w-[65%] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw}`}
            >
                <h3 className={`${h3Tw}`}>More coming soon!</h3>
                <div className={`h-fit flex flex-wrap gap-y-8`}>
                    <p className={`${pTw}`}>
                        {prblmArr.length !== 0
                            ? 'Great job! You’ve completed all available problems.'
                            : `Oh no! We don't have any practice problems.`}
                    </p>

                    <p className={`${pTw}`}>
                        {`Do you want more problems? Click the button below to fill out a form, and we'll generate random problems for you!`}
                    </p>

                    <div
                        className={`w-full my-[10px] flex justify-center mb-[40px]`}
                    >
                        <Link href="/topics">
                            <PrblmBtn
                                text={'Generate More Problems'}
                                tw={`${bottomBtnsTw} border-3 border-dark-blue w-fit font-bold p-3 bg-white`}
                            />
                        </Link>
                    </div>

                    <p className={`${pTw}`}>
                        To try other types of operations, click this button!
                    </p>

                    <div
                        className={`w-full my-[10px] mb-[30px] flex justify-center`}
                    >
                        <Link href="/topics">
                            <PrblmBtn
                                text={'Select a New Topic'}
                                tw={`${bottomBtnsTw} border-3 border-dark-blue w-fit font-bold p-3 bg-white`}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
