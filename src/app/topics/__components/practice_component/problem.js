'use client'

import addCommas from '../../_helper_funcs/numString'

export function EasyHorizAddProblem(props) {
    let { numArr } = props
    numArr = addCommas(numArr)

    return (
        <div className="w-full flex flex-wrap text-center text-[50px] text-black flex place-items-center justify-center my-[40px]">
            {numArr?.map((num, idx) => {
                if (num) {
                    if (idx > 0 && idx !== numArr.length - 1) {
                        return (
                            <div key={`${idx}-${num}`} className="mx-[10px]">
                                {`+ ${num}`}
                            </div>
                        )
                    } else if (idx === numArr.length - 1) {
                        return (
                            <>
                                <div
                                    key={`${idx}-${num}`}
                                    className="mx-[10px]"
                                >
                                    {`+ ${num} = `}
                                </div>
                                <div
                                    key={`${idx}-blank`}
                                    className="size-[50px] border-4 border-black mx-[10px]"
                                />
                            </>
                        )
                    }
                    return (
                        <div key={`${idx}-${num}`} className="mx-[10px]">
                            {`${num}`}
                        </div>
                    )
                }
            })}
        </div>
    )
}
