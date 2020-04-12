import React, { Component } from 'react';

export class Todoitem extends Component {
    itemStyle = () => {
        return {
            textDecoration: this.props.todo.isCompleted ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div >
                <button className='btn btn-danger d-inline-block' onClick={this.props.deleteTodo.bind(this, id)} >X</button>
                {' '}
                <h3 className='d-inline-block' onClick={this.props.markComplete.bind(this, id)} style={this.itemStyle()}>
                    {/* <input  className='form-check-input' type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> */}
                    {title}
                </h3>
            </div>
        );
    }
}


export default Todoitem;
