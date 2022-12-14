import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import { useRef } from "react";
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
  text-align: center;
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
  const pw = state.detail.password;
  console.log(state);
  const pwConfirmRef = useRef(null);
  const navigate = useNavigate();
  const check = () => {
    console.log(pw);
    console.log(pwConfirmRef.current.value);
    if (pw === pwConfirmRef.current.value) {
      navigate(`/${state.id}/update`, { state });
    } else {
      alert("비밀번호가 틀렸습니다!");
    }
  };
  return (
    <BodyDom>
      <Dom>
        <h3>작가 본인 인증 </h3>
      </Dom>
      <Dom>
        <p>작품 게재 시 작성했던 비밀번호를 입력해주세요</p>
      </Dom>
      <Dom>
        <Input type="password" ref={pwConfirmRef} />
      </Dom>
      <Hr />
      <Dom>
        <p id="wrong-password">비밀번호가 틀렸습니다</p>
      </Dom>

      <Dom>
        <Button onClick={check}>check</Button>
        <Link to="/read">
          <Button>cancel</Button>
        </Link>
      </Dom>
    </BodyDom>
  );
};

export default Check;
