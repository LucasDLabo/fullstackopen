import { useState } from 'react'

// a proper place to define a component
const Statistics = (props) => {
  const { good, neutral, bad } = props
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={good + neutral + bad} />
        <StatisticsLine text="average" value={(good - bad) / (good + neutral + bad)} />
        <StatisticsLine text="positive" value={good / (good + neutral + bad) * 100 + " %"} />
      </tbody>
    </table>
  )
}

const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = (props) => {
  const { text, value } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>

      <h2>Statistics</h2>

      { (good + neutral + bad !== 0) 
        ? <Statistics good={good} neutral={neutral} bad={bad} />
        : <p>No feedback given</p>
      }
    </div>
  )
}

export default App