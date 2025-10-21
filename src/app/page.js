'use client'

import Image from "next/image";
import banner from "../../public/images/home-banner.jpg"
import practice_example from "../../public/images/home-practice-page-example.jpg"
import { useRouter } from "next/navigation";

const tw_variables = {
  why_mathpath_divs: 'border-[12px] border-white rounded-[20%] bg-medium-blue place-content-center'
}

export default function Home() {
  const router = useRouter()

  return (
    <div
      className="w-full mt-[32px] flex flex-wrap place-content-center"
    >
      <Image
        id="banner-img"
        src={banner}
        alt="Background circle radius from the bottom right middle of the image that goes from a pastel bright orange (almost a pale yellow) to a dark orange / brown. There are math symbols floating in the forefront that are balloon shaped. Some symbols are an orange addition symbol in the lower right hand corner, a brown summation symbol on the upper left hand corner, a red subtraction symbol to the right of the summation symbol and to the right of that is a square root symbol that is a pastel orange. In the left center, it says 'A Free Way to Build Confidence in Math' in white."
      />

      <div
        className="w-full flex place-content-center-safe py-[56px]"
      >
        <button
          className="border border-dark-blue w-[180px] h-[60px] bg-white rounded-full flex py-1 px-2 place-items-center mt-[-10px]"
          onClick={evt => {
            evt.preventDefault()
              return router.push('/topics')
          }}
        >
          <p className="w-full text-lg">
            Get Started For Free!
          </p>
        </button>
      </div>

      <div
        className="flex flex-wrap px-[150px] place-content-center place-items-center justify-around"
      >
        <h1
          className="w-full text-white text-[42px] mb-[30px] text-center font-[600]"
        >
          Why MathPath?
        </h1>
        
        <div
          className={`${tw_variables.why_mathpath_divs} p-[15px] w-[330px]`}
        >
          <h2 className="text-white text-[24px]/8 font-[500] text-center pb-[10px]">
            Practice Your Problem Solving Skills!
          </h2>
          <p className="text-dark-blue text-center text-[15px] px-[20px] font-[500]">
            MathPath is a fun, free way to practice your math skills. Regardless of your mathematical expertise, you will find something that can help you solidify your knowledge.
          </p>
        </div>
        
        <div className={`w-[430px] h-[240px] ${tw_variables.why_mathpath_divs} justify-items-center`}>
          <Image
            src={practice_example}
            alt=""
            className="rounded-[18%]"
          />
        </div>
      </div>

    </div>
  );
}