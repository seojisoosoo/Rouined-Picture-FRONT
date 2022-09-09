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
        "https://rouined-photo-exhibition.herokuapp.com/visitor",
        {
          visitor: visitorRef.current.value,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log("d" + res.data.ok);
        if (res.data.ok) {
          // alert("추가완료!");
          console.log("dd");
          console.log(res);
          navigate("/visitor");
          // window.location.reload();
          // navigate(`/visitor/${res.data.data.id}`);
          //   navigate("/visitor");
        }
      });

    // .then((res) => {
    //   console.log("hello");
    // navigate("/visitor");

    // console.log(res);
    // if (res.data.ok) {
    //   alert("추가완료!");
    //   console.log(res.data.ok);

    //   navigate("/visitor");
    // }
    // });
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
          <Link to="/visitor">
            <Button onClick={() => onSubmit()}>submit</Button>
            {/* </Link> */}
            {/* <Link to="/visitor"> */}
            <Button>cancel</Button>
          </Link>
        </Dom>
      </form>
    </BodyDom>
  );
};

export default VisitorsCreate;
