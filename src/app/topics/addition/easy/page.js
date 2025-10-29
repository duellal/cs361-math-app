'use client'

import PageUnderConstruction from "@/app/__components/PageConstruction";
import { useRouter } from "next/navigation";
import PracticeProblemsDiv from "../../__components/practice_component/practice";


export default function PracticeAddition() {
    const router = useRouter()

    return (
        <div
            className="w-full mt-[32px] flex flex-wrap place-content-center"
        >
            <h2 className="w-full text-center text-[20px]">
                EASY Practice Addition Page
            </h2>

            <PracticeProblemsDiv />
        </div>
    );
}