import axios from 'axios'

const get_user = async (user) => {
    try {
        let res = await axios.get('http://localhost:9001/user', {
            headers: {
                'Content-Type': 'application/json',
            },
            params: { ...user },
        })

        return res
    } catch (err) {
        console.log('Get User - ERR:', err)
        return err
    }
}

export default get_user
