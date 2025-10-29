'use client'

import { useRouter } from "next/navigation";


export default function PageUnderConstruction() {
    const router = useRouter()

    return (
        <div
            className="w-full mt-[32px] flex flex-wrap place-content-center"
        >
            Page Under Construction
        </div>
    );
}