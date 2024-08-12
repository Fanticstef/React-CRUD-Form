import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Edit() {
    let url = 'https://6687f63c0bc7155dc019eca0.mockapi.io/users'

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setNumber(localStorage.getItem('number'))
        setEmail(localStorage.getItem('email'))
    }, [])

    const handlerOnSubmit = (e) => {
        e.preventDefault()
        axios.put(`${url}/${id}`, {
            name,
            number,
            email
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="text-center mt-6 text-4xl">Update Data</div>
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-sm w-full mt-12">
                        <form onSubmit={handlerOnSubmit}>
                            <Input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <Input
                                type="number"
                                placeholder="Mobile Number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)} />
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <Button
                                type="submit"
                                className="w-full">Update</Button>
                        </form>
                        <Link to={'/'}>
                            <Button className="mt-2 w-full">Reade Data</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
