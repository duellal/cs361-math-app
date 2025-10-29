'use client'

import PrblmBtn from "@/app/__components/PracticePrblmBtn";
import { QuestionIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";


export default function PracticeProblemsDiv() {
    const router = useRouter()

    return (
        <div
            className="w-[810px] flex flex-wrap rounded-[60px] border-[12px] border-white bg-medium-blue"
        >
            {/* h2, hint button + tutorial button */}
            <div className="w-full flex items-end justify-between ml-[70px] mr-[45px] mt-[20px]">
                <h2 className="w-[250px] border-b-2 border-light-blue text-[35px] font-bold">
                    Directions
                </h2>

                <div className="w-[50%] flex justify-end self-center">
                    <PrblmBtn 
                        text={'Need a Hint?'}
                        handleSubmit={null}
                        tw={`rounded-lg h-[45px]`}
                    />

                
                    <PrblmBtn
                        text={'?'}
                        handleSubmit={null}
                        tw={`size-[40px] text-medium-blue text-[30px] font-black rounded-full place-content-center self-center`}
                    />
                </div>
            </div>
            {/* Instructions */}
            <div
                className="w-full text-[24px] font-medium  ml-[70px] mr-[45px] mt-[10px]"
            >
                <p>
                    Input the best answer below.
                </p>
            </div>
            {/* Problem */}
            <div>

            </div>
            {/* Answer Input + Submit/Skip Problem Btns */}
            <div>

            </div>
        </div>
    );
}