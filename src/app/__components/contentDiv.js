'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";


export default function ContentDiv(props) {
    const { div_tw, h2_tw, img_alt, img_src, img_tw, p_tw, title, text } = props
    const router = useRouter()
    let order = []
    
    if(title){
        order.push(
            <h2 className={`text-white text-[24px]/8 font-[500] text-center pb-[10px] ${h2_tw}`}>
                {title}
            </h2>
        )
    }
    if(text){
        order.push(
            <p className={`text-dark-blue text-center text-[15px] px-[20px] font-[500] ${p_tw}`}>
                {text}
            </p>
        )
    }
    if(img_src){
        order.push(
          <Image
            src={img_src}
            alt={img_alt}
            className={img_tw}
          />
        )
    }

    return (
        <div
            className={`p-[15px] w-[330px] ${div_tw}`}
        >
            { order?.map(elem => {
                return elem
            })}
        </div>
    );
}