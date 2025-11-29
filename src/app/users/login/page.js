import ContentDiv from '@/app/__components/contentDiv'
import Link from 'next/link'

let formFieldset = 'w-[70%] mb-5 border-3 border-medium-blue rounded-xl p-3'
let formLegend = 'text-dark-blue p-2 font-bold'
let formInput = 'w-full text-dark-blue text-center'
let formLinksDiv = 'flex flex-wrap justify-between text-sm text-gray-500 mb-6'
let formLinkBtn = 'w-full text-center font-bold hover:underline'
let formBtn =
    'w-[70%] bg-dark-blue text-[18px] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'

export default function Login() {
    const loginH1 = (
        <h1 className="w-full text-[20px] text-dark-blue mb-[20px]">Login</h1>
    )

    const usernameDiv = (
        <fieldset className={formFieldset}>
            <legend className={formLegend}>Username or Email</legend>

            <input
                type="text"
                name="email"
                required
                placeholder="Type Your Username or Email"
                className={`${formInput}`}
            />
        </fieldset>
    )

    const passwordDiv = (
        <fieldset className={formFieldset}>
            <legend className={formLegend}>Password</legend>
            <input
                type="password"
                placeholder="Type Your Password Here"
                className={`${formInput}`}
            />
        </fieldset>
    )

    const linksDiv = (
        <div className={formLinksDiv}>
            {/* Add in "Forgot Password" */}
            <Link className={formLinkBtn} href={'/users/signup'}>
                Create an account
            </Link>
        </div>
    )

    const submitBtn = <button className={formBtn}>Sign in</button>

    return (
        <div
            className={`w-full h-[50vh] absolute top-[100px] place-items-center place-content-center`}
        >
            <form className="w-full flex justify-center">
                <ContentDiv
                    div_key={`login-div`}
                    div_tw={`absolute top-[20%] flex flex-wrap border-[12px] border-medium-blue bg-white w-[460px] rounded-[60px]`}
                    order={[
                        loginH1,
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
