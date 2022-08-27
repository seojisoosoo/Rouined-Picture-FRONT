import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Card = styled.button`
  border: 1px solid transparent;
  border-radius: 25px;
  background-color: #ebe7e3;
  box-shadow: 0px 0px 15px 0px #b8b8b8;
  width: 18vh;
  height: 12vh;
  margin: 1vh;
`;
const Hr = styled.hr`
  width: 10vh;
`;
const H1 = styled.h1`
  margin: -1vh;
  font-size: 35pt;
`;
const H3 = styled.h3`
  margin: 0vh 0vh -1vh 0vh;
  font-size: 15pt;
  font-family: Courier New;
`;
const VisitorsRead = () => {
  const navigate = useNavigate();
  const [visitors, setVisitors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/visitor");
      console.log(response);
      setVisitors(response.data.data);
    };
    fetchData();
  }, []);

  const cardClick = (url, id) => {
    const detail = visitors.filter((visitor) => visitor.id === id)[0];
    console.log(detail);
    navigate(url, { state: { id: id, detail: detail } });
  };

  return (
    <>
      {visitors.map((visitor) => (
        <Card
          key={visitor.id}
          onClick={() => cardClick(`/visitor/${visitor.id}`, visitor.id)}
        >
          <H1>📷</H1>
          <H3>{visitor.visitor}</H3>
          <Hr />
        </Card>
      ))}
    </>
  );
};

export default VisitorsRead;
