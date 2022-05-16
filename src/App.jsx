import { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';
import React, {useState} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="App">
        <Form/>
      </div>
    );
  }
}

export default App;
