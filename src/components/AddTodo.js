import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title: ''
    };
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    };
    render() {
        return (
            <form onSubmit={this.onSubmit} className="mb-5 text-center">
                <input
                    name="title"
                    type="text"
                    className='form-control my-2'
                    placeholder="add your todo..."
                    onChange={this.onChange}
                    value={this.state.title}
                />{' '}
                <button className="btn btn-secondary btn-block">Submit</button>
            </form>
        );
    }
}

export default AddTodo;
