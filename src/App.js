const Header = (props) => {
  return <h1 className="course">{props.header}</h1>
}
const Part = (props) => {
  return (
    <p className="text">
      {props.names} {props.exercise}
    </p>
  )
}
const Content = (props) => {
  return <Part names={props.text} exercise={props.exercise} />
}
const Total = (props) => {
  return <p className="result text">Number of exercise {props.total}</p>
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
  return (
    <div className="container">
      <Header header={course} />
      <Content text={part1} exercise={exercise1} />
      <Content text={part2} exercise={exercise2} />
      <Content text={part3} exercise={exercise3} />

      <Total total={exercise1 + exercise2 + exercise3} />
    </div>
  )
}
export default App
