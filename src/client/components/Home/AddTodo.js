import React from 'react'
import { observable } from 'mobx'
import { connect } from 'mobx-connect'

@connect
class AddTodo extends React.Component {

    @observable inputText = ''

    handleSubmit = (e) => {
        e.preventDefault()
        this.context.store.todos.add(this.inputText)
            .then(() => {
                // Clear input text on sucess
                this.inputText = ''
            })
    }

    handleChange = (e) => {
        this.inputText = e.target.value
    }

    render() {
        const { store } = this.context
        const { item } = this.props

        return <form className="header" onSubmit={this.handleSubmit}>
            <p>
                <input type="text"
                       className="new-todo"
                       placeholder="What needs to be done?"
                       value={this.inputText}
                       onChange={this.handleChange}/>
            </p>
        </form>
    }
}

export default AddTodo
