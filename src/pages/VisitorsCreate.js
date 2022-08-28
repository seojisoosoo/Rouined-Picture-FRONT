import React, { useRef } from "react";
import "../App.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();

  const onSubmit = () => {
    axios
      .post(
        "http://127.0.0.1:8000/visitor",
        {
          visitor: visitorRef.current.value,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        if (res.data.ok) {
          // alert("추가완료!");
          // window.location.reload();

          // navigate(`/visitor/${res.data.data.id}`);
          navigate("/visitor");
        }
      });
  };
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
          <Button onClick={onSubmit}>submit</Button>
          <Link to="/visitor">
            <Button>cancel</Button>
          </Link>
        </Dom>
      </form>
    </BodyDom>
  );
};

export default VisitorsCreate;
