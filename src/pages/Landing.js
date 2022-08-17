import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Dom = styled.div`
  display: flex;
  justify-content: center;
`;
const Introduce = styled.div`
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  width: 600px;
  height: 500px;
  border-radius: 5px;
  text-align: center;
  margin: 20px 0px;
`;
const Button = styled.button`
  margin: 0px 7px;
`;

const Landing = () => {
  return (
    <>
      <Dom>
        <Introduce>
          <p>망한 필름 전시회</p>
        </Introduce>
      </Dom>

      <Dom>
        <Link to="/read">
          <Button>watch</Button>
        </Link>
        <Link to="/create">
          <Button>upload</Button>
        </Link>
      </Dom>
    </>
  );
};

export default Landing;
