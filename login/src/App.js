import React, { Component } from 'react';


import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      password:''
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Sign up</h1>
        <form onSubmit={this.postServer.bind(this)}>
          <input type='text' ref='username' placeholder='Username'/>
          <input type='text' ref='password' placeholder='Password'/>
          <button onClick={this.postServer.bind(this)}>Signup</button>

        </form>
        <h1>Login up</h1>
        <form onSubmit={this.checkServer.bind(this)}>
          <input type='text' ref='usercheck' placeholder='Username'/>
          <input type='text' ref='passcheck' placeholder='Password'/>
          <button onClick={this.checkServer.bind(this)}>Login</button>

        </form>
      </div>
    );
  }
  postServer(event){
    event.preventDefault();
    console.log(this.refs.username.value);
    fetch('http://localhost:3000/userLogin',
    {method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          username: this.refs.username.value,
          pass: this.refs.password.value
        })
      }).then((response)=>{console.log('reponse ',response);})
         .catch((error) => { console.error(error); });

  }
  checkServer(event){
    event.preventDefault();
    console.log('check',this.refs.usercheck.value);
    console.log(this.refs.username.value);
    fetch('http://localhost:3000/userLoginCheck', {method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          username: this.refs.usercheck.value,
          pass: this.refs.passcheck.value
        })
      }).then((response)=>{console.log('reponse ',response);})
         .catch((error) => { console.error(error); });

   }
}

export default App;
