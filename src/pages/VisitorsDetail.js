import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Visitors from "./Visitors";
import "../App.css";
import "https://code.jquery.com/jquery-3.4.1.min.js";
import "https://html2canvas.hertzen.com/dist/html2canvas.min.js";
import html2canvas from "html2canvas";

const Button = styled.button`
  border: 0px solid transparent;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
`;
const Hr = styled.hr`
  width: 38vh;
  float: left;
  margin: 0;
`;
const HrD = styled.hr`
  width: 20vh;
  float: left;
  margin: 0;
`;
const HrR = styled.hr`
  position: relative;
  //   top: 1.5vh;
  left: 1.5vh;
  width: 26vh;
`;
const Dom = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
const DownloadDom = styled.div`
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;
const P = styled.p`
  font-size: 10pt;
  margin: 0.5vh 1vh;
  float: left;
  width: 50vh;
  padding: 0;
`;
const Ticket = styled.div`
  padding: 2vh;

  //   width: 30vh;
  //   height: 55vh;
  //   width: 60vh;
  //   height: 30vh;
  width: 460px;
  height: 230px;
  border-radius: 15px;
  background-color: #ebe7e3;
  box-shadow: 0px 0px 15px 0px #b8b8b8;
  transform: rotate(90deg);
  margin-top: 15vh;
`;
const TicketDom = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  //   text-align: center;
`;
const Font = styled.h1`
  margin: 0;
  font-family: Courier New;
  font-weight: lighter;
  font-size: 20pt;
  width: 55vh;
`;
const TicketIn = styled.div`
  //   transform: rotate(90deg);
  //   padding: 20px;
  position: absolute;
  z-index: 1;
`;
const Logo = styled.div`
  font-size: 75pt;
  float: left;
`;
const Date = styled.div`
  display: flex;
  flex-direction: row;
  width: 55vh;
`;
const TicketOut = styled.div`
  float: right;
  padding: 22vh 0vh 0vh 0vh;
  transform: rotate(-90deg);
`;
const VisitorsDetail = () => {
  const onCapture = () => {
    console.log("onCapture");
    html2canvas(document.querySelector("#ticket")).then((canvas) => {
      onSaveAs(canvas.toDataURL("image/png"), "visitor-ticket.png");
    });
  };
  const onSaveAs = (uri, filename) => {
    console.log("onSaveAs");
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Hr />
              <P>망한 사진에도 소중한 추억들은 완연히 담겨있습니다</P>
              <Hr />
            </div>

            <br />
            <Logo> 📷 📸 📷 </Logo>
            <Date>
              <Font>
                <div style={{ float: "left" }}>2022.08.26</div>
                <div style={{ float: "left" }}>
                  <HrR />
                </div>
              </Font>
            </Date>
          </TicketIn>
          <TicketOut>
            <h3>忘 ; </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <h3 style={{ marginRight: "1vh" }}>망한 사진 전시회 </h3>
              <img src="img/lines.png" alt="#" />
            </div>
          </TicketOut>
        </Ticket>
        {/* <img src="img/ticket.png" alt="#" /> */}
      </TicketDom>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DownloadDom>
          <HrD style={{ width: "180px" }} />
          <Button onClick={onCapture} style={{ width: "180px" }}>
            <P style={{ width: "14vh" }}>내 방명록 다운로드</P>
            <img src="img/download.png" alt="#" />
          </Button>
          <HrD style={{ width: "180px" }} />
        </DownloadDom>
      </div>
    </>
  );
};

export default VisitorsDetail;
