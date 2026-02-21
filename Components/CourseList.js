import React, { Component } from "react";
import CourseCard from "./CourseCard";

class CourseList extends Component {
  render() {
    return (
      <div>
        <h2>Courses</h2>
        {this.props.courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    );
  }
}

export default CourseList;
