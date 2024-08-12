import React from 'react'

export default function Todo({item, deleteTodo, index}) {
    return (
        <>
            <div className="border rounded-md p-2">
                <div className="flex items-center justify-between">
                    <p>{item}</p>
                    <div 
                        className="cursor-pointer"
                        onClick={() => deleteTodo(index)}>&#10060;</div>
                </div>
            </div>
        </>
    )
}
