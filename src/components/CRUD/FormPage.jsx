import React, { useEffect, useState } from 'react'
import StorFields from './StorFields'
import Table from './Table'
// import { Button } from '../ui/button'

export default function FormPage() {
    const [result, setResult] = useState([])

    const getDate = async () => {
        let data = await fetch('http://localhost:5001/Rupa')
        let response = await data.json()
        setResult(response)
    }

    const deleteData = async (id) => {
        await fetch(`http://localhost:5001/Rupa/${id}`, {
            method: 'DELETE',
        })
        getDate()
    }

    useEffect(() => {
        getDate()
    }, [])
    return (
        <>
            <div className="row">
                <div className="flex flex-col items-center justify-center">
                    <div className="col max-w-sm w-full text-center">
                        <h2 className="text-5xl font-semibold text-[#FFBF00] leading-normal">Welcome to My</h2>
                        <h4 className='text-3xl text-white font-bold p-1 rounded-md bg-[#D0D3D4]'>
                            CRUD
                            <span className='pl-2 text-2xl text-black'>App</span>
                        </h4>
                    </div>
                    <div className="col max-w-md w-full mt-24">
                        <StorFields getDate={getDate} />
                        {/* <Button
                            variant="primary"
                            className="w-full">Home</Button> */}
                    </div>
                    <div className="mt-16 max-w-2xl w-full">
                        <Table result={result} deleteData={deleteData} />
                        {/* <Button
                            variant="create"
                            className="text-lg w-full mt-4">Create</Button> */}
                    </div>
                </div>
            </div>
        </>
    )
}
