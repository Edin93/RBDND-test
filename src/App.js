import React, { Component } from 'react';
import StoryMap from './StoryMap';
import './App.css';
import initialData from "./initialData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initialData,
    };
  };

  render() {
    return (
      <div>
        <StoryMap data={this.state.data} />
      </div>
    );
  }
}

export default App;
