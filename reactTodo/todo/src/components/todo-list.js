import React from 'react'
import _ from 'lodash'
import TodoListHeader from './todo-list-header.js'
import TodosListItem from './todos-list-item.js'
export default class TodoList extends React.Component{
  renderItems(){
    return _.map(this.props.todos,(todo,index)=>
      <TodosListItem key={index} {...todo}/>);
  }
  render(){
    return(
      <table>
        <TodoListHeader/>
        <tbody>
          {this.renderItems()}
        </tbody>

      </table>

    );
  }
}
