import axios from 'axios'

const create_user = async (user) => {
    try {
        let res = await axios.post('http://localhost:9000/user', {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res.data
    } catch (err) {
        console.log('Create User - ERR:', err)
        throw err
    }
}

export default create_user
