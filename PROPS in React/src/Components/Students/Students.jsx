/* eslint-disable react/prop-types */

import propTypes from "prop-types";

export default function Students(props) {
  return (
    <div className="students">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Students.prototype = {
  name: propTypes.string,
  age: propTypes.number,
  isStudent: propTypes.bool,
};

Students.defaultProps = {
  name: "guest",
  age: 0,
  isStudent: true,
};
