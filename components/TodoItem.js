import React, { Component } from 'react'

const TodoItem = (props) => (
            <li className="list-group-item list-group-item-success animated flipInX" onClick={props.markDone}>
                <input type="checkbox" checked={props.data.done}/>
                <span style={{textDecoration:props.data.done?'line-through':''}}>{props.data.text}</span>
            </li>
)

export default TodoItem
