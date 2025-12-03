import axios from 'axios'

const stop_timer = async (timer_id) => {
    try {
        let res = await axios.post(
            `${process.env.NEXT_PUBLIC_TIMER_URL}/stop`,
            timer_id,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        console.log('STOP TIMER\n', res.data)
        return res
    } catch (err) {
        console.log('Stop Timer - ERR:\n', err)
        return err
    }
}

export default stop_timer
