import React, { useEffect, useState } from 'react'
import InputForm from './InputForm'
import MyData from './MyData'

export default function FormData() {
    const [result, setResult] = useState([])

    const getData = async () => {
        const data = await fetch('http://localhost:5001/User')
        const response = await data.json()
        setResult(response)
    }

    const deleteUser = async (id) => {
        const data = await fetch(`http://localhost:5001/User/${id}`, {
            method: 'DELETE'
        })
        const response = await data.json()
        getData()
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-md w-full mb-10">
                    <InputForm getData={getData} />
                </div>
                <MyData
                    result={result}
                    deleteUser={deleteUser} />
            </div>
        </>
    )
}
