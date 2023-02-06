import React, { useContext } from "react";
import { AppContext } from "../App";

const Course = ({ course,courseIndex}) => {
  const { editCourse, deleteCourse, toggleAddCourseComponent } =
    useContext(AppContext);
  return (
    <div className="card">
      <img
        src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/cb/3c4030d65011e682d8b14e2f0915fa/shutterstock_226881610.jpg?auto=format%2Ccompress&dpr=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Course Duration <b> {course.duration} Hrs</b>
          </li>
          <li className="list-group-item">
            Course Author <b> {course.author}</b>
          </li>
        </ul>
        <a className="btn btn-primary">Buy for ${course.price}</a>
        <a
          className="btn"
          onClick={() => {
            editCourse(course.id);
            toggleAddCourseComponent();
          }}
        >
          Edit
        </a>
        <a className="btn" onClick={deleteCourse}>
          Delete{" "}
        </a>
      </div>
    </div>
  );
};

export default Course;
