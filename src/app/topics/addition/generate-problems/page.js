'use client'

import PrblmBtn from '@/app/__components/PracticePrblmBtn'
import Link from 'next/link'
import { useState } from 'react'

// Styling:
// Buttons
const mainBtnTw = `rounded-lg h-[45px]`
const bottomBtnsTw = `${mainBtnTw} w-[132px] w-min-fit text-center p-3 cursor-pointer`

// Divs
const divMarginsTw = `px-[50px] py-[20px]`

// Text
const h3Tw = `text-[50px] font-bold text-center mt-[20px] mb-[40px] text-dark-blue text-white`
const pTw = `w-full self-center text-white text-center text-[20px] font-bold`

// Form
const formFieldset =
    'w-[65%] min-w-[440px] mb-5 border-light-blue rounded-xl p-3 text-center'
const formLegend = 'text-dark-blue p-2 font-bold text-xl'
const formInput = 'border p-3 mb-2 w-[65%] text-white text-center'
const formBtn =
    'w-[55%] bg-dark-blue text-[18px] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'

export default function GenerateAddtionProblems() {
    const numberTypeArr = ['select type', 'integer', 'decimal', 'fraction']
    const roundToArr = [
        'select place value',
        'tenths (0.1)',
        'hundredths (0.01)',
        'thousandths (0.001)',
        'ten thousandths (0.0001)',
        'hundred thousandths (0.00001)',
    ]

    const [numOfProbs, setNumOfProbs] = useState('')
    const [numOfOperands, setNumofOperands] = useState('')
    const [format, setFormat] = useState('')
    const [roundTo, setRoundTo] = useState('')

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
                        <legend className={formLegend}>
                            How many more problems would you like?
                        </legend>

                        <input
                            type="number"
                            name="num_of_probs"
                            value={numOfProbs}
                            max={99}
                            min={1}
                            required
                            placeholder="Enter a number between 1 - 99"
                            className={formInput}
                            onChange={(evt) => {
                                evt.preventDefault()
                                setNumOfProbs(evt.target.value)
                            }}
                        />
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

                        <input
                            type="number"
                            name="num_of_probs"
                            value={numOfOperands}
                            max={10}
                            min={2}
                            required
                            placeholder="Enter a number between 2 - 10"
                            className={formInput}
                            onChange={(evt) => {
                                evt.preventDefault()
                                setNumofOperands(evt.target.value)
                            }}
                        />
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
                            className={`${formInput} capitalize`}
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
                                    className={`${formInput} capitalize`}
                                    required
                                    onChange={(evt) => {
                                        evt.preventDefault()
                                        setRoundTo(evt.target.value)
                                    }}
                                    value={roundTo}
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
                                                value={round}
                                            >
                                                {round}
                                            </option>
                                        )
                                    })}
                                </select>
                            </fieldset>
                        ) : null}
                    </fieldset>

                    <button
                        key={'submit-btn'}
                        className={formBtn}
                        type="submit"
                    >
                        Generate Problems
                    </button>
                </form>
            </div>
        </div>
    )
}
