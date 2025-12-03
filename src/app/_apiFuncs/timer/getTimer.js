import axios from 'axios'

const get_timer = async (timer_id) => {
    try {
        let res = await axios.get(
            `${process.env.NEXT_PUBLIC_TIMER_URL}/timer?timer_id="${timer_id}"`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )
        console.log('GET TIMER\n', res.data)
        return res
    } catch (err) {
        console.log('Get Timer - ERR:\n', err)
        return err
    }
}

export default get_timer
