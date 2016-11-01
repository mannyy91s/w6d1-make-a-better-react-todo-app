import React, { Component } from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
    const TodoItems = props.data.map((item, i) => {
        return <TodoItem data={item} key={i} />
    })
    return  <div>
                {TodoItems}
            </div>

}
export default Todos
