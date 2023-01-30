import React, { useRef, useState } from "react";

const AddCourse = ({ onSave }) => {
  // const [newCourse, setNewCourse] = useState({
  //   id: "",
  //   title: "",
  //   duration: 0,
  //   author: "",
  //   price: 0,
  // });

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
    onSave(newCourse);
    title.current.value = "";
    duration.current.value = "";
    author.current.value = "";
    price.current.value = "";
  }

  return (
    <div className="container">
      <h5>Add Course</h5>
      <form onSubmit={handleSave}>
        <div className="row p-4">
          <div className="col">
            <input
              ref={title}
              type="text"
              className="form-control"
              placeholder="Course Title"
              aria-label="Course Title"
              required
            />
          </div>
          <div className="col">
            <input
              ref={duration}
              type="number"
              className="form-control"
              placeholder="Course Duration"
              aria-label="Last name"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              ref={author}
              className="form-control"
              placeholder="Course Author"
              aria-label="Course Author"
              required
            />
          </div>
          <div className="col">
            <input
              type="number"
              ref={price}
              className="form-control"
              placeholder="Course price"
              aria-label="Course price"
              required
            />
          </div>
          <div className="col">
            <button className="btn btn-primary">Save Course</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
