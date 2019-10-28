import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Apply to a job you are interested in',
        completed: false
      },
      {
        id: 2,
        title: 'Start a new project',
        completed: false
      },
      {
        id: 3,
        title: 'Read an hour of your book everyday this week',
        completed: false
      },
    ]
  }
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
