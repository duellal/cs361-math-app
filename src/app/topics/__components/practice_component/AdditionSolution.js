import { ArrowRightIcon, EqualsIcon } from '@phosphor-icons/react'

export default function AdditionSolution({ operands, solution }) {
    const decomposed_operands = operands.map((num) => decomposeNum(num))
    const flat_decomposed = decomposed_operands.flat()
    console.log('Decomposed?', decomposed_operands.flat())
    const total = decomposed_operands.flat().reduce((a, b) => a + b, 0)
    console.log('Total:', total)

    const place_values = {
        1: 'ones',
        2: 'tens',
        3: 'hundreds',
        4: 'thousands',
        5: 'ten thousands',
        6: 'hundred thousands',
    }

    const digit_place_value = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
    }

    flat_decomposed.forEach((num) => {
        let num_len = parseInt(String(num).length)
        digit_place_value[num_len] = [...digit_place_value[num_len], num]
    })

    return (
        <ol className="list-decimal w-[90%] justify-center flex flex-wrap mx-[40px]">
            {/* Decompose Number */}
            <li className="pl-[10px] mb-[20px] w-full">
                <p className="mb-[10px]">
                    Break each number into place values:
                </p>

                <div
                    className={`flex flex-wrap border-3 border-dashed border-black w-[80%] m`}
                >
                    {Object.values(place_values).map((place, idx) => {
                        if (digit_place_value[idx + 1].length > 0) {
                            return (
                                <>
                                    <div
                                        className="flex w-full my-1"
                                        key={`${0}-place-value`}
                                    >
                                        <p
                                            className="flex justify-end capitalize w-[50%] text-center"
                                            key={`${0}-place-name`}
                                        >
                                            {place}:
                                        </p>
                                        <p
                                            className="flex pl-[10px] w-[50%] text-center"
                                            key={`${0}-place-num`}
                                        >
                                            {digit_place_value[idx + 1].length >
                                            0
                                                ? digit_place_value[
                                                      idx + 1
                                                  ].join(', ')
                                                : 0}
                                        </p>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </li>

            {/* Add All Place Values */}
            <li className="pl-[10px] mb-[20px] w-full">
                <p className="mb-[10px]">Add all place-value parts together:</p>

                {(() => {
                    const pairs = []

                    // Build pairwise decompositions (14 → [10,4], 18 → [10,8])
                    for (let i = 0; i < operands.length - 1; i++) {
                        const left = operands[i]
                        const right = operands[i + 1]

                        const leftParts = decomposeNum(left)
                        const rightParts = decomposeNum(right)

                        // Match based on largest-to-smallest place, filling missing places with 0
                        const maxLen = Math.max(
                            leftParts.length,
                            rightParts.length,
                        )
                        const normalizedLeft = Array(maxLen)
                            .fill(0)
                            .map(
                                (_, i) =>
                                    leftParts[leftParts.length - maxLen + i] ||
                                    0,
                            )
                        const normalizedRight = Array(maxLen)
                            .fill(0)
                            .map(
                                (_, i) =>
                                    rightParts[
                                        rightParts.length - maxLen + i
                                    ] || 0,
                            )

                        pairs.push({
                            left,
                            right,
                            leftParts: normalizedLeft,
                            rightParts: normalizedRight,
                        })
                    }

                    return pairs.map((pair, idx) => {
                        const placeValueAdds = pair.leftParts.map((lp, i) => ({
                            a: lp,
                            b: pair.rightParts[i],
                            sum: lp + pair.rightParts[i],
                        }))

                        const digitAdds = digitPartners(pair.left, pair.right)

                        return (
                            <div
                                key={idx}
                                className="w-full text-center mb-[15px]"
                            >
                                {/* Main place-value addition */}
                                <p>
                                    {pair.left} + {pair.right} ={' '}
                                    {placeValueAdds
                                        .map((pv) => pv.sum)
                                        .reduce((a, b) => a + b, 0)}
                                </p>

                                {/* Sub line: Place-value breakdown */}
                                <p className="text-gray-600 text-sm">
                                    (
                                    {placeValueAdds
                                        .map(
                                            (p) => `${p.a} + ${p.b} = ${p.sum}`,
                                        )
                                        .join(', ')}
                                    )
                                </p>

                                {/* OR section */}
                                <p className="mt-[10px]">or</p>

                                {/* Digit-wise breakdown visual */}
                                <div className="w-full flex flex-col items-center">
                                    {digitAdds.map((d, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-center items-center mb-[5px]"
                                        >
                                            <p>
                                                {d.a} + {d.b} = {d.sum}
                                            </p>
                                            <span className="mx-[5px]">→</span>
                                            <p>{d.sum * d.place}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                })()}
            </li>

            {/* <li className="pl-[10px] mb-[20px] w-full">
                <p className='mb-[10px]'>
                    Add all place-value parts together:
                </p>
            </li> */}
        </ol>
    )

    // console.log('Problem:', problem)
    // const arr_len = problem.operands.length
    // const first_phrase = 'What is '
    // const second_phrase = '.'
    // // Can become depending on operands: [[], []]
    // const nums_arr = []
    // const nums_obj = {}
    // let sum = 0

    // // Splitting each number into 2 parts
    // problem.operands.map((num, idx) => {
    //     let num_arr = num.toString().split('')
    //     let num_len = num_arr.length

    //     if (idx === 0) {
    //         nums_arr[0] = [parseInt(num_arr[0]) * 10 ** (num_len - 1)]

    //         if (num_len === 2) {
    //             nums_arr[1] = [parseInt(num_arr[1])]
    //         }

    //         num_arr.forEach((num, n_idx) => {

    //         })
    //     }
    //     if (idx === arr_len - 1) {
    //         nums_arr[0].push(parseInt(num_arr[0]) * 10 ** (num_len - 1))
    //         if (num_len === 2) {
    //             nums_arr[1] = [...nums_arr[1], parseInt(num_arr[1])]
    //         }
    //     }
    // })

    // return (
    //     // <p
    //     //     className={`text-dark-blue text-center text-[18px] px-[20px] font-[500]`}
    //     // >
    //     // {nums_arr.length > 1 ? (
    //     //     <>
    //     //         {first_phrase}
    //     //         {nums_arr.map((array, arr_idx) => {
    //     //             if (array.length > 1) {
    //     //                 return array.map((num, n_idx) => {
    //     //                     if (n_idx === 0) {
    //     //                         return num + ' + '
    //     //                     } else if (n_idx === array.length - 1) {
    //     //                         if (arr_idx === array.length - 1) {
    //     //                             return num + second_phrase
    //     //                         } else if (nums_arr.length === 1) {
    //     //                             return num
    //     //                         } else if (nums_arr[1].length === 1) {
    //     //                             return num + '?'
    //     //                         }

    //     //                         return num + ', and '
    //     //                     }
    //     //                 })
    //     //             } else {
    //     //                 return ' Then add ' + array[0] + ' more.'
    //     //             }
    //     //         })}
    //     //     </>
    //     // ) : (
    //     //     nums_arr[0].map((num, n_idx) => {
    //     //         if (n_idx === 0) {
    //     //             return 'Out loud, count up from ' + num + ' by '
    //     //         } else {
    //     //             return num + '. What is the last number you heard?'
    //     //         }
    //     //     })
    //     // )}
    //     // </p>

    //     <div className="w-[90%] mb-[20px]">
    //         <h5 className="flex justify-self-start mb-[10px] text-[20px] font-bold">
    //             {' '}
    //             Steps:{' '}
    //         </h5>

    //         <ol className="list-decimal w-[90%] justify-center flex flex-wrap mx-[40px]">
    //             {
    //                 nums_arr.length > 1 ? (
    //                     <>
    //                         {
    //                             nums_arr.map((array, arr_idx) => {
    //                                 if (array.length > 1) {
    //                                     return (
    //                                         <>
    //                                             <li className="pl-[10px] mb-[20px] w-full">
    //                                                 <p className='mb-[10px]'>
    //                                                     {
    //                                                         array.map((num, n_idx) => {
    //                                                             if (n_idx === 0) {
    //                                                                 if (arr_idx > 0) {
    //                                                                     return 'Then add ' + num + ' and '
    //                                                                 }
    //                                                                 return 'Add ' + num + ' and '
    //                                                             } else if (n_idx === array.length - 1) {
    //                                                                 if (arr_idx === array.length - 1) {
    //                                                                     return num + second_phrase + ' '
    //                                                                 } else if (nums_arr.length === 1) {
    //                                                                     return num
    //                                                                 }
    //                                                                 //  else if (nums_arr[1].length === 1) {
    //                                                                 //     return num + '.'
    //                                                                 // }

    //                                                                 return num + ' together:'
    //                                                             }
    //                                                         })
    //                                                     }
    //                                                 </p>

    //                                                 <div className="mb-[20px] w-full text-center">
    //                                                     <p>
    //                                                         {
    //                                                             array.map((num, n_idx) => {
    //                                                                 console.log('num:', num)
    //                                                                 if (n_idx !== array.length - 1) {
    //                                                                     sum = sum + num
    //                                                                     console.log(`${n_idx + 1} sum:`, sum)
    //                                                                     return num + ' + '
    //                                                                 }
    //                                                                 else {
    //                                                                     sum = sum + num
    //                                                                     console.log(`${n_idx + 1} sum:`, sum)
    //                                                                     return num + ' = ' + sum
    //                                                                 }
    //                                                             })
    //                                                         }
    //                                                     </p>
    //                                                     <p> or </p>
    //                                                     <div className="w-full flex justify-center">
    //                                                         <p> 2 + 1 = 3 </p>
    //                                                         <ArrowRightIcon
    //                                                             size={16}
    //                                                             weight="bold"
    //                                                             className="self-center mx-[5px]"
    //                                                         />
    //                                                         <p> 30 </p>
    //                                                     </div>
    //                                                 </div>
    //                                                 <ol
    //                                                     className='w-[90%] justify-center flex flex-wrap mx-[40px]'
    //                                                 >
    //                                                     <li className='pl-[10px] mb-[20px] w-full' type='a'>
    //                                                         <p>
    //                                                             Write the number down.
    //                                                         </p>
    //                                                     </li>
    //                                                 </ol>
    //                                             </li>
    //                                         </>
    //                                     )
    //                                 }
    //                                 else {
    //                                     return ' Then add ' + array[0] + ' more.'
    //                                 }
    //                             })
    //                         }
    //                     </>
    //                 )
    //                     :
    //                     (
    //                         nums_arr[0].map((num, n_idx) => {
    //                             if (n_idx === 0) {
    //                                 return 'Out loud, count up from ' + num + ' by '
    //                             } else {
    //                                 return num + '. What is the last number you heard?'
    //                             }
    //                         })
    //                     )
    //             }

    //             <ol className='border-2 border-black'>
    //                 <li className="pl-[10px] mb-[20px] w-full">
    //                     <p className="mb-[10px]">
    //                         Add 20 and 30 together. You can also add 2 + 3
    //                         together then add a zero after that number:
    //                     </p>
    //                     <div className="w-full text-center">
    //                         <p> 20 + 10 = 30 </p>
    //                         <p> or </p>
    //                         <div className="w-full flex justify-center">
    //                             <p> 2 + 1 = 3 </p>
    //                             <ArrowRightIcon
    //                                 size={16}
    //                                 weight="bold"
    //                                 className="self-center mx-[5px]"
    //                             />
    //                             <p> 30 </p>
    //                         </div>
    //                     </div>
    //                 </li>

    //                 <li className="pl-[10px] mb-[20px] w-full">
    //                     <p className="mb-[10px]">
    //                         {' '}
    //                         Then, add 3 and 0 together.
    //                     </p>
    //                     <p className="text-center"> 3 + 0 = 3 </p>
    //                 </li>

    //                 <li className="pl-[10px] mb-[20px] w-full">
    //                     <p className="mb-[10px]">
    //                         {' '}
    //                         Next, add 30 + 3 together to get the sum:
    //                     </p>
    //                     <p className="text-center"> 30 + 3 = 33 </p>
    //                 </li>
    //             </ol>
    //         </ol>
    //     </div>
    // )
}

function decomposeNum(n) {
    const digits = String(n).split('').map(Number)
    const len = digits.length

    return digits
        .map((digit, idx) => {
            // 2 → hundreds, 1 → tens, 0 → ones
            const place = len - idx - 1
            return digit * Math.pow(10, place)
            // remove zero place values
        })
        .filter((v) => v !== 0)
}

function digitPartners(a, b) {
    const aDigits = String(a)
        .padStart(String(Math.max(a, b)).length, '0')
        .split('')
        .map(Number)
    const bDigits = String(b)
        .padStart(String(Math.max(a, b)).length, '0')
        .split('')
        .map(Number)

    return aDigits.map((d, i) => ({
        a: d,
        b: bDigits[i],
        sum: d + bDigits[i],
        place: Math.pow(10, aDigits.length - i - 1),
    }))
}

// {
//     nums_arr.map((array, arr_idx) => {
//         if (array.length > 1) {
//             return (
//                 <>
//                     <li className="pl-[10px] mb-[20px] w-full">
//                         <p className='mb-[10px]'>
//                             {
//                                 array.map((num, n_idx) => {
//                                     if (n_idx === 0) {
//                                         if (arr_idx > 0) {
//                                             return 'Then add ' + num + ' and '
//                                         }
//                                         return 'Add ' + num + ' and '
//                                     } else if (n_idx === array.length - 1) {
//                                         if (arr_idx === array.length - 1) {
//                                             return num + second_phrase + ' '
//                                         } else if (nums_arr.length === 1) {
//                                             return num
//                                         }
//                                         //  else if (nums_arr[1].length === 1) {
//                                         //     return num + '.'
//                                         // }

//                                         return num + ' together.'
//                                     }
//                                 }
//                                 )
//                             }
//                         </p>
//                         <ol
//                             className='w-[90%] justify-center flex flex-wrap mx-[40px]'
//                         >
//                             <li className='pl-[10px] mb-[20px] w-full' type='a'>
//                                 <p>
//                                     dfafda
//                                 </p>
//                             </li>
//                             <li className='pl-[10px] mb-[20px] w-full' type='a'>
//                                 <p>
//                                     dfafda
//                                 </p>
//                             </li>
//                         </ol>
//                     </li>
//                 </>
//             )
//         } else {
//             return ' Then add ' + array[0] + ' more.'
//         }
//     })
// }
