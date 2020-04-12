import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import uuid from 'uuid';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/about';

import './App.css';

class App extends Component {
    state = {
        todos: [
            { id: uuid.v4(), title: 'first todo', isCompleted: false },
            { id: uuid.v4(), title: 'second todo', isCompleted: false },
            { id: uuid.v4(), title: 'third todo', isCompleted: false }
        ]
    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => res.json())
            .then(todos => {
                console.log([...this.state.todos, ...todos]);
                this.setState({ todos: [...this.state.todos, ...todos] });
            });
    }
    markComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.isCompleted = !todo.isCompleted;
                }
                return todo;
            })
        });
    };
    deleteTodo = id => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    };
    addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title,
            isCompleted: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    };
    render() {
        return (
            <Router>
                <div className="App">
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossOrigin="anonymous"
                    ></link>
                    <header className="App-header container pt-3">
                        <div>
                            <Link className="link" to="/">Home</Link> -{' '}
                            <Link className="link" to="/about">About</Link>
                        </div>
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        markComplete={this.markComplete}
                                        deleteTodo={this.deleteTodo}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </header>
                </div>
            </Router>
        );
    }
}

export default App;
