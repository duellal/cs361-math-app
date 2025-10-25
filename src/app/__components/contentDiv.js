'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function ContentDiv(props) {
    const { div_key, div_tw, h2_tw, img_alt, img_src, img_tw, li_tw, link, p_tw, title, text, ul_tw } = props
    const router = useRouter()
    let order = []
    
    if(title){
        order.push(
            <h2 
                key={`h2`}
                className={`text-white text-[24px]/8 font-[500] text-center pb-[10px] ${h2_tw}`}
            >
                {title}
            </h2>
        )
    }
    if(img_src){
        order.push(
          <Image
            key={'img'}
            src={img_src}
            alt={img_alt}
            className={img_tw}
          />
        )
    }
    if (link && text) {
        order.push(
            <p
                key={`text`}
                className={`text-dark-blue text-center text-[15px] px-[20px] font-[500] ${p_tw}`}
            >
                {text} 

                <Link
                    href={link.href}
                    className={link.tw}
                >
                    { link.text }
                </Link>
            </p>
        )
    }
    else if (text) {
        if (Array.isArray(text)) {
            if (div_key.includes("instructions")) {
                order.push(
                    <ul
                        key="list"
                        className={`list-disc space-y-4 ${ul_tw}`}>
                        {text.map((elem, idx) => (
                            <li
                                key={idx}
                                className={`${li_tw}`}
                            >
                                <p
                                    className={`text-dark-blue text-center text-[15px] px-[20px] font-[500] ${p_tw}`}
                                >
                                    {elem}
                                </p>
                            </li>
                        ))}
                    </ul>
                );
            } else {
                text.forEach((elem, idx) => {
                    order.push(
                        <p
                            key={`${idx}-text`}
                            className={`text-dark-blue text-center text-[15px] px-[20px] font-[500] ${p_tw}`}
                        >
                            {elem}
                        </p>
                    )
                })
            }
        }
        else {
            order.push(
                <p
                    key={`text`}
                    className={`text-dark-blue text-center text-[15px] px-[20px] font-[500] ${p_tw}`}
                >
                    {text}
                </p>
            )
        }
    }

    return (
        <div
            key={div_key}
            className={`p-[15px] w-[330px] rounded-[60px] border-[12px] border-white bg-medium-blue place-content-center ${div_tw} `}
        >
            { order?.map(elem => {
                return elem
            })}
        </div>
    );
}