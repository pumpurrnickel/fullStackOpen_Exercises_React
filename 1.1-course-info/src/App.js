const Header = ({ course }) => {
  // console.log("course: ", course);
  return <h1> {course} </h1>;
};

const Part = ({name, exercises}) => {
   return (
   <p>
   {name}: Total amount of exercises: {exercises}.
 </p>)
 }

const Content = ({parts}) => {

  console.log('name', parts[0].name)

  return (
    <>
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercises={parts[1].exercises} />
    <Part name={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};

const Total = ({parts}) => {
  return (
    <p> There are a total of {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises in this course.</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using Props to Pass Data',
        exercises: 7
      },
      {
        name: 'State of a Component',
        exercises: 14
      }
    ]
  }

  console.log("course: ", course);

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  );
};

export default App;
