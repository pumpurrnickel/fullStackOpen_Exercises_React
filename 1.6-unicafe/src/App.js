import React, { useState } from 'react'

const Header = ({name}) => {
  return <h1> {name} </h1>;
};

const Statistic = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td> {text} {value} % </td></tr>
    )
  }

  return (
    <tr><td> {text} {value} </td></tr>
  )

}

const Statistics = ({feedback}) => {
  const total = feedback.good + feedback.neutral + feedback.bad
  const average = (feedback.good * 1 + feedback.bad * -1) / total
  const positive = feedback.good * (100/total)

  if (total === 0) {
    return (
      <div>
        No feedback given, uwu.
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={feedback.good} />
          <Statistic text="neutral" value={feedback.neutral} />
          <Statistic text="bad" value={feedback.bad} />
          <Statistic text="all" value={total} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {

  const [feedback, setfeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })
  
  const goodFeedback = () =>
    setfeedback({...feedback, good: feedback.good + 1})

  const neutralFeedback = () =>
  setfeedback({...feedback, neutral: feedback.neutral + 1})

  const badFeedback = () =>
  setfeedback({...feedback, bad: feedback.bad + 1})

  return (
    <div>
      <Header name= "Please Give Your Feedback UWU" />
      <Button onClick={goodFeedback} text='good' />
      <Button onClick={neutralFeedback} text='neutral' />
      <Button onClick={badFeedback} text='bad' />
      <Header name= "Statistics" />
      <Statistics feedback={feedback} />
    </div>
  )
}

export default App