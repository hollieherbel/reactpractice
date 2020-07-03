import React, { Component } from 'react'

export default class ChangeColor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "rgb(121, 115, 115)"
        }

        this.colorChanger = this.colorChanger.bind(this)
    }

    colorChanger(event) {
        this.setState({
            color: event.target.value,
        })
    }
    
   
    render() {
        return (
            <div className='change-color'>
                <h3 style={{ color: this.state.color }}>Color Me!</h3>
                <input type="text" onInput={this.colorChanger}></input>
            </div>
        )
    }
}