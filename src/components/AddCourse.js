import React, { useRef, useContext } from "react";
import { AppContext } from "../App";

import "./components.css";
const AddCourse = () => {
  const { handleSaveCourse } = useContext(AppContext);

  const title = useRef();
  const duration = useRef();
  const author = useRef();
  const price = useRef();

  function handleSave(event) {
    event.preventDefault();
    const newCourse = {
      id: "SKIB" + Math.round(Math.random() * 9999),
      title: title.current.value,
      duration: duration.current.value,
      author: author.current.value,
      price: price.current.value,
    };
    handleSaveCourse(newCourse);
    title.current.value = "";
    duration.current.value = "";
    author.current.value = "";
    price.current.value = "";
  }

  return (
    <div className="sticky-container">
      <div className="container">
        <h5>Add Course</h5>
        <form onSubmit={handleSave}>
          <div className="row p-4">
            <div className="col col-lg-6 col-md-6">
              <input
                ref={title}
                type="text"
                className="form-control"
                placeholder="Course Title"
                aria-label="Course Title"
                required
              />
            </div>
            <div className="col col-lg-6 col-md-6 ">
              <input
                ref={duration}
                type="number"
                className="form-control"
                placeholder="Course Duration"
                aria-label="Last name"
                required
              />
            </div>
            <div className="col col-lg-6 col-md-6 ">
              <input
                type="text"
                ref={author}
                className="form-control"
                placeholder="Course Author"
                aria-label="Course Author"
                required
              />
            </div>
            <div className="col col-lg-6 col-md-6 ">
              <input
                type="number"
                ref={price}
                className="form-control"
                placeholder="Course price"
                aria-label="Course price"
                required
              />
            </div>
            <div className=" col col-lg-6 col-md-6 ">
              <button className="btn btn-primary">Save Course</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
