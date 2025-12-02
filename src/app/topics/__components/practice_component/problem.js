'use client'

import addCommas from '../../_helper_funcs/numString'

export function EasyHorizAddProblem(props) {
    let { numArr } = props
    numArr = addCommas(numArr)

    if (numArr) {
        return (
            <div
                className="w-full min-h-[200px] flex flex-wrap text-center text-[50px] text-black place-items-center justify-center my-[40px]"
                key={`${Math.floor(Math.random() * numArr.length)}`}
            >
                {numArr?.map((num, idx) => {
                    if (numArr.length === 1) {
                        return (
                            <div
                                key={`${Math.floor(Math.random() * Math.random() * idx)}-${num}-last-num`}
                                className="flex place-items-center justify-center"
                            >
                                <div className="mx-[10px]">{`0 + ${num} = `}</div>
                                <div
                                    key={`${Math.floor(Math.random() * Math.random() * idx)}-blank`}
                                    className="size-[50px] border-4 border-black mx-[10px]"
                                />
                            </div>
                        )
                    }

                    if (num) {
                        if (idx > 0 && idx !== numArr.length - 1) {
                            return (
                                <div
                                    key={`${Math.floor(Math.random() * Math.random() * idx)}-${num}-middle-num`}
                                    className="mx-[10px]"
                                >
                                    {`+ ${num}`}
                                </div>
                            )
                        } else if (idx === numArr.length - 1) {
                            return (
                                <div
                                    key={`${Math.floor(Math.random() * Math.random() * idx)}-${num}-last-num`}
                                    className="flex place-items-center justify-center"
                                >
                                    <div className="mx-[10px]">{`+ ${num} = `}</div>
                                    <div
                                        key={`${Math.floor(Math.random() * Math.random() * idx)}-blank`}
                                        className="size-[50px] border-4 border-black mx-[10px]"
                                    />
                                </div>
                            )
                        }
                        return (
                            <div
                                key={`${Math.floor(Math.random() * idx)}-${num}-first-num`}
                                className="mx-[10px]"
                            >
                                {`${num}`}
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}
