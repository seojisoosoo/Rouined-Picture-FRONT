import React from "react";
import { useNavigate } from "react-router-dom";
import datas from "../db/data.json";
import styled from "styled-components";

const Img = styled.img`
  width: 100vh;
`;
const Dom = styled.div`
  display: flex;
  justify-content: center;
  flec-direction: column;
`;
const TagDom = styled.div`
  margin-top: 1vh;
  display: flex;
  justify-content: center;
`;
const Tag = styled.div`
  width: 100vh;
  float: left;
`;
const Label = styled.div`
  width: 25%;
  background-color: white;
`;
const Read = () => {
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
        </Tag>
      </TagDom>
    </>
  );
};

export default Read;
