import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
        constructor(props) {
            super(props)
            this.typing = this.typing.bind(this)
            this.enter = this.enter.bind(this)
            this.markDone = this.markDone.bind(this)
            this.click = this.click.bind(this)
            this.state = {  //this sets the state of our component.
                newTodo: '',
                todos: []
            }
        }
        componentDidMount() {
            var todos = JSON.parse(localStorage.getItem('todos'))
            if (todos) {
                this.setState({
                    todos: todos
                })
            }
        }
        typing(e) {
            this.setState({   //setting the state of newTodo
                newTodo: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            })
        }
        enter(e){
            if(e.key === 'Enter'){
                this.click(e)
            }
        }
        click(e){
            let updatedTodos = this.state.todos
            updatedTodos.push({
                text: e.target.value,
                done: false
            })
            this.setState({
                newTodo: '',
                todos: updatedTodos
            })
            localStorage.setItem('todos', JSON.stringify(updatedTodos))
        }
        markDone(currentTodoIndex) {
            let updatedTodos = this.state.todos
            updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done //this lets you toggle back and forth between true and false value. We set the done value as false up above. We are using index to target done. This is the same thing as writing it in an if statement written below.
            // if (updatedTodos[currentTodoIndex].done === false){
            //     updatedTodos[currentTodoIndex].done = true
            // }
            // else {
            //     updatedTodos[currentTodoIndex].done = false
            // }
            this.setState({
                todos: updatedTodos
            })
        }
        render(){
            var TodoItems = this.state.todos.map((item, i) => {  //matching from our array from up above
                return <TodoItem data={item} key={i} markDone={()=>this.markDone(i)} />
            })
            return <div>
                    <div className="container">
                        <div className="row inputDiv">
                            <div className="col-sm-12 text-center">
                                <h1>Manny's To-do App</h1>
                            </div>
                        <div className="input-group">
                            <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter}/>
                            <span className="input-group-btn">
                                <button id="addBtn" className="btn btn-info" type="button" value={this.state.newTodo} onChange={this.typing}    onClick={this.click}><i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="container list-container">
                        <div className="row">
                            <div className="col-sm-12">
                            <ul className="list-group">{TodoItems}</ul>
                            </div>
                        </div>
                    </div>
                   </div>
        }
    }
export default Todos
