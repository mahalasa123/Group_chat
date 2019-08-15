import React, { Component } from 'react';
import './App.css';
import { getChatLog } from './service';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      data: null,
    }
  }
 
  componentDidMount() { 
    var that = this;
    getChatLog().then(function(response) {
      that.setState({loading:false, data: response});
    });
  } 

  render() {
    if(this.state.loading) {
      return <div>Loading ....</div>
    }

    if(!this.state.data) {
      return <div>Chat not found ....</div>
    }

    return (
      <div>
        <h1 className="header"> Group chat</h1>
        {
          this.state.data.map((item) => {
            return (
              <div className="chatContainer"  key={item.messageId}>
                <div className="imageContainer"><img src={item.avatar} alt="Avatar" width="60" height="60" /></div>
                <span className="name">{item.fullName}</span>
                <p>{item.message}</p>
                <span className="timeStamp">{item.timestamp}</span>
                <span className="tooltiptext">{item.email}</span>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;

