import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list.js'
import CreateTodo from './components/create-todo.js'

const todos = [
  {
    task:'Make react tutorial',
    isComplete:false
  },
  {
    task:'eat breakfast',
    isComplete:true
  }

]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todos
    }
  }
  render() {
    return (
      <div className="App">
      <h1>Hello World</h1>
        <TodoList todos={this.state.todos}/>
        <CreateTodo/>
      </div>
    );
  }
}

export default App;
