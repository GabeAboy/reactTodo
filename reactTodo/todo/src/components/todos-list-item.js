import React from 'react'
export default class TodosListItem extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isEditing:false
    }
  }

  renderActionSection(){
    if(this.state.isEditing){
      return(
        <td>
          <button onClick={this.onEditClick.bind(this)}>Save</button>
          <button onClick={this.cancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

      return(
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
        </td>
      )


  }
  renderTaskSection(){
 const {task,isComplete}=this.props;
 const taskStyle={
   color: isComplete ? 'green' : 'red',
   cursor:'pointer'
 }
    return(
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this,task)}
      >

      {task}</td>
    )

  }
  render(){

    return(
        <tr>

            {this.renderTaskSection()}
            {this.renderActionSection()}

        </tr>

    );
  }
  onEditClick(){
    this.setState({isEditing:true})
  }
  cancelClick(){
    this.setState({isEditing:false})
  }
}
