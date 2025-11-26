export default function Footer() {
    return (
        <div className="w-full place-content-center place-items-center h-[45px] bg-dark-blue mt-[70px]">
            <p className="text-white font-[Arial] text-[14px]">
                &copy; {new Date().getFullYear()} Alexandria Duell
            </p>
        </div>
    )
}
