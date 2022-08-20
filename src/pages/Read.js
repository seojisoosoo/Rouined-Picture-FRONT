import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import datas from "../db/data.json";
import styled from "styled-components";
import "../App.css";

const Img = styled.img`
  width: 80vh;
  margin-top: 2vh;
`;
const Dom = styled.div`
  display: flex;
  justify-content: center;
  flec-direction: column;
`;
const TagDom = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
`;
const Tag = styled.div`
  width: 80vh;
  float: left;
`;
const Label = styled.div`
  width: 40%;
  background-color: white;
  padding: 1vh;
  float: left;
`;
const Button = styled.button`
  width: 10%;
  float: right;
`;
const Like = styled.div`
  margin: -0.7vh 0.5vh 0vh 0vh;
  float: right;
  display: flex;
  justify-contetn: center;
  flex-direction: column;
`;
const Read = () => {
  const [like, setLike] = useState(0);
  const navigate = useNavigate();
  const update = () => {
    navigate("/check");
  };
  return (
    <>
      <Dom>
        <Img src="img/pic.png" alt="#" />
      </Dom>
      <TagDom>
        <Tag>
          <Label>
            <p>title</p>
            <p>writer</p>
            <p>body</p>
          </Label>

          <Button onClick={update}>update</Button>

          <Like>
            <img
              src="img/like.png"
              onClick={() => {
                setLike(like + 1);
              }}
              alt="#"
              style={{ width: "5vh" }}
            />
            <p style={{ textAlign: "center" }}>{like}</p>
          </Like>
        </Tag>
      </TagDom>
    </>
  );
};

export default Read;
