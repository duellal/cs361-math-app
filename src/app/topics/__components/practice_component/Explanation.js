import addCommas from '../../_helper_funcs/numString'
import AdditionSolution from './operationSolutions/AdditionSolution'

// In future, add:
// <SubtractionExplanation />
// <MultiplicationExplanation />
// <DivisionExplanation />
// etc.

export default function Explanation({ problem }) {
    const { operation, operands, solution } = problem

    const operationSwitch = (operation) => {
        switch (operation) {
            case 'add':
                return (
                    <AdditionSolution
                        key={'add-explain'}
                        operands={operands}
                        solution={solution}
                    />
                )
            default:
                return <p>No explanation available.</p>
        }
    }

    return (
        <div className="w-[90%] mb-[20px] mt-[10px]">
            <h5 className={`w-full text-[24px] font-bold`}>Problem:</h5>
            <p className="w-full px-[40px] text-[22px] w-[90%] mt-2 mb-[20px]">
                {operands.map((num, n_idx) => {
                    if (n_idx !== operands.length - 1) {
                        return addCommas(num) + ' + '
                    } else {
                        return addCommas(num)
                    }
                })}
            </p>
            <h6 className="flex justify-self-start mb-[10px] text-[24px] font-bold">
                Steps:{' '}
            </h6>

            {operationSwitch(operation)}
        </div>
    )
}
