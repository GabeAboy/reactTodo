import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      button: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
    () => this.tick(),
    1000
    );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  componentWillMount(){
    
    renderAction(){
        if(this.state.button){
          return <button onClick={this.switchTimer()}>Start</button>
        }
        return <button onClick={this.switchTimer()}>Stop</button>
    }
  }

  tick() {
      this.setState({
      date: new Date()
    });
  }
  switchTimer(){
    this.setState({button:true})
  }


  render() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      {this.renderAction()}

    </div>
  );
  }
}
