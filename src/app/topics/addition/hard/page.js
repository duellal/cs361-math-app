'use client'

import PageUnderConstruction from '@/app/__components/PageConstruction'
import { useRouter } from 'next/navigation'

export default function PracticeAddition() {
    const router = useRouter()

    return (
        <div className="w-full mt-[32px] flex flex-wrap place-content-center">
            HARD Practice Addition Page
            <PageUnderConstruction />
        </div>
    )
}
