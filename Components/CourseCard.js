import React, { Component } from "react";
import { Link } from "react-router-dom";

class CourseCard extends Component {
  render() {
    const { course } = this.props;
    return (
      <div>
        <h3>{course.name}</h3>
        <p>{course.duration}</p>
        <Link to={`/course/${course.id}`}>View Details</Link>
      </div>
    );
  }
}

export default CourseCard;
