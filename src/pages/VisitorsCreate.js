import React, { useRef } from "react";
import "../App.css";

const VisitorsCreate = () => {
  const visitorRef = useRef(null);

  return (
    <form>
      <input ref={visitorRef} />
      <button></button>
    </form>
  );
};

export default VisitorsCreate;
