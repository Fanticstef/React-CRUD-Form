import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function InputForm({getData}) {
    const [name,setName] = useState('')
    const [city, setCity] = useState('')
    const [language, setLanguage] = useState('')

    const saveData = () => {
        const data = {name, city, language}
        setName("")
        setCity("")
        setLanguage("")

        fetch('http://localhost:5001/User', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        getData()
    }

    return (
        <>
            <div className="flex flex-col mt-4">
                <Input 
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <Input 
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}/>
                <Input 
                    placeholder="Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}/>
                <Button
                    onClick={saveData}>Save Data</Button>
            </div>
        </>
    )
}
