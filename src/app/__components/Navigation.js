import Image from "next/image";
import logo from "../../../public/images/math-path-logo.jpg"
import Link from "next/link";

const nav_pages = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'practice',
        href: '/topics'
    },
    {
        name: 'help',
        href: '/help'
    },
]

export default function Navigation() {
    return (
        <div
            className="w-full flex items-center justify-between h-[100px] bg-dark-blue"
        >
            <div className="flex">
                <Link
                    className="ml-[70px]"
                    href={'/'}
                >
                    <Image
                        src={logo}
                        alt="White ectangle with rounded corners. Math Path is in the center. Math is a cyan blue and Path is a deep blue."
                        width={230}
                        height={60}
                    />
                </Link>
            </div>

            <nav
                className="h-[60px] mr-[70px] items-end flex justify-between"
            >
                {
                    nav_pages.map((page, idx) => {
                        const { name, href } = page
                        return (
                            <Link
                                key={`${idx + Math.random()}-${name}`}
                                href={href}
                                className="mr-[17px] border-b-[3px] border-grey text-white hover:border-light-blue capitalize"
                            >
                                {name}
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    );
}