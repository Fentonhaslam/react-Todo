import React from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: ' Apply to a job you are interested in',
        completed: false
      },
      {
        id: 2,
        title: ' Start a new project',
        completed: false
      },
      {
        id: 3,
        title: ' Read an hour of your book everyday this week',
        completed: false
      },
    ]
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed

        }
        return todo;
      })
    });
  }

  // delete todo

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
