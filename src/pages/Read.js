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
  display: flex;
  justify-content: left;
  flec-direction: column;
`;
const Tag = styled.div`
  width: 5vh;
  height: 5vh;
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
          <p>title</p>
          <p>writer</p>
          <p>body</p>
        </Tag>
      </TagDom>
    </>
  );
};

export default Read;
