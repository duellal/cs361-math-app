import axios from 'axios'

const pause_timer = async (timer_id) => {
    try {
        let res = await axios.post(`${process.env.TIMER_URL}/pause`, timer_id, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res
    } catch (err) {
        console.log('Pause Timer - ERR:\n', err)
        return err
    }
}

export default pause_timer
