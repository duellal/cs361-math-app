import axios from 'axios'

const resume_timer = async (timer_id) => {
    try {
        let res = await axios.post(
            `${process.env.TIMER_URL}/resume`,
            timer_id,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        return res
    } catch (err) {
        console.log('Resume Timer - ERR:\n', err)
        return err
    }
}

export default resume_timer
