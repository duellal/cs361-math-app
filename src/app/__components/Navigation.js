import Image from 'next/image'
import logo from '../../../public/images/math-path-logo.jpg'
import Link from 'next/link'
import { Button } from '@mui/material'
import { useContext } from 'react'
import UserContext from '../_context/userContext'

const nav_pages = [
    {
        name: 'home',
        href: '/',
    },
    {
        name: 'practice',
        href: '/topics',
    },
    {
        name: 'help',
        href: '/help',
    },
]

const login_pages = [
    {
        name: 'login',
        href: '/user/login',
    },
    {
        name: 'sign up',
        href: '/user/signup',
    },
]

const user_pages = [
    {
        name: 'profile',
        href: `/user`,
    },
    {
        name: 'log out',
        href: '/',
    },
]

export default function Navigation() {
    const { user, setUser } = useContext(UserContext)

    return (
        <div className="w-full flex items-center justify-between h-[100px] bg-dark-blue">
            <div className="flex w-[300px] h-[60px] ml-[70px]">
                <Link className="w-[230px] h-[60px]" href={'/'}>
                    <Image
                        src={logo}
                        alt="White ectangle with rounded corners. Math Path is in the center. Math is a cyan blue and Path is a deep blue."
                        width={230}
                        height={60}
                    />
                </Link>
            </div>

            <nav className="w-[300px] h-[60px] items-center justify-between flex capitalize text-[20px]">
                {nav_pages.map((page, idx) => {
                    const { name, href } = page
                    return (
                        <Link
                            key={`${idx}-${idx + Math.round(Math.random() * 1000)}-${name}`}
                            href={href}
                            className="mr-[17px] border-b-[3px] border-grey text-white hover:border-light-blue"
                        >
                            {name}
                        </Link>
                    )
                })}
            </nav>

            <nav className="h-[60px] mr-[70px] items-end flex capitalize text-[20px]">
                {user?.['_id']
                    ? user_pages.map((page, idx) => {
                          let { name, href } = page
                          href =
                              name === 'profile'
                                  ? `${href}/${user.username}`
                                  : href

                          return (
                              <Link
                                  key={`${idx}-${Math.round(Math.random() * 9000)}-user`}
                                  href={href}
                                  onClick={() => {
                                      if (name.includes('out')) {
                                          setUser(null)
                                      }
                                  }}
                              >
                                  <Button
                                      disableRipple
                                      disableTouchRipple
                                      disableFocusRipple
                                      variant="contained"
                                      className="m-[10px] border-white border-3 rounded-none bg-dark-blue text-light-blue w-[100px] font-extrabold
                        
                                            outline-3 outline-dark-blue 
                                            shadow-[-4px_-4px_8px_var(--color-dark-blue),4px_4px_8px_var(--color-dark-blue)]

                                            active:shadow-[inset_2px_2px_8px_var(--color-dark-blue)],inset_-2px_-2px_8px_var(--color-dark-blue)]
                                            active:translate-y-[1px]"
                                  >
                                      {name}
                                  </Button>
                              </Link>
                          )
                      })
                    : login_pages.map((page, idx) => {
                          const { name, href } = page
                          return (
                              <Link
                                  key={`${idx}-${Math.round(Math.random() * 3000)}-${name}`}
                                  href={href}
                              >
                                  <Button
                                      disableRipple
                                      disableTouchRipple
                                      disableFocusRipple
                                      variant="contained"
                                      className="m-[10px] border-white border-3 rounded-none bg-dark-blue text-light-blue w-[100px] font-extrabold
                        
                                            outline-3 outline-dark-blue 
                                            shadow-[-4px_-4px_8px_var(--color-dark-blue),4px_4px_8px_var(--color-dark-blue)]

                                            active:shadow-[inset_2px_2px_8px_var(--color-dark-blue)],inset_-2px_-2px_8px_var(--color-dark-blue)]
                                            active:translate-y-[1px]"
                                  >
                                      {name}
                                  </Button>
                              </Link>
                          )
                      })}
            </nav>
        </div>
    )
}
