'use client'

import Image from "next/image";
import banner from "../../public/images/home-banner.jpg"
import practice_example from "../../public/images/home-practice-page-example.jpg"
import { useRouter } from "next/navigation";
import ContentDiv from "./__components/contentDiv";


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
          className="flex w-[180px] h-[60px] rounded-full py-1 px-2 place-items-center mt-[-10px] cursor-pointer
            outline-3 outline-dark-blue 
            bg-[linear-gradient(180deg,var(--color-white)_0%,var(--color-medium-blue)_100%)]
            shadow-[-4px_-4px_8px_var(--color-dark-blue),4px_4px_8px_var(--color-dark-blue)]
            transition-all ease-in-out

            hover:shadow-[0_0_20px_var(--color-medium-blue),-4px_-4px_8px_var(--color-dark-blue),4px_4px_8px_var(--color-dark-blue)]
            hover:brightness-[1.1]

            active:shadow-[inset_2px_2px_8px_var(--color-dark-blue)],inset_-2px_-2px_8px_var(--color-dark-blue)]
            active:translate-y-[2px]"
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
        
        <ContentDiv
          title={'Practice Your Problem Solving Skills!'}
          text={'MathPath is a fun, free way to practice your math skills. Regardless of your mathematical expertise, you will find something that can help you solidify your knowledge.'}
        />

        <ContentDiv
          title={null}
          text={null}
          div_tw={`w-[430px] h-[240px] px-0 py-0`}
          img_src={practice_example}
          img_alt={``}
          img_tw={`rounded-[18%]`}
        />
      </div>
    </div>
  );
}