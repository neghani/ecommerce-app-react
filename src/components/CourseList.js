import React from "react";

import Course from "./Course";

const CourseList = ({ courses }) => {
  return (
    <div className="container">
      <div className="row">
        {courses.map((course, index) => {
          return (
            <div key={index} className="col col-lg-4 col-md-6  col-sm-12">
              <Course key={index} course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;
