import Image from "next/image";
import logo from "../../../public/images/math-path-logo.jpg"
import Link from "next/link";

export default function Navigation() {
    return (
        <div
            className="w-full flex items-center justify-between h-[100px] bg-[#0A3D62]"
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

            <div
                className="h-[60px] mr-[70px] items-end flex justify-between"
            >
                <Link 
                    href={'/topics'}
                    className="mr-[17px] border-b-[3px] border-[#809AAE]"
                >
                    Practice
                </Link>
                <Link 
                    href={'/help'}
                    className="border-b-[3px] border-[#809AAE]"
                >
                    Help
                </Link>
            </div>
        </div>
    );
}