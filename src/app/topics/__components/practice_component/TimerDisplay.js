import { useEffect, useState, useRef } from 'react'

export default function TimerDisplay({ start = true }) {
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (start) {
            // Resume or start timer
            intervalRef.current = setInterval(() => {
                setTime((prev) => prev + 1)
            }, 1000)
        } else {
            // Pause
            clearInterval(intervalRef.current)
        }

        // Cleanup
        return () => clearInterval(intervalRef.current)
    }, [start])

    const format = (sec) => {
        const m = Math.floor(sec / 60)
            .toString()
            .padStart(2, '0')
        const s = (sec % 60).toString().padStart(2, '0')
        return `${m}:${s}`
    }

    return (
        <div className="flex h-[45px] items-center justify-center p-2 bg-light-blue rounded-md border-3 border-dark-blue text-dark-blue text-lg min-w-[90px]">
            {format(time)}
        </div>
    )
}
