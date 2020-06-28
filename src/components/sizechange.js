import React, { Component } from 'react'

export default class ChangeFontSize extends Component {
    constructor(props) {
        super(props)

        this.state = {
            font: 12
        }

        this.biggerFont = this.biggerFont.bind(this)
        this.smallerFont = this.smallerFont.bind(this)
    }
    
    biggerFont() {
        this.setState({
        font: this.state.font + 10
        })
    }

    smallerFont() {
        this.setState({
        font: this.state.font - 10
        })
    }


    render() {
        return (
            <div className='change-font-size'>
                <h3 style={{ fontSize: this.state.font}}>{this.state.font}px</h3>
                <button onClick={this.biggerFont}>Bigger</button>
                <button onClick={this.smallerFont}>Smaller</button>
            </div>
        )
    }
}