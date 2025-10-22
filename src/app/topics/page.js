'use client'

import { useRouter } from "next/navigation";

const paths = {
  addition: {
    symbol: '',
  }
}


const PathComponent = (props) => {
  const { symbol, title } = props

  return (
    <div 
      className="w-full"
    >

    </div>
  )
}


export default function Topics() {
  const router = useRouter()

  return (
    <div
      className="w-full mt-[32px] flex flex-wrap place-content-center"
    >
      <h1
        className="w-full text-[77px] text-white font-bold text-center"
      >
        Math Paths
      </h1>

      <div
        className="w-full"
      >

      </div>
    </div>
  );
}