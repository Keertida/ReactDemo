import React from "react";
import PropTypes from "prop-types"
function Header(props) {
  return(
    <div className = "Header">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" :"No"}</p>
    </div>
  );
}
Header.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

Header.defaultProps = {
  name : "Guest",
  age : 0,
  isStudent: false
}

export default Header;