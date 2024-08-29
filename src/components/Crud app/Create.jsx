import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Create() {
    let url = `https://6687f63c0bc7155dc019eca0.mockapi.io/Rupa`
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // console.log(name, number, email);
        if (name !== "" && number !== "" && email !== "") {
            axios.post(url, {
                name,
                number,
                email
            }).then(() => {
                // console.log('resolved');
                navigate('/')
            })
        } else {
            alert("Filled the Form!")
        }
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="text-center mt-6 font-semibold text-4xl">CRUD <span className='text-orange-500'>Person Date Page</span> </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="max-w-md w-full mt-12">
                        <form onSubmit={handleOnSubmit}>
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
                                className="w-full"
                                variant="primary">Submit</Button>
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
