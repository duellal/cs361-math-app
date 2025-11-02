import { ArrowRightIcon } from "@phosphor-icons/react"

const easyProblems = [
    {
        problem: [20, '+', 13, '=', null],
        answer: 33,
        hint: `What is 20 + 10, and 0 + 3? Then, add those two sums together.`,
        solution: <div className="w-[90%] mb-[20px]">
                        <h5 className="flex justify-self-start mb-[10px] text-[20px] font-bold"> Steps: </h5>

                        <ol className="list-decimal w-[90% justify-center flex flex-wrap mx-[40px]">
                            <li className="pl-[10px] mb-[20px] w-full">
                                <p className="mb-[10px]">Add 20 and 30 together. You can also add 2 + 3 together then add a zero after that number:</p>
                                <div className="w-full text-center">
                                    <p> 20 + 30 = 50 </p>
                                    <p> or </p>
                                    <div className="w-full flex justify-center">
                                        <p > 2 + 3 = 5 </p>
                                        <ArrowRightIcon size={16} weight="bold" className="self-center"/>
                                        <p>50 </p>
                                    </div>
                                </div>
                            </li>
                            
                            <li className="pl-[10px] mb-[20px] w-full">
                                <p className="mb-[10px]"> Then, add 3 and 0 together.</p>
                                <p className="text-center"> 3 + 0 = 3 </p>
                            </li>

                            <li className="pl-[10px] mb-[20px] w-full">
                                <p className="mb-[10px]"> Next, add 50 + 3 together to get the sum:</p>
                                <p className="text-center"> 50 + 3 = 53</p>
                            </li>
                        </ol>
                     </div>
    }
]

const mediumProblems = []

const hardProblems = []

export {
    easyProblems,
    mediumProblems,
    hardProblems
}