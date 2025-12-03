import axios from 'axios'

const create_user = async (user) => {
    try {
        let res = await axios.post(
            `${process.env.NEXT_PUBLIC_USER_URL}/user`,
            user,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        console.log('CREATE USER\n', res.data)
        return res
    } catch (err) {
        console.log('Create User - ERR:', err)
        return err
    }
}

export default create_user
