import axios from 'axios'

const stop_timer = async (timer_id) => {
    try {
        let res = await axios.post(`${process.env.TIMER_URL}/stop`, timer_id, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res
    } catch (err) {
        console.log('Stop Timer - ERR:\n', err)
        return err
    }
}

export default stop_timer
