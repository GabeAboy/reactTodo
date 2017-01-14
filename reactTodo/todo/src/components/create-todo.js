import React from 'react'

export default class TodosList extends React.Component
{
    render(){
      return(
        <form>
          <input type='text' placeholder='What do I need todo?'/>
          <button>Create</button>
        </form>
      );
    }
}
