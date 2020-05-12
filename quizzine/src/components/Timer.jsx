import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
    }
    render() {
        const {count} = this.state
        return(
            <div>
                <h1>Current Count: {count}</h1>
            </div>
        );
    }
    componentDidMount() {
       const {startCount} = this.props
       this.setState({
          count: startCount
       })
       this.doIntervalChange()
      }
       doIntervalChange = () => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count - 1
            }))
        }, 1000);
    }
    componentWillUmount() {
          clearInterval(this.myInterval);
    };
    componentDidUpdate() {
        if (this.state.count === 0) {
            clearInterval(this.myInterval);
            alert('Le temps est écoulé')
        };
    }
}





export default Timer;