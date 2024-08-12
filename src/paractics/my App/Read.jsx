import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Read() {
    let url = 'https://6687f63c0bc7155dc019eca0.mockapi.io/users'
    const [apiData, setApiData] = useState([])

    const getApiData = () => {
        axios.get(url)
            .then((response) => {
                setApiData(response.data)
            }).catch((error) => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
        // console.log(id);
        axios.delete(`${url}/${id}`)
            .then(() => {
                getApiData()
            }).catch((error) => {
                console.log(error);
            })
    }

    const setLocalStorage = (id, name, number, email) => {
        // console.log(id, name, number, email);
        localStorage.setItem('id', id)
        localStorage.setItem('name', name)
        localStorage.setItem('number', number)
        localStorage.setItem('email', email)
    }

    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <div className="max-w-3xl w-full mt-5">
                        <div className="create mb-3">
                            <Link to={'/create'}>
                                <Button>Create New Data</Button>
                            </Link>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            S.No.
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Edit
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiData.map((ele, i) => (
                                            <tr key={i}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {i + 1}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {ele.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {ele.number}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {ele.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link to={'/edit'}>
                                                        <Button 
                                                            onClick={() => setLocalStorage(ele.id, ele.name, ele.number, ele.email)}>Update</Button>
                                                    </Link>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Button
                                                        onClick={() => deleteData(ele.id)}>Delete</Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
