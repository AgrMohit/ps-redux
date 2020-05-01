import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as courseActions from "../../redux/actions/courseActions";

function CoursesPage(props) {
  const [course, setCourse] = useState({ title: "" });

  function handleChange(event) {
    setCourse({ title: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.createCourse(course);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={handleChange} value={course.title} />
        <input type="submit" value="Save" />
      </form>
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course)),
  };
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
