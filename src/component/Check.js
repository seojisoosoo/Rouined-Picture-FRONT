import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

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
const Check = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <BodyDom>
      <Dom>
        <h3>작가 본인 인증 </h3>
      </Dom>
      <Dom>
        <p>작품 게재 시 작성했던 비밀번호를 입력해주세요</p>
      </Dom>
      <Dom>
        <Input type="password" />
      </Dom>
      <Hr />
      <Dom>
        <p id="wrong-password">비밀번호가 틀렸습니다</p>
      </Dom>

      <Dom>
        <Button>submit</Button>
        <Button>cancel</Button>
      </Dom>
    </BodyDom>
  );
};

export default Check;
