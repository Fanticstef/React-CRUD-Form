import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function StorFields({getDate}) {
    // getDate data from input Fields
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    
    const saveData = () => {
        // console.log(name, age);
        
        // create variable to store data 
        let data = {name, age}
        // console.log(data);
        setName("")
        setAge("")

        fetch('http://localhost:5001/Rupa', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        getDate()
    }

    return (
        <>
            <div className="">
                <Input
                    type={'text'}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <Input
                    type={'number'}
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)} />
                <Button
                    onClick={saveData}
                    className="w-full mb-3">Submit</Button>
            </div>
        </>
    )
}
