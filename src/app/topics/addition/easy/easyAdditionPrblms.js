import axios from 'axios'

const easy_problems = async (props) => {
    const { limit, offset } = props
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
            },
        })

        return res.data
    } catch {
        console.log('easy_problems ERR:', err)
        throw err
    }
}

export default easy_problems
