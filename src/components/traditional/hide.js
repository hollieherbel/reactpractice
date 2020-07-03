import React, { Component } from 'react'

export default class ToggleText extends Component {
    constructor(props) {
        super(props)

        this.state = {
            someText: "visible",
        }
        
        this.hideText = this.hideText.bind(this)
    }

    hideText(hiddenText) {
        this.setState({
            someText: hiddenText
        })
    }

    

    render() {
        return (
            <div className='hide-text'>
                <h3 style={{visibility: this.state.someText}}>Hide Me!</h3>
                <button onClick={() => this.hideText("hidden")}>Hide</button>
            </div>
        )
    }
}