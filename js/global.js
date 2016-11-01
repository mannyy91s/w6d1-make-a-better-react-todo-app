import React from 'react'
import ReactDOM from 'react-dom'
import Todos from '../components/Todos'

// Your code goes here
//variables
var inputText = document.querySelector('#inputNote')
var inputBtn = document.querySelector('#addBtn')
var inputValue
inputText.addEventListener('keypress', enter)
inputBtn.addEventListener('click', addToDo)

//array
var todos = []

//functions
function enter(event) {
    if ( event.key === 'Enter'){
        addToDo()
    }
}
function addToDo() {
    var inputValue = document.querySelector('#inputNote').value
    if(inputValue !== ''){
        todos.push(inputValue)
        converTodo()
        console.log(todos)
        renderView(todos)
        document.querySelector('#inputNote').value = ''
    }
}

function converTodo() {
    var str =  JSON.stringify(todos)
    localStorage.setItem('todos', str)
}

function getTodo() {
    var str = localStorage.getItem('todos')
    todos = JSON.parse(str)
    if(!todos){
        todos = []
    }
}
getTodo()
//react window render
window.renderView = (data) => {
    ReactDOM.render(
        <Todos data={data} />,
        document.getElementById('inputResults')
    )
}
//added this to clear the local storage.
// localStorage.clear()
