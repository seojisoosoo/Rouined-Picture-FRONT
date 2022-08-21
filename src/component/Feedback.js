import React from "react";
import styled from "styled-components";

// const Dom = styled.div`
//   display: flex;
//   justify-content: right;
// `;
const Box = styled.div`
  width: 15vh;
  border: 0.5px solid black;
  border-radius: 50px;
  float: right;
  text-align: center;
  font-weight: bold;
  margin: -7vh 3vh 20vh 0vh;
  padding: 1vh;
  position: sticky;
`;
const Feedback = () => {
  return (
    <Box>
      🌊
      <br />
      user
      <br />
      feedback
    </Box>
  );
};

export default Feedback;
