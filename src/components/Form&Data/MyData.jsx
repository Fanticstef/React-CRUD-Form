import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { MdDelete } from "react-icons/md";

export default function MyData({result, deleteUser}) {
    // const [result, setResult] = useState([])

    // const getData = async () => {
    //     const data = await fetch('http://localhost:5001/User')
    //     const response = await data.json()
    //     setResult(response)
    // }

    // useEffect(() => {
    //     getData()
    // }, [])
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">S. No.</TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">City</TableHead>
                        <TableHead className="text-center">Language</TableHead>
                        <TableHead className="text-center">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        result.map((ele, i) => (
                            <TableRow key={i}>
                                <TableCell className="font-medium">{i+1}</TableCell>
                                <TableCell className="text-center">{ele.name}</TableCell>
                                <TableCell className="text-center">{ele.city}</TableCell>
                                <TableCell className="text-center">{ele.language}</TableCell>
                                <TableCell className="flex items-center justify-center">
                                    <MdDelete 
                                        className='text-3xl cursor-pointer text-red-700'
                                        onClick={() => deleteUser(ele.id)} />
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </>
    )
}
