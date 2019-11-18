import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 123
        }
    }

    componentWillUpdate(){
        console.log('child will update')
    }
    
    componentDidUpdate(){
        console.log('child did update')
    }

    change() {
        const { text } = this.state
        this.setState({
            text: text + 1
        })
    }

    render() {
        const { text } = this.state
        return (
            <p>
                text: {text} times
        <button onClick={() => this.change()}>add text</button>
            </p>
        )
    }
}

export default Child
