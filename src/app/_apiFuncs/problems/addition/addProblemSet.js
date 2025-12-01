import axios from 'axios'

const generate_problem_set = async (data) => {
    try {
        let res = await axios.post(
            `${process.env.NEXT_PUBLIC_MATH_DB_API_URL}/add/set`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        return res
    } catch (err) {
        console.log('Generate Addition Problem Set - ERR:', err)
        return err
    }
}

export default generate_problem_set
