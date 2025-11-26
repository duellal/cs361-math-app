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
const h3Tw = `text-[50px] font-bold text-center my-[20px] text-dark-blue w-full text-white`
const pTw = `w-full text-white text-center text-[20px] font-bold`

export default function EmptyPracticeProblems() {
    return (
        <div
            className={`w-[810px] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw} h-[400px]`}
        >
            <h3 className={`${h3Tw}`}>More coming soon!</h3>
            <p className={`${pTw}`}>You’ve completed all available problems.</p>
            <p className={`${pTw}`}>
                To try other types of operations, click the button below.
            </p>

            <div className={`w-full my-[20px] flex justify-center`}>
                <Link href="/topics">
                    <PrblmBtn
                        text={'Select a New Topic'}
                        tw={`${bottomBtnsTw} w-fit font-medium`}
                    />
                </Link>
            </div>
        </div>
    )
}
