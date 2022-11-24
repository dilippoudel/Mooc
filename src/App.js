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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }

  return (
    <div className="container">
      <Header header={course} />
      <Content text={part1.name} exercise={part1.exercises} />
      <Content text={part2.name} exercise={part2.exercises} />
      <Content text={part3.name} exercise={part3.exercises} />

      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}
export default App
