import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return(
    <div>
      404 Not Found<br/>
      <Link to="/">Home From Link</Link><br/>
      {/* <a href="/">Home from A</a> */}
    </div>
  );
}


export default NotFound;