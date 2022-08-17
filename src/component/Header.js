import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-bottom: 0px;
`;
const Hr = styled.hr`
  width: 1000px;
`;
const Header = () => {
  return (
    <>
      <Link to="/">
        <Logo>📷</Logo>
      </Link>
      <Hr />
    </>
  );
};

export default Header;
