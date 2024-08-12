import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Create() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const navigate = useNavigate()

    const handelonSubmit = (e) => {
        e.preventDefault()
        if (name !== "" && age !== "") {
            axios.post('https://6687f63c0bc7155dc019eca0.mockapi.io/Rupa', {
                name,
                age
            }).then(() => {
                navigate('/')
            }).catch(error => {
                console.log(error);
            })
        } else {
            navigate('/')
        }
    }
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl font-semibold mt-4">CRUD App</div>
                    <div className="max-w-sm w-full mt-4">
                        <form
                            onSubmit={handelonSubmit}>
                            <Input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <Input
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)} />
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full">Submit</Button>
                        </form>
                        <Link to={'/'}>
                            <Button
                                variant="create"
                                className="w-full mt-3 font-semibold text-base">Read Page</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
