'use client'

import { useRouter } from "next/navigation";
import ContentDiv from "../__components/contentDiv";
import { instructions } from "./instructions";


export default function Help() {
  const router = useRouter()

  return (
    <div
      className="w-full mt-[32px]"
    >
      <div
        className={`w-full place-items-center mb-[150px]`}
      >
        <h1
          className="w-[900px] mb-[50px]"
        >
          Instructions for Practicing Problems
        </h1>

        <ContentDiv
          div_key={`${Math.random()}-instructions`}
          text={instructions}
          div_tw={'border-[12px] border-white bg-medium-blue w-[1000px] text-white p-[40px]'}
          p_tw={`text-left text-[18px]`}
          li_tw={``}
          ul_tw={`mx-5 my-5`}
        />
      </div>
      
      <div
        className={`w-full place-items-center`}
      >
        <h1
          className="w-[900px] justify-center text-center text-[65px] font-bold mb-[50px]"
        >
          Have a Question?
        </h1>

        <ContentDiv
          div_key={`${Math.random()}-instructions`}
          text={`You can contact us at `}
          link={{
            href: 'mailto:mathpath.help@ethereal.email',
            text: 'mathpath.help@ethereal.email',
            tw: 'text-white hover:border-b-2 hover:border-white'
          }}
          div_tw={'border-[12px] border-white bg-medium-blue w-[560px] px-8'}
          p_tw={`w-full text-center text-[18px]`}
          li_tw={``}
          ul_tw={`mx-5 my-5`}
        />
      </div>
    </div>
  );
}
