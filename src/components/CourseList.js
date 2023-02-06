import React, { useContext } from "react";

import Course from "./Course";
import "./components.css";
import { AppContext } from "../App";

const CourseList = () => {
  const { courses, toggleAddCourseComponent } = useContext(AppContext);
  return (
    <div className="container">
      <div className="row">
        {courses.map((course, index) => {
          return (
            <div key={index} className="col col-lg-4 col-md-4  col-sm-12">
              <Course key={index} course={course} />
            </div>
          );
        })}
        <div className="make-center  col col-lg-4 col-md-4  col-sm-12">
          <div className="make-center circle">
            <button
              onClick={toggleAddCourseComponent}
              className="plus-icon btn btn-lg "
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
