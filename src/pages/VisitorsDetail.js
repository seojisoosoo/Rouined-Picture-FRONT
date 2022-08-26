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
  width: 20vh;
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
  text-align: center;
`;
const Font = styled.h1`
  font-family: Courier New;
  font-weight: lighter;
`;
const TicketIn = styled.div`
  transform: rotate(90deg);
  float: left;
`;
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
            <p>
              Thanks to <strong>SooSoo</strong>
            </p>
            <Hr />
            <p>망한 사진에도 소중한 추억들은 완연히 담겨있습니다</p>
            <Hr />
            <p> 📷 📸 📷 </p>
            <div>
              <p>2022.08.26</p>
              <Hr />
            </div>
          </TicketIn>
          {/* <div>
            <p>忘 ; </p>
            <div>
              <p>망한 사진 전시회</p>
              <img src="img/lines.png" alt="#" />
            </div>
          </div> */}
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
