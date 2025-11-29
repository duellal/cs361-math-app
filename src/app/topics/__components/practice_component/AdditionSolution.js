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

    // Add decomposed numbers to digit place value object:
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
                    className={`flex flex-wrap justify-self-center border-3 border-dashed border-black w-[80%] py-[10px]`}
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
                                            1
                                                ? digit_place_value[
                                                      idx + 1
                                                  ].join(', ')
                                                : digit_place_value[idx + 1] +
                                                  ', 0'}
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

                {pairs.map((pair, idx) => {
                    const digitAdds = digitPartners(pair.left, pair.right)

                    return (
                        <div key={idx} className="w-full text-center py-[10px]">
                            <div className="w-full flex flex-col items-center">
                                <div
                                    className={`flex flex-wrap border-3 border-dashed border-black w-[80%] py-[10px]`}
                                >
                                    {digitAdds.map((d, i) => {
                                        if (i === 0 && pairs.length > 1) {
                                            return (
                                                <div
                                                    key={i}
                                                    className="w-full flex flex-wrap"
                                                >
                                                    <div className="w-full flex justify-center items-center">
                                                        <p>
                                                            {d.a * d.place} +{' '}
                                                            {d.b * d.place} ={' '}
                                                            {d.sum * d.place}
                                                        </p>
                                                    </div>
                                                    <p className="w-full mt-[10px] mb-[10px]">
                                                        and
                                                    </p>
                                                </div>
                                            )
                                        }
                                        return (
                                            <div
                                                key={i}
                                                className="w-full flex justify-center items-center mb-[5px]"
                                            >
                                                <div className="w-full flex justify-center items-center">
                                                    <p>
                                                        {d.a * d.place} +{' '}
                                                        {d.b * d.place} ={' '}
                                                        {d.sum * d.place}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </li>

            {/* Add Sums Together */}
            <li className="pl-[10px] mb-[20px] w-full">
                <p className="mb-[10px]">
                    Combine everything for the final answer:
                </p>

                <div
                    className={`flex flex-wrap justify-self-center text-center border-3 border-dashed border-black w-[80%] py-[10px]`}
                >
                    {pairs.map((pair, p_idx) => {
                        const digitAdds = digitPartners(pair.left, pair.right)

                        if (
                            pair.left_parts.length >= 2 ||
                            pair.right_parts.length >= 2
                        ) {
                            return (
                                <div
                                    key={p_idx}
                                    className="flex w-full justify-center text-center py-[10px]"
                                >
                                    {digitAdds.map((digit, d_idx) => {
                                        if (d_idx !== digitAdds.length - 1) {
                                            return (
                                                <p key={d_idx}>
                                                    {(digit.a + digit.b) *
                                                        digit.place +
                                                        ' + '}
                                                </p>
                                            )
                                        }

                                        return (
                                            <p key={d_idx} className="ml-[5px]">
                                                {' ' +
                                                    (digit.a + digit.b) *
                                                        digit.place}{' '}
                                                = {solution}
                                            </p>
                                        )
                                    })}
                                </div>
                            )
                        }
                    })}

                    <p className="w-full text-center">
                        {total} = {solution}
                    </p>
                </div>
            </li>
        </ol>
    )
}

// Helper Functions for Component
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
    const a_digits = String(a)
        .padStart(String(Math.max(a, b)).length, '0')
        .split('')
        .map(Number)

    const b_digits = String(b)
        .padStart(String(Math.max(a, b)).length, '0')
        .split('')
        .map(Number)

    return a_digits.map((d, i) => ({
        a: d,
        b: b_digits[i],
        sum: d + b_digits[i],
        place: Math.pow(10, a_digits.length - i - 1),
    }))
}

function findPairs(operands) {
    const pairs = []

    for (let i = 0; i < operands.length - 1; i++) {
        const left = operands[i]
        const right = operands[i + 1]

        const left_parts = decomposeNum(left)
        const right_parts = decomposeNum(right)

        // Match based on largest-to-smallest place, filling missing places with 0
        const max_len = Math.max(left_parts.length, right_parts.length)
        const normalized_left = Array(max_len)
            .fill(0)
            .map((_, i) => left_parts[left_parts.length - max_len + i] || 0)
        const normalized_right = Array(max_len)
            .fill(0)
            .map((_, i) => right_parts[right_parts.length - max_len + i] || 0)

        pairs.push({
            left,
            right,
            left_parts: normalized_left,
            right_parts: normalized_right,
        })
    }

    return pairs
}
