import axios from 'axios'

const easy_problems = async (props) => {
    const { limit, offset, user_id } = props
    let difficulty = 'easy'
    let operation = 'add'

    try {
        let res = await axios.get('http://localhost:8001/api/add', {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                limit,
                offset,
                difficulty,
                operation,
                user_id,
            },
        })

        return res.data
    } catch {
        console.log('easy_problems ERR:', err)
        throw err
    }
}

export default easy_problems
