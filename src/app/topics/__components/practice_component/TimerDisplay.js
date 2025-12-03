import { useEffect, useRef, useContext } from 'react'
import TimerContext from '@/app/_context/timerContext'
import UserContext from '@/app/_context/userContext'

import get_timer from '@/app/_apiFuncs/timer/getTimer'
import start_timer from '@/app/_apiFuncs/timer/startTimer'
import pause_timer from '@/app/_apiFuncs/timer/pauseTimer'
import resume_timer from '@/app/_apiFuncs/timer/resumeTimer'
import stop_timer from '@/app/_apiFuncs/timer/stopTimer'

export default function TimerDisplay() {
    const pollingRef = useRef(null)

    const { timer, setTimer } = useContext(TimerContext)
    const { user } = useContext(UserContext)

    const timer_id = timer?.timer_id ?? null
    const user_id = user?.['_id'] ?? null

    const safeSetTimer = (data) => {
        if (!data || typeof data !== 'object') {
            return
        }
        if (!data.timer_id) {
            return
        }
        setTimer((prev) => ({
            ...prev,
            timer_id: data.timer_id,
            timer_data: data,
        }))
    }

    // -----------------------------
    // Poll microservice
    // -----------------------------
    const fetchTime = async () => {
        if (!timer_id) {
            return
        }
        try {
            const res = await get_timer(timer_id)
            safeSetTimer(res.data)
            console.log('Res data:', res.data)
            setTimer((prev) => ({
                ...prev,
                seconds: Math.round(res.data.total_time_ms / 1000),
            }))
        } catch (err) {
            console.error('Failed to fetch timer:', err)
        }
    }

    // -----------------------------
    // Start / Resume
    // -----------------------------
    const handleStart = async () => {
        try {
            let res
            if (!timer_id) {
                // Create a new timer
                res = await start_timer({ user_id })
            } else {
                // Resume existing timer
                res = await resume_timer({ timer_id })
            }

            safeSetTimer(res.data)
            fetchTime()

            // Start polling every second
            pollingRef.current = setInterval(() => {
                setTimer((prev) => ({
                    ...prev,
                    seconds: prev.seconds + 1,
                }))
            }, 1000)
        } catch (err) {
            console.error('Start timer failed:', err)
        }
    }

    // -----------------------------
    // Pause timer
    // -----------------------------
    const handlePause = async () => {
        if (!timer_id) {
            return
        }

        clearInterval(pollingRef.current)

        try {
            const res = await pause_timer({ timer_id })
            safeSetTimer(res.data)
        } catch (err) {
            console.error('Pause timer failed:', err)
        }
    }

    // -----------------------------
    // Stop timer
    // -----------------------------
    const handleStop = async () => {
        if (!timer_id) {
            return
        }

        clearInterval(pollingRef.current)

        try {
            const res = await stop_timer({ timer_id })
            safeSetTimer(res.data)
        } catch (err) {
            console.error('Stop timer failed:', err)
        }
    }

    // -----------------------------
    // Controller effect
    // -----------------------------
    useEffect(() => {
        if (timer.start) handleStart()
        if (timer.pause) handlePause()
        if (timer.stop) handleStop()

        return () => clearInterval(pollingRef.current)
    }, [timer.start, timer.stop, timer.pause])

    // -----------------------------
    // Format for display
    // -----------------------------
    const format = (sec) => {
        const m = Math.floor(sec / 60)
            .toString()
            .padStart(2, '0')
        const s = (sec % 60).toString().padStart(2, '0')
        return `${m}:${s}`
    }

    return (
        <div className="flex h-[45px] items-center justify-center p-2 bg-light-blue rounded-md border-3 border-dark-blue text-dark-blue text-lg min-w-[90px]">
            {format(timer?.seconds)}
        </div>
    )
}
