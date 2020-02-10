import React, { Component } from 'react';
import Chat from "./components/Chat";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
          <Chat/>
      </div>
    );
  }
}

export default App;