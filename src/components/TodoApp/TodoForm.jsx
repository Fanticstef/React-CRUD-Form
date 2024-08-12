import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function TodoForm({ getData }) {
    const [inputData, setInputData] = useState('')
    const handlerInputField = (e) => {
        if(e.keyCode == 13){
            getData(inputData)
            setInputData("")
        }
    }
    return (
        <>
            <Input
                placeholder="Write Text Here.."
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                onKeyDown={handlerInputField} />
            <Button
                onClick={() => {
                    getData(inputData)
                    setInputData("")
                }}>Add Todo</Button>
        </>
    )
}
