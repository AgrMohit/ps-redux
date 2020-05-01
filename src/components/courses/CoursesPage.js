import React, { useState } from "react";

function CoursesPage() {
  const [course, setCourse] = useState({ title: "" });

  function handleChange(event) {
    setCourse({ title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(course.title);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
    </form>
  );
}

export default CoursesPage;
