import { createContext } from 'react'

const TimerContext = createContext({
    timer_id: null,
    pause: false,
    seconds: 0,
    start: false,
    stop: false,
    timer_text: 'start timer',
    reset_timer: {
        timer_id: null,
        pause: false,
        seconds: 0,
        start: false,
        stop: false,
        timer_text: 'start timer',
    },
})

export default TimerContext
