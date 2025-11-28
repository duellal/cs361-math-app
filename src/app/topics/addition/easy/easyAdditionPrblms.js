import axios from 'axios'

const easy_problems = async (props) => {
    const { limit, offset } = props
    let difficulty = 'easy'
    let operation = 'add'

    try {
        let res = await axios.get('http://localhost:8001/api/add', {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                limit,
                offset,
                difficulty,
                operation,
            },
        })

        return res.data
    } catch {
        console.log('easy_problems ERR:', err)
        throw err
    }
}

// [
//     {
//         problem: [20, '+', 13, '=', null],
//         answer: 33,
//         hint: `What is 20 + 10, and 0 + 3? Then, add those two sums together.`,
//         solution: (
//             <div className="w-[90%] mb-[20px]">
//                 <h5 className="flex justify-self-start mb-[10px] text-[20px] font-bold">
//                     {' '}
//                     Steps:{' '}
//                 </h5>

//                 <ol className="list-decimal w-[90% justify-center flex flex-wrap mx-[40px]">
//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className="mb-[10px]">
//                             Add 20 and 30 together. You can also add 2 + 3
//                             together then add a zero after that number:
//                         </p>
//                         <div className="w-full text-center">
//                             <p> 20 + 10 = 30 </p>
//                             <p> or </p>
//                             <div className="w-full flex justify-center">
//                                 <p> 2 + 1 = 3 </p>
//                                 <ArrowRightIcon
//                                     size={16}
//                                     weight="bold"
//                                     className="self-center mx-[5px]"
//                                 />
//                                 <p> 30 </p>
//                             </div>
//                         </div>
//                     </li>

//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className="mb-[10px]">
//                             {' '}
//                             Then, add 3 and 0 together.
//                         </p>
//                         <p className="text-center"> 3 + 0 = 3 </p>
//                     </li>

//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className="mb-[10px]">
//                             {' '}
//                             Next, add 30 + 3 together to get the sum:
//                         </p>
//                         <p className="text-center"> 30 + 3 = 33 </p>
//                     </li>
//                 </ol>
//             </div>
//         ),
//     },
//     {
//         problem: [4, '+', 8, '=', null],
//         answer: 12,
//         hint: `What is 8 + 2? Now add 2 more.`,
//         solution: (
//             <div className="w-[90%] mb-[20px]">
//                 <h5 className="flex justify-self-start mb-[10px] text-[20px] font-bold">
//                     {' '}
//                     Steps:{' '}
//                 </h5>

//                 <ol className="list-decimal w-[90% justify-center flex flex-wrap mx-[40px]">
//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className="mb-[10px]">Add 8 + 2:</p>
//                         <div className="w-full text-center">
//                             <p> 8 + 2 = 10 </p>
//                         </div>
//                     </li>

//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className="mb-[10px]">
//                             {' '}
//                             Then, add the difference of 2 and 4 which is 2 to
//                             10:
//                         </p>
//                         <p className="text-center"> 10 + 2 = 12 </p>
//                     </li>
//                 </ol>
//             </div>
//         ),
//     },
//     {
//         problem: [6, '+', null, '=', 7],
//         answer: 1,
//         hint: `Count up from 6 on your hand until you reach 7. How many fingers are up?`,
//         solution: (
//             <div className="w-[90%] mb-[20px]">
//                 <h5 className="flex justify-self-start mb-[10px] text-[20px] font-bold">
//                     {' '}
//                     Steps:{' '}
//                 </h5>

//                 <ol className="list-decimal w-[90% justify-center flex flex-wrap mx-[40px]">
//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className="mb-[10px]">
//                             Count up from 6 until you reach 7:
//                         </p>
//                         <div className="w-full text-center">
//                             <div className="w-full flex justify-center">
//                                 <p> 6 </p>
//                                 <ArrowRightIcon
//                                     size={16}
//                                     weight="bold"
//                                     className="self-center mx-[5px]"
//                                 />
//                                 <p> 7 = 1 </p>
//                             </div>
//                         </div>
//                     </li>

//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className="mb-[10px]">
//                             {' '}
//                             Then, add the difference of 2 and 4 which is 2 to
//                             10:
//                         </p>
//                         <p className="text-center"> 10 + 2 = 12 </p>
//                     </li>
//                 </ol>
//             </div>
//         ),
//     },
// ]

export default easy_problems
