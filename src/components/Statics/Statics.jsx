const Statics = ({onGood, onNeutral, onBad, onCountPositiveFeedbackPercentage, onCountTotalFeedback}) => {
    return (
        <div>
            <p>Statics</p>
            <p>Good: {onGood}</p>
            <p>Neutral: {onNeutral}</p>
            <p>Bad: {onBad}</p>
            <p>Total: {onCountTotalFeedback}</p>
            {onCountTotalFeedback !== 0 && <p>Positive feedback: {onCountPositiveFeedbackPercentage} %</p>}
        </div>
    )
}

export default Statics;