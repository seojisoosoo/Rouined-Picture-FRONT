import React from "react";
import styled from "styled-components";

const Card = styled.button`
  border: 1px solid transparent;
  border-radius: 25px;
  background-color: #ebe7e3;
  box-shadow: 0px 0px 15px 0px #b8b8b8;
  width: 18vh;
  height: 12vh;
  margin: 1vh;
`;
const Hr = styled.hr`
  width: 10vh;
`;
const H1 = styled.h1`
  margin: -1.5vh;
  font-size: 35pt;
`;
const H3 = styled.h3`
  margin: 0vh 0vh -1vh 0vh;
  font-size: 15pt;
  font-family: Courier New;
`;
const VisitorsRead = () => {
  return (
    <>
      <Card>
        <H1>📷</H1>
        <H3>Soosoo</H3>
        <Hr />
      </Card>
      <Card>
        <H1>📷</H1>
        <H3>Soosoo</H3>
        <Hr />
      </Card>
      <Card>
        <H1>📷</H1>
        <H3>Soosoo</H3>
        <Hr />
      </Card>
      <Card>
        <H1>📷</H1>
        <H3>Soosoo</H3>
        <Hr />
      </Card>
    </>
  );
};

export default VisitorsRead;
