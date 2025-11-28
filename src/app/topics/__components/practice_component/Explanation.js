import AdditionSolution from './AdditionSolution'

// In future, add:
// <SubtractionExplanation />
// <MultiplicationExplanation />
// <DivisionExplanation />
// etc.

export default function Explanation({ problem }) {
    const { operation, operands, solution } = problem

    const operationSwitch = () => {
        switch (operation) {
            case 'add':
                ;<AdditionSolution
                    key={'add-explain'}
                    operands={operands}
                    solution={solution}
                />
            default:
                ;<p>No explanation available.</p>
        }
    }

    return (
        <div className="w-[90%] mb-[20px]">
            <h5 className="flex justify-self-start mb-[10px] text-[20px] font-bold">
                {' '}
                Steps:{' '}
            </h5>

            {operationSwitch()}
        </div>
    )
}
