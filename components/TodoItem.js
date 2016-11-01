import React, { Component } from 'react'

const TodoItem = (props) => (
        <div className="row">
        <div className="note col-sm-12 animated flipInX">
            {props.data}
        </div>
    </div>
)

export default TodoItem
