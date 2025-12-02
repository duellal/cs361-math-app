'use client'

import generate_problem_set from '@/app/_apiFuncs/problems/addition/addProblemSet'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import easy_problems from '../easy/easyAdditionPrblms'
import UserContext from '@/app/_context/userContext'
import { useRouter } from 'next/navigation'

// Styling:
// Divs
const divMarginsTw = `px-[50px] py-[20px]`

// Form
const formFieldset =
    'w-[65%] min-w-[440px] mb-5 border-light-blue rounded-xl p-3 text-center'
const formLegend = 'text-dark-blue p-2 font-bold text-xl'
const formInput = 'border p-3 mb-2 w-[65%] text-white text-center'
const formBtn =
    'w-[55%] bg-dark-blue text-[18px] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-[70%] mt-[20px]'

export default function GenerateAddtionProblems() {
    const router = useRouter()

    const numberTypeArr = ['select type', 'integer', 'decimal', 'fraction']
    const roundToArr = [
        'select place value',
        'tenths (0.1)',
        'hundredths (0.01)',
        'thousandths (0.001)',
        'ten thousandths (0.0001)',
        'hundred thousandths (0.00001)',
    ]

    const { user } = useContext(UserContext)

    const [error, setError] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [prblm_count, setNumOfProbs] = useState(1)
    const [num_per_prblm, setNumofOperands] = useState(2)
    const [format, setFormat] = useState('')
    const [round_to, setRoundTo] = useState('')

    const prblm_count_range = Array.from({ length: 99 }, (__, idx) => idx + 1)
    const num_per_prblm_range = Array.from({ length: 9 }, (__, idx) => idx + 2)

    useEffect(() => {
        if (
            typeof prblm_count === 'number' &&
            typeof num_per_prblm === 'number' &&
            format !== '' &&
            (format === 'decimal' ? typeof round_to === 'number' : true)
        ) {
            setDisableSubmit(false)
        } else {
            setDisableSubmit(true)
        }
    }, [format, num_per_prblm, prblm_count, round_to])

    const handleGenerateProblems = async (evt) => {
        evt.preventDefault()
        let range = [0, 50 / num_per_prblm]

        if (format === 'decimal') {
            range = [0, 10 / num_per_prblm]
        }

        let generateSet = await generate_problem_set({
            prblm_count,
            num_per_prblm,
            format,
            round_to,
            range,
            difficulty: 'easy',
        })

        if (generateSet?.status === 200) {
            await easy_problems({ user_id: user ? user['_id'] : null })

            setError(false)
            setDisableSubmit(true)

            return router.push('/topics/addition/easy')
        }

        setError(true)
    }

    return (
        <div className="w-full my-[32px] flex flex-wrap content-start justify-center">
            {/* Headers */}
            <div className="w-[900px] leading-20 mb-[50px]">
                <h1 className="w-full">Generate Addition Problems</h1>
            </div>

            {/* Form Div */}
            <div
                className={`w-[65%] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue justify-center ${divMarginsTw} gap-8`}
            >
                {/* Directions + Instructions */}
                <div className={`w-full flex justitems-center`}>
                    <div className="w-full min-h-[105px] flex flex-wrap justify-center gap-4">
                        <div className="w-full flex justify-center">
                            <h3
                                className={`max-w-fit border-b-2 border-light-blue text-[35px] font-bold mb-[10px]`}
                            >
                                Directions
                            </h3>
                        </div>
                        {/* Instructions */}
                        <p className="w-[75%] text-[22px] text-center font-medium">
                            Fill out the form and click on submit to generate
                            more <strong>easy addition</strong> problems!
                        </p>
                        <p className="w-[60%] text-center">
                            <strong>Tip:</strong> You can move the slider with
                            your keyboard! Click it (or press the Tab key to
                            highlight it), then use the left and right arrow
                            keys.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <form
                    className={`p-2 text-dark-blue min-w-[80%] flex flex-wrap justify-center`}
                >
                    {/* Number of Problems */}
                    <fieldset
                        key={'fieldset-num-of-probs'}
                        className={`border-3 ${formFieldset}`}
                    >
                        <legend className={formLegend} htmlFor="num_of_probs">
                            How many more problems would you like?
                        </legend>

                        <div className="w-[90%] flex flex-wrap place-self-center">
                            <div className="w-full text-xl font-semibold text-dark-blue">
                                {prblm_count}
                            </div>

                            <input
                                type="range"
                                name="num_of_probs"
                                id="num_of_probs"
                                list="num_of_probs_markers"
                                value={prblm_count}
                                max={99}
                                min={1}
                                step={1}
                                className={`appearance-none accent-dark-blue w-full ${formInput} px-0 py-0 my-[10px] text-black rounded-full bg-light-blue cursor-pointer`}
                                onChange={(evt) => {
                                    evt.preventDefault()
                                    setNumOfProbs(Number(evt.target.value))
                                }}
                            />

                            <div
                                id="num_of_probs_markers"
                                className="w-full flex justify-between ml-1 mt-[-5px] mb-[10px]"
                            >
                                {prblm_count_range.map((num, idx) => {
                                    if (
                                        idx === 0 ||
                                        num % 10 === 0 ||
                                        idx === prblm_count_range.length - 1
                                    ) {
                                        return (
                                            <div
                                                key={`${idx}-range-num-${num}`}
                                            >
                                                <span className="text-sm font-bold">
                                                    {num}
                                                </span>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </fieldset>

                    {/* Number of Operands */}
                    <fieldset
                        key={'fieldset-num-of-operands'}
                        className={`border-3 ${formFieldset}`}
                    >
                        <legend className={formLegend}>
                            How many numbers in a problem?
                            <br />
                            <p className="text-lg font-medium">
                                <strong>Example:</strong> 1 + 1 has 2 numbers in
                                the problem
                            </p>
                        </legend>

                        <div className="w-[90%] flex flex-wrap place-self-center">
                            <div className="w-full text-xl font-semibold text-dark-blue">
                                {num_per_prblm}
                            </div>

                            <input
                                type="range"
                                name="num_of_probs"
                                value={num_per_prblm}
                                max={10}
                                min={2}
                                step={1}
                                required
                                placeholder="Enter a number between 2 - 10"
                                className={`appearance-none accent-dark-blue w-full ${formInput} px-0 py-0 my-[10px] text-black rounded-full bg-light-blue cursor-pointer`}
                                onChange={(evt) => {
                                    evt.preventDefault()
                                    setNumofOperands(Number(evt.target.value))
                                }}
                            />

                            <div
                                id="num_per_prob_markers"
                                className="w-full flex justify-between ml-1 mt-[-5px] mb-[10px]"
                            >
                                {num_per_prblm_range.map((num, idx) => {
                                    return (
                                        <div key={`${idx}-range-num-${num}`}>
                                            <span className="text-sm font-bold">
                                                {num}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </fieldset>

                    {/* Problem Format */}
                    <fieldset
                        key={'fieldset-format'}
                        className={`${formFieldset} border-3 ${format === 'decimal' ? 'flex flex-wrap justify-center' : ''}`}
                    >
                        <legend className={formLegend}>
                            What type of number? <br /> (Integer, Decimal, or
                            Fraction)
                        </legend>

                        <select
                            name="number-type"
                            className={`${formInput} text-dark-blue capitalize`}
                            required
                            onChange={(evt) => {
                                evt.preventDefault()
                                setFormat(evt.target.value)
                            }}
                            value={format}
                        >
                            {numberTypeArr.map((type, idx) => {
                                if (idx === 0) {
                                    return (
                                        <option key={`${idx}-type`} value={''}>
                                            {type}
                                        </option>
                                    )
                                }
                                if (type === 'integer') {
                                    return (
                                        <option
                                            key={`type-${type}-${idx + 1}`}
                                            value={type}
                                        >
                                            whole number
                                        </option>
                                    )
                                }

                                return (
                                    <option
                                        key={`type-${type}-${idx + 1}`}
                                        value={type}
                                    >
                                        {type}
                                    </option>
                                )
                            })}
                        </select>

                        {/* Place Value if Decimal is selected */}
                        {format === 'decimal' ? (
                            <fieldset
                                key={'fieldset-type-decimal'}
                                className={`mt-4 border-2 ${formFieldset}`}
                            >
                                <legend className={`w-[65%] ${formLegend}`}>
                                    What place value should the numbers go to?
                                </legend>

                                <select
                                    key={''}
                                    className={`${formInput} w-auto capitalize`}
                                    required
                                    onChange={(evt) => {
                                        evt.preventDefault()
                                        setRoundTo(Number(evt.target.value))
                                    }}
                                    value={round_to}
                                >
                                    {roundToArr.map((round, idx) => {
                                        if (idx === 0) {
                                            return (
                                                <option
                                                    key={`${idx}-round`}
                                                    value={''}
                                                >
                                                    {round}
                                                </option>
                                            )
                                        }
                                        return (
                                            <option
                                                key={`${idx}-round`}
                                                value={idx}
                                            >
                                                {round}
                                            </option>
                                        )
                                    })}
                                </select>
                            </fieldset>
                        ) : null}
                    </fieldset>

                    {/* Error */}
                    {error ? (
                        <div className="w-full flex flex-wrap my-[10px] text-error-red">
                            <p className="w-full text-center">
                                Oh no! There was an error with your request.
                            </p>
                            <p className="w-full text-center">
                                Refresh the page and try again.
                            </p>
                        </div>
                    ) : null}
                    {/* Submit Button */}
                    <button
                        key={'submit-btn'}
                        className={formBtn}
                        onClick={handleGenerateProblems}
                        disabled={disableSubmit}
                    >
                        Generate Problems
                    </button>
                </form>
            </div>
        </div>
    )
}
