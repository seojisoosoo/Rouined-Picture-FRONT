import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Visitors from "./Visitors";

const Button = styled.button`
  border: 0px solid transparent;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;
const Hr = styled.hr`
  width: 30vh;
`;
const HrR = styled.hr`
  height: 10vh;
  transform: rotate(90deg);
`;
const Dom = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
const P = styled.p`
  font-size: 10pt;
  margin: 0vh 1vh;
`;
const Ticket = styled.div`
  padding: 2vh;

  width: 30vh;
  height: 55vh;

  border-radius: 15px;
  background-color: #ebe7e3;
  box-shadow: 0px 0px 15px 0px #b8b8b8;
`;
const TicketDom = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  //   text-align: center;
`;
const Font = styled.h1`
  font-family: Courier New;
  font-weight: lighter;
  width: 50vh;
`;
const TicketIn = styled.div`
  transform: rotate(90deg);
  padding: 20px;
`;
const PFont = styled.p`
  width: 50vh;
  padding: 0;
`;
const Logo = styled.div`
  font-size: 70pt;
  width: 50vh;
`;
const Date = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vh;
`;
const TicketOut = styled.div``;
const VisitorsDetail = () => {
  return (
    <>
      <Dom>
        <Link to="/visitors">
          <button>방명록 목록</button>
        </Link>
      </Dom>
      <TicketDom>
        <Ticket id="ticket">
          <TicketIn>
            <Font>
              Thanks to <strong>SooSoo</strong>
            </Font>
            <Hr />
            <PFont>망한 사진에도 소중한 추억들은 완연히 담겨있습니다</PFont>
            <Hr />
            <Logo> 📷 📸 📷 </Logo>
            <Date>
              <Font style={{ width: "13vh" }}>2022.08.26</Font>
              <HrR />
            </Date>
          </TicketIn>
          <TicketOut>
            <div>
              <h3>忘 ; </h3>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <h3>망한 사진 전시회</h3>
                <img src="img/lines.png" alt="#" />
              </div>
            </div>
          </TicketOut>
        </Ticket>
      </TicketDom>

      <Dom>
        <Hr />
        <Button>
          <P>내 방명록 다운로드</P>
          <img src="img/download.png" alt="#" />
        </Button>
        <Hr />
      </Dom>
    </>
  );
};

export default VisitorsDetail;
