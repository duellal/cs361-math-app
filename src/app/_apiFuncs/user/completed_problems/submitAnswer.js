import axios from 'axios'

const submit_answer = async (data) => {
    try {
        let res = await axios.post(
            `${process.env.NEXT_PUBLIC_MATH_DB_API_URL}/user/completed_problem`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        console.log('SUBMIT ANSWER\n', res.data)
        return res
    } catch (err) {
        console.log('User Completed Problem - ERR:', err)
        return err
    }
}

export default submit_answer
