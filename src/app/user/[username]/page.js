'use client'

import PageUnderConstruction from '@/app/__components/PageConstruction'
import { useContext } from 'react'
import UserContext from '../../_context/userContext'

export default function SignUp() {
    const { user } = useContext(UserContext)
    return <PageUnderConstruction />
}
