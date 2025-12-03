import axios from 'axios'

const get_user = async (user) => {
    try {
        let res = await axios.get(`${process.env.NEXT_PUBLIC_USER_URL}/user`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: { ...user },
        })

        console.log('GET USER\n', res.data)
        return res
    } catch (err) {
        console.log('Get User - ERR:', err)
        return err
    }
}

export default get_user
