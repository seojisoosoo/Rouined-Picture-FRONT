import React, { useRef } from "react";
import "../App.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Input = styled.input`
  border: 1px solid transparent;
  background-color: transparent;
  margin: 3vh 3vh 0vh 3vh;
  width: 10vh;
`;
const Hr = styled.hr`
  width: 30vh;
`;
const Dom = styled.div`
  display: flex;
  justify-content: center;
  text-algin: center;
`;
const Button = styled.button`
  margin: 5vh 0.5vh;
`;
const BodyDom = styled.div`
  position: relative;
  top: 20vh;
`;
const VisitorsCreate = () => {
  const visitorRef = useRef(null);

  return (
    <BodyDom>
      <Dom>
        <h3>방명록 </h3>
      </Dom>
      <Dom>
        <p>방문자님의 이름을 남겨주세요</p>
      </Dom>

      <form>
        <Dom>
          <Input type="text" ref={visitorRef} />
        </Dom>
        <Hr />
        <Dom>
          <Button>submit</Button>
          <Link to="/visitors">
            <Button>cancel</Button>
          </Link>
        </Dom>
      </form>
    </BodyDom>
  );
};

export default VisitorsCreate;
