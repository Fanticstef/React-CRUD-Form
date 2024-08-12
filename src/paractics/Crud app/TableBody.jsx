import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

export default function TableBody({ id, name, age, deleteData, setLocalStorage }) {
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
                    className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <Link to={'/edit'}>
                        <Button
                            variant="update"
                            size="sm"
                            onClick={() => setLocalStorage(id, name, age)}
                        >Update</Button>
                    </Link>
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
