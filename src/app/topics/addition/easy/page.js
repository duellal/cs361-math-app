'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import PracticeProblems from "../../__components/practice_component/practice";

import { easyProblems } from "../additionPrblms";
import EmptyPracticeProblems from "../../__components/practice_component/EmptyPracticeState";


export default function PracticeAddition() {
    const router = useRouter()

    // States:
    const [randomIdx, setRandomIdx] = useState(0)


    return (
        <div
            className="w-full mt-[32px] flex flex-wrap content-start justify-center"
        >
            {/* Headers */}
            <div>
                <h1 className="w-full">
                    Practice Problems
                </h1>

                <h2
                    className="w-full text-center font-bold text-[40px] mb-[50px]"
                >
                    Easy Addition
                </h2>
            </div>
            
            {
                randomIdx !== null ?
                    <PracticeProblems
                        prblmArr={easyProblems}
                        randomIdx={randomIdx}
                        setRandomIdx={setRandomIdx}
                    />
                :
                    <EmptyPracticeProblems />
            }
            
        </div>
    );
}