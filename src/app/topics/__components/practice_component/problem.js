'use client'

export function EasyHorizAddProblem(props) {
    let { numArr } = props

    return (
        <div className="w-full text-center text-[67px] text-black flex place-items-center justify-center my-[40px]">
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
                                    {`${num} = `}
                                </div>
                                <div
                                    key={`${idx}-blank`}
                                    className="size-[74px] border-4 border-black mx-[10px]"
                                />
                            </>
                        )
                    }
                    return (
                        <div key={`${idx}-${num}`} className="mx-[10px]">
                            {`${num} +`}
                        </div>
                    )
                }
            })}
        </div>
    )
}
