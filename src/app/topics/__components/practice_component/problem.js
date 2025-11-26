'use client'

export function SimpleProblem(props) {
    const { numArr } = props

    return (
        <div className="w-full text-center text-[67px] text-black flex place-items-center justify-center my-[40px]">
            {numArr?.map((elem, idx) => {
                if (elem) {
                    return (
                        <div key={`${idx}-${elem}`} className="mx-[10px]">
                            {elem}
                        </div>
                    )
                } else {
                    return (
                        <div
                            key={`${idx}-blank`}
                            className="size-[74px] border-4 border-black mx-[10px]"
                        />
                    )
                }
            })}
        </div>
    )
}
