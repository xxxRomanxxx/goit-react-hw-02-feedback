import React from "react";

class Response extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    goodResponse = () => {
        this.setState({
            good: this.state.good + 1,
        });
    };

    neutralResponse = () => {
        this.setState({
            neutral: this.state.neutral + 1,
        });
    };

    badResponse = () => {
        this.setState(
            {bad: this.state.bad +1},
        )
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return (Math.round(this.state.good * 100 / this.countTotalFeedback())); 
    }

    render() {
        return  (
        <div>
            <p>Please leave feedback</p>
            <button type="button" onClick={this.goodResponse}>Good</button>
            <button type="button" onClick={this.neutralResponse}>Neutral</button>
            <button type="button" onClick={this.badResponse}>Bad</button>
            <p>Statics</p>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            {this.countTotalFeedback() !== 0 && <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>}
        </div>
        ) 
    }
}

export default Response;