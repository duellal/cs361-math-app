'use client'

import { useRouter } from "next/navigation";


export default function Help() {
  const router = useRouter()

  return (
    <div
      className="w-full mt-[32px] flex flex-wrap place-content-center"
    >
        Help Page
    </div>
  );
}