import React, { Component } from "react";

class CourseDetails extends Component {
  render() {
    const id = window.location.pathname.split("/").pop();
    const course = this.props.courses.find((c) => c.id == id);

    if (!course) {
      return <h2>Course Not Found</h2>;
    }

    return (
      <div>
        <h2>{course.name}</h2>
        <p>Duration: {course.duration}</p>
        <p>Price: ₹{course.price}</p>
      </div>
    );
  }
}

export default CourseDetails;
