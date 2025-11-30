'use client'

import ContentDiv from '@/app/__components/contentDiv'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { redirect } from 'next/navigation'
import UserContext from '../userContext'
import create_user from '../_getDataFuncs/createUser'

const formFieldset = 'w-[70%] mb-5 border-3 border-medium-blue rounded-xl p-3'
const formLegend = 'text-dark-blue p-2 font-bold'
const formInput = 'w-full text-dark-blue text-center'
const formLinksDiv =
    'w-full flex flex-wrap justify-between text-sm text-gray-500 mb-6'
const formLinkBtn = 'w-full text-center font-bold hover:underline'
const formBtn =
    'w-[70%] bg-dark-blue text-[18px] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'

export default function SignUp() {
    const { user, setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const loginH1 = (
        <h1
            key={'h1-signup'}
            className="w-full text-[20px] text-dark-blue mb-[20px]"
        >
            Sign Up
        </h1>
    )

    const firstNameDiv = (
        <fieldset key={'fieldset-first-name'} className={formFieldset}>
            <legend className={formLegend}>First Name</legend>

            <input
                type="text"
                name="first_name"
                value={first_name}
                required
                placeholder="Type Your First Name"
                className={formInput}
                onChange={(evt) => {
                    evt.preventDefault()
                    setFirstName(evt.target.value)
                }}
            />
        </fieldset>
    )

    const lastNameDiv = (
        <fieldset key={'fieldset-last-name'} className={formFieldset}>
            <legend className={formLegend}>Last Name</legend>

            <input
                type="text"
                name="last_name"
                value={last_name}
                required
                placeholder="Type Your Last Name"
                className={formInput}
                onChange={(evt) => {
                    evt.preventDefault()
                    setLastName(evt.target.value)
                }}
            />
        </fieldset>
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

    const usernameDiv = (
        <fieldset key={'fieldset-username'} className={formFieldset}>
            <legend className={formLegend}>Username</legend>

            <input
                type="text"
                name="username"
                value={username}
                required
                placeholder="Type Your Username"
                className={formInput}
                onChange={(evt) => {
                    evt.preventDefault()
                    setUsername(evt.target.value)
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
                required
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
            <Link className={formLinkBtn} href={'/user/login'}>
                Login with Email
            </Link>
        </div>
    )

    const submitBtn = (
        <button key={'submit-btn'} className={formBtn} type="submit">
            Create Account
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

                    let user = await create_user({
                        email,
                        first_name,
                        last_name,
                        username,
                        password,
                    })

                    if (user.status !== 201) {
                        let errorType = Object.keys(
                            user.response.data.error.keyValue,
                        )[0]
                        return window.alert(
                            `User with that ${errorType} has already been made. Please try again with another ${errorType}.`,
                        )
                    }

                    setUser(user.data.user)
                    return redirect('/topics')
                }}
            >
                <ContentDiv
                    div_key={`login-div`}
                    div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-medium-blue bg-white w-[460px] rounded-[60px]`}
                    order={[
                        loginH1,
                        firstNameDiv,
                        lastNameDiv,
                        emailDiv,
                        usernameDiv,
                        passwordDiv,
                        linksDiv,
                        submitBtn,
                    ]}
                />
            </form>
        </div>
    )
}
