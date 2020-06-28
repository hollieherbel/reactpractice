import React, { Component } from 'react'

export default class ChangeNumberValue extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0
        }
        
        this.numberIncrementor = this.numberIncrementor.bind(this)
        this.numberDecrementor = this.numberDecrementor.bind(this)
    }


    numberIncrementor() {
        this.setState({
            number: this.state.number + 1
        })
    }

    numberDecrementor() {
        this.setState({
            number: this.state.number - 1
        })
    }
    
    
    render() {
        return (
            <div className='number-change'>
                <button onClick={this.numberIncrementor}>+</button>
                <h3>{this.state.number}</h3>
                <button onClick={this.numberDecrementor}>-</button>
            </div>
        )
    }
}