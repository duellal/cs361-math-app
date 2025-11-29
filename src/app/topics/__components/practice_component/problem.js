'use client'

import addCommas from '../../_helper_funcs/numString'

export function EasyHorizAddProblem(props) {
    let { numArr } = props
    numArr = addCommas(numArr)

    return (
        <div
            className="w-full flex flex-wrap text-center text-[50px] text-black place-items-center justify-center my-[40px]"
            key={`${Math.floor(Math.random() * numArr.length)}`}
        >
            {numArr?.map((num, idx) => {
                if (num) {
                    if (idx > 0 && idx !== numArr.length - 1) {
                        return (
                            <div
                                key={`${Math.floor(Math.random() * idx)}-${num}`}
                                className="mx-[10px]"
                            >
                                {`+ ${num}`}
                            </div>
                        )
                    } else if (idx === numArr.length - 1) {
                        return (
                            <div
                                key={`${Math.floor(Math.random() * idx)}-${num}`}
                                className="flex place-items-center justify-center"
                            >
                                <div className="mx-[10px]">{`+ ${num} = `}</div>
                                <div
                                    key={`${Math.floor(Math.random() * idx)}-blank`}
                                    className="size-[50px] border-4 border-black mx-[10px]"
                                />
                            </div>
                        )
                    }
                    return (
                        <div
                            key={`${Math.floor(Math.random() * idx)}-${num}`}
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
