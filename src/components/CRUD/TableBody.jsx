import React from 'react'
import { Button } from '../ui/button'

export default function TableBody({name, age, id, deleteData}) {
    return (
        <>
            <tr className="hover:bg-gray-100 dark:hover:bg-neutral-700">
                <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                >{name}</td>
                <td
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200"
                >{age}</td>
                <td
                    className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                    <Button 
                        variant="update" 
                        size="sm"
                        >Update</Button>
                </td>
                <td
                    className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <Button 
                        variant="delete" 
                        size="sm"
                        onClick={() => deleteData(id)}
                        >Delete</Button>
                </td>
            </tr>
        </>
    )
}
