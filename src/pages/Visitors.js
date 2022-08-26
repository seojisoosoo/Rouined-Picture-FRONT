import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2vh;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 1vh 1vh;
  padding: 0vh 2vh;
  background-color: #ebe7e3;
  box-shadow: 0px 0px 15px 0px #b8b8b8;
  width: 15vh;
  height: 10vh;
  border-radius: 20px;
  flex: 1;
`;
const CardDom = styled.div`
  display: flex;
  justify-content: center;
`;
const Hr = styled.hr`
  width: 10vh;
  background-color: black;
  height: 0.15vh;
  border: none;
`;
const Font = styled.p`
  font-size: 15pt;
  font-weight: bold;
  margin: -10px;
`;
const Width = styled.div`
  width: 60vh;
  display: flex;
  // justify-content: center;
`;
const Visitors = () => {
  return (
    <Dom>
      <a href="https://www.notion.so/14144506f3c14ec4a45a1cfe256530d2">
        <img src="img/notion.png" alt="#" />
        <p>
          <strong>behind logs</strong>
        </p>
      </a>
      <br />
      Special thanks to
      <br />
      <br />
      <Link to="/visitorsCreate">
        <button>방명록 작성하기</button>
      </Link>
      <CardDom>
        <Width>
          <Card>
            <Font style={{ fontSize: "30pt" }}>📷</Font>
            <Font>SooSoo</Font>
            <Hr />
          </Card>
          <Card>
            <Font style={{ fontSize: "30pt" }}>📷</Font>
            <Font>SooSoo</Font>
            <Hr />
          </Card>
          <Card>
            <Font style={{ fontSize: "30pt" }}>📷</Font>
            <Font>SooSoo</Font>
            <Hr />
          </Card>
          <Card>
            <Font style={{ fontSize: "30pt" }}>📷</Font>
            <Font>SooSddddoo</Font>
            <Hr />
          </Card>
          <Card>
            <Font style={{ fontSize: "30pt" }}>📷</Font>
            <Font>SooSoo</Font>
            <Hr />
          </Card>
          <Card>
            <Font style={{ fontSize: "30pt" }}>📷</Font>
            <Font>SooSoo</Font>
            <Hr />
          </Card>
        </Width>
      </CardDom>
    </Dom>
  );
};

export default Visitors;
