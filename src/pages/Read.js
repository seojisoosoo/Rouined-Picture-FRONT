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
  width: 25%;
  background-color: white;
`;
const Button = styled.button`
  width: 10%;
  float: right;
`;
const Read = () => {
  const [likes, setLikes] = useState();
  const navigate = useNavigate();
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

          <Button>update</Button>
        </Tag>
      </TagDom>
    </>
  );
};

export default Read;
