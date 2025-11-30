'use client'

import ContentDiv from '@/app/__components/contentDiv'
import Link from 'next/link'
import get_user from '../_getDataFuncs/getUser'
import { useContext, useState } from 'react'
import { redirect } from 'next/navigation'
import UserContext from '../userContext'

const formFieldset = 'w-[70%] mb-5 border-3 border-medium-blue rounded-xl p-3'
const formLegend = 'text-dark-blue p-2 font-bold'
const formInput = 'w-full text-dark-blue text-center'
const formLinksDiv = 'flex flex-wrap justify-between text-sm text-gray-500 mb-6'
const formLinkBtn = 'w-full text-center font-bold hover:underline'
const formBtn =
    'w-[70%] bg-dark-blue text-[18px] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'

export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginH1 = (
        <h1
            key={'h1-login'}
            className="w-full text-[20px] text-dark-blue mb-[20px]"
        >
            Login
        </h1>
    )

    const emailDiv = (
        <fieldset key={'fieldset-email'} className={formFieldset}>
            <legend className={formLegend}>Email</legend>

            <input
                type="email"
                name="email"
                value={email}
                required
                placeholder="Type Your Email"
                className={formInput}
                onChange={(evt) => {
                    evt.preventDefault()
                    setEmail(evt.target.value)
                }}
            />
        </fieldset>
    )

    const passwordDiv = (
        <fieldset key={'fieldset-pw'} className={formFieldset}>
            <legend className={formLegend}>Password</legend>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(evt) => {
                    evt.preventDefault()
                    setPassword(evt.target.value)
                }}
                placeholder="Type Your Password Here"
                className={formInput}
            />
        </fieldset>
    )

    const linksDiv = (
        <div key={'links-div'} className={formLinksDiv}>
            {/* Add in "Forgot Password" */}
            <Link className={formLinkBtn} href={'/user/signup'}>
                Create an Account
            </Link>
        </div>
    )

    const submitBtn = (
        <button key={'submit-btn'} className={formBtn} type="submit">
            Sign in
        </button>
    )

    return (
        <div
            className={`w-full h-[50vh] absolute top-[100px] place-items-center place-content-center`}
        >
            <form
                className="w-full flex justify-center"
                onSubmit={async (evt) => {
                    evt.preventDefault()

                    let user = await get_user({ email, password })

                    if (user.status !== 200) {
                        return window.alert(
                            'User was not found. Please try again or sign up.',
                        )
                    }

                    setUser(user.data)
                    return redirect('/topics')
                }}
            >
                <ContentDiv
                    div_key={`login-div`}
                    div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-medium-blue bg-white w-[460px] rounded-[60px]`}
                    order={[
                        loginH1,
                        emailDiv,
                        passwordDiv,
                        linksDiv,
                        submitBtn,
                    ]}
                />
            </form>
        </div>
    )
}
