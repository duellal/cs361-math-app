import axios from 'axios'

const create_user = async (user) => {
    try {
        let res = await axios.post('http://localhost:9001/user', user, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        return res
    } catch (err) {
        console.log('Create User - ERR:', err)
        return err
    }
}

export default create_user
