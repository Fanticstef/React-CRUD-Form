import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function TodoApp() {
    const [todos, setTodos] = useState([])

    const getData = (input) => {
        if(input == ""){
            alert("Please Write Some Text in Input Field!")
        }else{
            setTodos([...todos, input])
        }
    }
    const deleteTodo = (del) => {
        let newTodo = [...todos]
        newTodo.splice(del, 1)
        setTodos([...newTodo])
    }
    return (
        <>
            <div className="border rounded-md p-3">
                <TodoForm getData={getData} />
                <div className="flex flex-col gap-3 mt-3">
                    {
                        todos.map((item, i) => (
                            <Todo
                                key={i}
                                item={item}
                                index={i}
                                deleteTodo={deleteTodo} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
