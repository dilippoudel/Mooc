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
  return (
    <div className="content">
      <Part names={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part names={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part names={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
}
const Total = (props) => {
  return (
    <p className="result text">
      Number of exercise{' '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ],
  }

  return (
    <div className="container">
      <Header header={course.name} />
      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}
export default App
