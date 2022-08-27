import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import VisitorsRead from "./VisitorsRead";

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2vh;
`;
const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledCard = styled.div`
  width: 60vh;
`;

const Visitors = () => {
  return (
    <>
      <Dom>
        <a href="https://www.notion.so/14144506f3c14ec4a45a1cfe256530d2">
          <img src="img/notion.png" alt="#" />
          <p>
            <strong>behind logs</strong>
          </p>
        </a>
        <br />
        Special thanks to
        <br />
        <br />
        <Link to="/visitorsCreate">
          <button>방명록 작성하기</button>
        </Link>
        <br />
        <br />
      </Dom>
      <StyledApp>
        <StyledCard>
          <VisitorsRead />
        </StyledCard>
      </StyledApp>
    </>
  );
};

export default Visitors;
