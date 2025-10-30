'use client'

import PageUnderConstruction from "@/app/__components/PageConstruction";
import { useRouter } from "next/navigation";
import PracticeProblemsDiv from "../../__components/practice_component/practice";


export default function PracticeAddition() {
    const router = useRouter()

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
            
            <PracticeProblemsDiv />
        </div>
    );
}