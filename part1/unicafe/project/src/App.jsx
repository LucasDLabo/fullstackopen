import { useState } from 'react'

// a proper place to define a component
const Statistics = (props) => {
  const { good, neutral, bad } = props
  console.log(props)
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + bad + neutral}</p>
      <p>average {(good - bad) / (good + neutral + bad)}</p>
      <p>positive {good / (good + neutral + bad) * 100} %</p>
    </div>
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
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
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