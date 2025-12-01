import axios from 'axios'

const start_timer = async (user_id) => {
    try {
        let res = await axios.post(`${process.env.TIMER_URL}/start`, user_id, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res
    } catch (err) {
        console.log('Start Timer - ERR:\n', err)
        return err
    }
}

export default start_timer
