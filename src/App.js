import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";
import { useState } from "react";

function App() {
  const [courses, setCourses] = useState([
    {
      id: "rand32434",
      title: "HTML for beginner",
      duration: "4",
      author: "Ganesh",
      price: 350,
    },
    {
      id: "rand32434",
      title: "HTML for beginner",
      duration: "4",
      author: "Ganesh",
      price: 350,
    },
  ]);

  function handleSaveCourse(newCourse){
    setCourses([...courses,newCourse])
  }
  return (
    <>
      <Header />
      <AddCourse onSave={handleSaveCourse} />
      <CourseList courses={courses} />
    </>
  );
}

export default App;
