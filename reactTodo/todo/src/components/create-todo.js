import React from 'react'

export default class TodosList extends React.Component
{
    render(){
      return(
        <form onSubmit={this.handleCreate.bind(this)}>
          <input type='text' placeholder='What do I need todo?' ref='createInput'/>
          <button>Create</button>
        </form>
      );
    }
    handleCreate(event){
      event.preventDefault();
      console.log(this.props.createTask);
      this.props.createTask(this.refs.createInput.value)
    }

}
