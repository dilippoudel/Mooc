import { useState } from 'react'
const Heading = ({ text }) => <h2>{text}</h2>
const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>
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
      <Heading text="statistics" />
      <p>good {countFeedBack.good}</p>
      <p>neutral {countFeedBack.neutral}</p>
      <p>bad {countFeedBack.bad}</p>
    </div>
  )
}
export default App
