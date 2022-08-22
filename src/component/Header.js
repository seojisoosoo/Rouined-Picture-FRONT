import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Box = styled.div`
  width: 15vh;
  border: 0.5px solid black;
  border-radius: 50px;
  float: right;
  text-align: center;
  font-weight: bold;
  padding: 0.3vh;
  font-size: 5pt;
  height: 2vh;
  position: relative;
  top: 8.5vh;
  margin-left: 1vh;
`;
const Visitors = styled.img`
  width: 15vh;
  border-radius: 50px;
  margin-right: 1vh;
  position: relative;
  top: 8.5vh;
`;
const Logo = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-bottom: 0px;
`;
const Hr = styled.hr`
  width: 1000px;
`;
const Dom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Header = () => {
  return (
    <>
      <Dom>
        <Link to="#">
          <Visitors
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Frouined-photo-exhibition.netlify.app&count_bg=%23000000&title_bg=%23000000&icon=&icon_color=%23FFFFFF&title=%F0%9F%8C%B7visitors%F0%9F%8C%B7&edge_flat=false"
            alt="#"
          />
        </Link>
        <Link to="/">
          <Logo>📷</Logo>
        </Link>
        <Link to="#" state={{ textDecoration: "none" }}>
          <Box>🌊 user feedback 🌊</Box>
        </Link>
      </Dom>

      <Hr />
    </>
  );
};

export default Header;
