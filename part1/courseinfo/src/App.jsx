const Header = (props) => {
  return(
    <div><h1>{props.course}</h1></div>
  ) 
  };
  
const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].part} exercises={parts[0].exercises} />
      <Part part={parts[1].part} exercises={parts[1].exercises} />
      <Part part={parts[2].part} exercises={parts[2].exercises} />
    </div>
  );
};

const Total =({ parts }) =>{
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>number of exercises {totalExercises}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises:7 },
    {part: 'State of a component', exercises: 14},
  ];


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  );
};

export default App