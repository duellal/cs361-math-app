'use client'

import { QuestionIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";


export default function PracticeProblemsDiv() {
    const router = useRouter()

    return (
        <div
            className="w-[810px] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue"
        >
            {/* h2, hint button + tutorial button */}
            <div className="w-full border flex items-end justify-between ml-[70px] mr-[45px] mt-[20px]">
                <h2 className="w-[250px] border-b-2 border-light-blue text-[48px]">
                    Directions
                </h2>

                <button
                    className="border-2 border-dark-blue rounded-lg h-[45px] bg-white text-black px-2"
                    onClick={null}
                >
                    Need a Hint?
                </button>

                <button
                    className=" text-white rounded-full bg-dark-blue"
                    onClick={null}
                >
                    <QuestionIcon size={40} weight="fill" />
                </button>
            </div>
            
        </div>
    );
}