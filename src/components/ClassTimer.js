import React, { Component } from 'react'

class ClassTimer extends Component {

    interval 
    // itu adalah class properti yang bertuju ke interval timer

    constructor(props) {
        super(props)
    
        this.state = {
             timer: 0
        }
    }


    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        }, 1000)
    }


    componentWillMount() {
        clearInterval(this.interval)
    }
    

    render() {
        return (
            <div>
                class timer - {this.state.timer}    
                <button onClick={() => clearInterval(this.interval)}>clear timer</button>                
            </div>
        )
    }
}

export default ClassTimer