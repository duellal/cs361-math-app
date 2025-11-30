import axios from 'axios'

const submit_answer = async (data) => {
    console.log('Submit Answer DATA:', data)
    try {
        let res = await axios.post(
            'http://localhost:8001/api/user/completed_problem',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        return res
    } catch (err) {
        console.log('User Completed Problem - ERR:', err)
        return err
    }
}

export default submit_answer
