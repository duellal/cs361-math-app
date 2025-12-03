'use client'

// General Imports

// Icon Imports:
import { DivideIcon, MinusIcon, PlusIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '@mui/material'
import Link from 'next/link'

const paths = [
    {
        title: 'addition',
        symbol: (
            <PlusIcon
                size={30}
                weight="bold"
                className="flex place-self-center text-light-blue"
            />
        ),
        easy_href: '/topics/addition/easy',
        disabled: ['medium', 'hard'],
        // medium_href: '/topics/addition/medium',
        // hard_href: '/topics/addition/hard'
    },
    {
        title: 'subtraction',
        symbol: (
            <MinusIcon
                size={30}
                weight="bold"
                className="flex place-self-center text-light-blue"
            />
        ),
        disabled: ['easy', 'medium', 'hard'],
        // easy_href: '/topics/subtraction/easy',
        // medium_href: '/topics/subtraction/medium',
        // hard_href: '/topics/subtraction/hard'
    },
    {
        title: 'multiplication',
        symbol: (
            <XIcon
                size={30}
                weight="bold"
                className="flex place-self-center text-light-blue"
            />
        ),
        disabled: ['easy', 'medium', 'hard'],
        // easy_href: '/topics/multiplication/easy',
        // medium_href: '/topics/multiplication/medium',
        // hard_href: '/topics/multiplication/hard'
    },
    {
        title: 'division',
        symbol: (
            <DivideIcon
                size={30}
                weight="bold"
                className="flex place-self-center text-light-blue"
            />
        ),
        disabled: ['easy', 'medium', 'hard'],
        // easy_href: '/topics/division/easy',
        // medium_href: '/topics/division/medium',
        // hard_href: '/topics/division/hard'
    },
]

const btn_txt = ['easy', 'medium', 'hard']

const PathComponent = () => {
    return (
        <div className="w-full">
            {paths.map((path, idx) => {
                const path_title = path.title

                return (
                    <div
                        key={`div-${idx + Math.random()}-${path_title}`}
                        className="w-full flex flex-wrap place-content-center mb-[4%]"
                    >
                        <div
                            key={`title-${idx + Math.random()}-${path_title}`}
                            className="w-full flex place-content-center"
                        >
                            {path.symbol}

                            <h2 className="capitalize text-white text-[40px] px-[4%] text-center font-bold">
                                {path_title}
                            </h2>

                            {path.symbol}
                        </div>

                        <div
                            key={`btns-${idx + Math.random()}-${path_title}`}
                            className="w-full flex place-content-center"
                        >
                            {btn_txt.map((txt, idx) => {
                                let disabled = path.disabled.includes(txt)

                                return (
                                    <Link
                                        key={`${idx + Math.random()}-${txt}-btn`}
                                        href={
                                            !disabled
                                                ? `${path[`${txt}_href`]}`
                                                : ``
                                        }
                                        disabled={disabled}
                                        style={{
                                            cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
                                        }}
                                        className="m-[30px]"
                                    >
                                        <Button
                                            disableRipple
                                            disableTouchRipple
                                            disableFocusRipple
                                            variant="contained"
                                            className={`border-white border-3 rounded-none bg-dark-blue text-light-blue w-[150px] text-[20px] font-extrabold capitalize
                        
                                            outline-3 outline-dark-blue 
                                            shadow-[-4px_-4px_8px_var(--color-dark-blue),4px_4px_8px_var(--color-dark-blue)]
                                            transition-all ease-in-out

                                            hover:shadow-[0_0_20px_var(--color-medium-blue),-4px_-4px_8px_var(--color-dark-blue),4px_4px_8px_var(--color-dark-blue)]

                                            active:shadow-[inset_2px_2px_8px_var(--color-dark-blue)],inset_-2px_-2px_8px_var(--color-dark-blue)]
                                            active:translate-y-[2px]`}
                                        >
                                            {txt}
                                        </Button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function Topics() {
    return (
        <div className="w-full mt-[32px] flex flex-wrap place-content-center">
            <h1 className="w-full text-[65px] text-white font-bold text-center mb-[50px]">
                Math Paths
            </h1>

            <div className="w-full">
                <PathComponent />
            </div>
        </div>
    )
}
