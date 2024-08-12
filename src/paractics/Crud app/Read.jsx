import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TableBody from './TableBody'

export default function Read() {
    const [result, setResult] = useState([])

    const getApiData = () => {
        axios.get('https://6687f63c0bc7155dc019eca0.mockapi.io/Rupa')
            .then((response) => {
                setResult(response.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
        // check the delete function
        // console.log(id);

        axios.delete(`https://6687f63c0bc7155dc019eca0.mockapi.io/Rupa/${id}`)
            .then(() => {
                getApiData()
            }).catch((error) => {
                console.log(error)
            })
    }

    const setLocalStorage = (id, name, age) => {
        // check the value get yes or no
        // console.log(id, name, age);

        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('age',age)
        
    }

    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="max-w-3xl w-full mt-5">
                    <div className="flex flex-col gap-3">
                        <Link
                            className="create"
                            to={'/create'}>
                            <Button>Create New</Button>
                        </Link>
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 border">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >Name</th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >Age</th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >Change</th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                                >Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            {
                                                result.map((ele, i) => (
                                                    <TableBody
                                                        key={i}
                                                        id={ele.id}
                                                        name={ele.name}
                                                        age={ele.age}
                                                        deleteData={deleteData}
                                                        setLocalStorage={setLocalStorage} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
