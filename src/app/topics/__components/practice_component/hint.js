export default function HintText({ problem }) {
    const arr_len = problem.operands.length
    const first_phrase = 'What is '
    const second_phrase = '? Then, add the sums together.'
    // Can become depending on operands: [[], []]
    const nums_arr = []

    // Splitting each number into 2 parts
    problem.operands.map((num, idx) => {
        let num_arr = num.toString().split('')
        let num_len = num_arr.length

        if (idx === 0) {
            nums_arr[0] = [parseInt(num_arr[0]) * 10 ** (num_len - 1)]

            if (num_len === 2) {
                nums_arr[1] = [parseInt(num_arr[1])]
            }
        }
        if (idx === arr_len - 1) {
            nums_arr[0].push(parseInt(num_arr[0]) * 10 ** (num_len - 1))
            if (num_len === 2) {
                nums_arr[1] = [...nums_arr[1], parseInt(num_arr[1])]
            }
        }
    })

    return (
        <p
            className={`text-dark-blue text-center text-[18px] px-[20px] font-[500]`}
        >
            {nums_arr.length > 1 ? (
                <>
                    {first_phrase}
                    {nums_arr.map((array, arr_idx) => {
                        if (array.length > 1) {
                            return array.map((num, n_idx) => {
                                if (n_idx === 0) {
                                    return num + ' + '
                                } else if (n_idx === array.length - 1) {
                                    if (arr_idx === array.length - 1) {
                                        return num + second_phrase
                                    } else if (nums_arr.length === 1) {
                                        return num
                                    } else if (nums_arr[1].length === 1) {
                                        return num + '?'
                                    }

                                    return num + ', and '
                                }
                            })
                        } else {
                            return ' Then add ' + array[0] + ' more.'
                        }
                    })}
                </>
            ) : (
                nums_arr[0].map((num, n_idx) => {
                    if (n_idx === 0) {
                        return 'Out loud, count up from ' + num + ' by '
                    } else {
                        return num + '. What is the last number you heard?'
                    }
                })
            )}
        </p>
    )
}
