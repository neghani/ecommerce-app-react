import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";
import { useState, createContext } from "react";
export const AppContext = createContext(null);
function App() {
  const [toggleAddCourse, setToggleAddCourse] = useState(false);

  const [courses, setCourses] = useState([
    {
      id: "rand32434",
      title: "HTML for beginner",
      duration: "4",
      author: "Ganesh",
      price: 350,
    },
    {
      id: "rand3234",
      title: "HTML for beginner",
      duration: "4",
      author: "Ganesh",
      price: 350,
    },
  ]);

  function editCourse(id) {
    console.log(id);
  }
  function deleteCourse() {
    console.log("delete clicked");
  }
  function toggleAddCourseComponent() {
    setToggleAddCourse(!toggleAddCourse);
  }
  function handleSaveCourse(newCourse) {
    setCourses([...courses, newCourse]);
  }
  const valuestoPass = {
    courses,
    setCourses,
    editCourse,
    deleteCourse,
    toggleAddCourseComponent,
    handleSaveCourse,
  };
  return (
    <AppContext.Provider value={valuestoPass}>
      <Header />
      <CourseList />
      {toggleAddCourse ? <AddCourse /> : null}
    </AppContext.Provider>
  );
}

export default App;
