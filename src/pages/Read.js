import React from "react";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/update")}>Update</button>
    </>
  );
};

export default Read;
