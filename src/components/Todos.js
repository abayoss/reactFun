import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <div key={todo.id}>
                <Todoitem todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
            </div>
        ));
    }
}

Todos.prototypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
