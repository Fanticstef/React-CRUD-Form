import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Edit() {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const navigate = useNavigate()


    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
    }, [])

    const handelUpdate = (e) => {
        e.preventDefault()
        // check
        // console.log('done');

        axios.put(`https://6687f63c0bc7155dc019eca0.mockapi.io/Rupa/${id}`, {
            name,
            age
        }).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl font-semibold mt-4">Update Data</div>
                    <div className="max-w-sm w-full mt-4">
                        <form onSubmit={handelUpdate}
                        >
                            <Input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.valur)}
                            />
                            <Input
                                type="number"
                                placeholder="Age"
                                value={age}
                                onChange={(e) => setAge(e.target.valur)}
                            />
                            <Button
                                type="submit"
                                variant="primary"
                                className="w-full"
                            >Update</Button>
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
