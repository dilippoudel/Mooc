import { useState } from 'react'
const Heading = ({ text }) => <h2>{text}</h2>
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>
// Statics components
const Statistics = (props) => {
  let { good, neutral, bad } = props.countFeedBack
  console.log(good)
  let goodFeedback = good - bad
  let totalFeedback = good + bad + neutral
  let doWeHaveFeedback = good || bad || neutral
  return (
    <div>
      <Heading text="statistics" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      {doWeHaveFeedback ? (
        <div>
          <p>average {goodFeedback / totalFeedback}</p>
          <p>positive {(good / totalFeedback) * 100} %</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}
const App = () => {
  const [countFeedBack, setCountFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const goodFeedbackHandler = () => {
    let newState = {
      ...countFeedBack,
      good: countFeedBack.good + 1,
    }
    setCountFeedback(newState)
  }
  const neutralFeedbackHandler = () => {
    let newState = {
      ...countFeedBack,
      neutral: countFeedBack.neutral + 1,
    }
    setCountFeedback(newState)
  }
  const badFeedbackHandler = () => {
    let newState = {
      ...countFeedBack,
      bad: countFeedBack.bad + 1,
    }
    setCountFeedback(newState)
  }

  return (
    <div className="container">
      <Heading text="give feedback" />
      <Button text="good" onClick={goodFeedbackHandler} />
      <Button text="neutral" onClick={neutralFeedbackHandler} />
      <Button text="bad" onClick={badFeedbackHandler} />
      <Statistics countFeedBack={countFeedBack} />
    </div>
  )
}
export default App
