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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]

  return (
    <div className="container">
      <Header header={course} />
      <Content text={parts[0].name} exercise={parts[0].exercises} />
      <Content text={parts[1].name} exercise={parts[1].exercises} />
      <Content text={parts[2].name} exercise={parts[2].exercises} />

      <Total
        total={parts[0].exercises + parts[1].exercises + parts[1].exercises}
      />
    </div>
  )
}
export default App
