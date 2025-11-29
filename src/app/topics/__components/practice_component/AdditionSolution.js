import { ArrowRightIcon } from '@phosphor-icons/react'

export default function AdditionSolution({ operands, solution }) {
    const decomposed_operands = operands.map((num) => decomposeNum(num))
    const flat_decomposed = decomposed_operands.flat()
    const total = decomposed_operands.flat().reduce((a, b) => a + b, 0)
    const pairs = findPairs(operands)

    const place_values = {
        1: 'ones',
        2: 'tens',
        3: 'hundreds',
        4: 'thousands',
        5: 'ten-thousands',
        6: 'hundred-thousands',
    }

    const digit_place_value = groupPlaceValues(operands)

    return (
        <ol className="list-decimal w-[90%] justify-center flex flex-wrap mx-[40px] text-[18px]">
            {/* Decompose Number */}
            <li className="pl-[10px] mb-[20px] w-full">
                <p className="mb-[10px]">
                    Break each number into place values:
                </p>

                <div
                    className={`flex flex-wrap justify-self-center border-3 border-dashed border-black w-[80%] py-[10px]`}
                >
                    <table className="w-full border-collapse">
                        <tbody>
                            {Object.keys(digit_place_value).map((place) => {
                                const nums = digit_place_value[place]
                                const num_list =
                                    nums.length > 1
                                        ? nums.join(', ')
                                        : nums[0] + ', 0'

                                return (
                                    <tr key={place} className="py-2">
                                        <td className="w-fit text-right pr-2 capitalize font-bold">
                                            {place_values[place]}:
                                        </td>

                                        <td className="w-auto text-left pl-[5px] py-[5px]">
                                            {num_list}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </li>

            {/* Add All Place Values */}
            <li className="pl-[10px] mb-[20px] w-full">
                <p className="mb-[10px]">Add all place-value parts together:</p>

                <div
                    className={`flex flex-wrap justify-self-center border-3 border-dashed border-black w-[80%] py-[10px]`}
                >
                    {Object.keys(digit_place_value).map((place, p_idx) => {
                        const nums = digit_place_value[place]
                        const sum = nums.reduce((a, b) => a + b, 0)

                        return (
                            <div
                                key={place}
                                className="w-full text-center my-[5px]"
                            >
                                <p>
                                    {nums.join(' + ')} = {sum}
                                </p>

                                {p_idx !==
                                    Object.keys(digit_place_value).length -
                                        1 && <p className="mt-[10px]">and</p>}
                            </div>
                        )
                    })}
                </div>
            </li>

            {/* Add Sums Together */}
            <li className="pl-[10px] mb-[20px] w-full">
                <p className="mb-[10px]">
                    Combine everything for the final answer:
                </p>

                <div
                    className={`flex flex-wrap justify-center justify-self-center text-center border-3 border-dashed border-black w-[80%] py-[10px]`}
                >
                    {Object.keys(digit_place_value)
                        // Highest to lowest place value
                        .sort((a, b) => b - a)
                        .map((place, p_idx) => {
                            const nums = digit_place_value[place]
                            const sum = nums.reduce((a, b) => a + b, 0)
                            if (
                                p_idx !==
                                Object.keys(digit_place_value).length - 1
                            ) {
                                return (
                                    <p
                                        key={`${place}-${sum}`}
                                        className="mr-[5px]"
                                    >
                                        {sum + ' + '}
                                    </p>
                                )
                            }
                            return (
                                <p key={`${place}-${sum}`} className="mr-[5px]">
                                    {sum + ' = ' + solution}
                                </p>
                            )
                        })}
                </div>
            </li>
        </ol>
    )
}

// Helper Functions for Component
// Break number into place-value components
function decomposeNum(n) {
    const digits = String(n).split('').map(Number)
    const len = digits.length

    return digits.map((digit, idx) => {
        const place = len - idx - 1
        return digit * Math.pow(10, place)
    })
}

// Create digitwise partners for ANY two numbers
function digitPartners(a, b) {
    const maxLen = Math.max(String(a).length, String(b).length)

    const a_digits = String(a).padStart(maxLen, '0').split('').map(Number)

    const b_digits = String(b).padStart(maxLen, '0').split('').map(Number)

    return a_digits.map((d, i) => ({
        a: d,
        b: b_digits[i],
        sum: d + b_digits[i],
        place: Math.pow(10, maxLen - i - 1),
    }))
}

// Build sequential pairs across ANY operand array
function findPairs(operands) {
    const pairs = []

    for (let i = 0; i < operands.length - 1; i++) {
        const left = operands[i]
        const right = operands[i + 1]

        // Fully digit-normalized partners
        const digitAdds = digitPartners(left, right)

        // Extract place-value parts for UI grouping
        const left_parts = decomposeNum(left)
        const right_parts = decomposeNum(right)

        pairs.push({
            left,
            right,
            left_parts,
            right_parts,
            digitAdds,
        })
    }

    return pairs
}

// Groups operand by place value
function groupPlaceValues(operands) {
    const grouped = {}

    operands.forEach((num) => {
        const parts = decomposeNum(num)

        parts.forEach((value) => {
            const place = String(value).length // 1=ones, 2=tens, etc.

            if (!grouped[place]) {
                grouped[place] = []
            }

            grouped[place].push(value)
        })
    })

    return grouped
}
