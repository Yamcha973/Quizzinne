import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 10
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
    componentWillMount() {
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