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

export default function GenerateAddtionProblems() {
    return (
        <div className="w-full my-[32px] flex flex-wrap content-start justify-center">
            {/* Headers */}
            <div className="w-[900px] leading-20 mb-[50px]">
                <h1 className="w-full">Generate Addition Problems</h1>
            </div>

            {/* Form Div */}
            <div
                className={`w-[65%] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw}`}
            >
                <div className={`w-full flex border justitems-center`}>
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
                </div>

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
