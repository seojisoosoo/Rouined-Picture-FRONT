import React, { useRef } from "react";
import styled from "styled-components";
import "../App.css";

const Img = styled.label`
  width: 80vh;
  height: 52.3vh;
  margin-top: 2vh;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
`;
const ShowImg = styled.img`
  width: 80vh;
  display: none;
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
  width: 40%;
  background-color: white;
  padding: 1vh;
  float: left;
`;
const Button = styled.button`
  width: 10%;
  float: right;
`;
const Input = styled.input`
  border: 1px solid transparent;
  margin-left: 0.5vh;
`;
const Textarea = styled.textarea`
  border: 1px solid transparent;
  margin-left: 0.5vh;
`;
const BodyDom = styled.div`
  display: flex;
  flex-direction: row;
`;
document.getElementById("file").onchange = function () {
  var reader = new FileReader();

  reader.onload = function (e) {
    // get loaded data and render thumbnail.
    document.getElementById("showimg").src = e.target.result;
    // document.getElementById("showimg").style.display = "flex";
    // document.querySelector("#noneimg").style.display = "none";
  };

  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
};

const Create = () => {
  const photoRef = useRef(null);
  const writerRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  return (
    <>
      <Dom>
        <Img htmlFor="file">
          <img
            src="img/addimg.png"
            alt="#"
            style={{
              width: "15vh",
              height: "15vh",
              position: "relative",
              top: "19vh",
            }}
          />
        </Img>
        <ShowImg id="showimg" alt="#" />
        <input
          type="file"
          name="file"
          id="file"
          ref={photoRef}
          style={{ visibility: "hidden", width: "0.1vh" }}
        />
      </Dom>
      <TagDom>
        <Tag>
          <Label>
            <p>
              작품명 |
              <Input
                type="text"
                ref={titleRef}
                placeholder="작품명을 입력해주세요"
              />
            </p>
            <p>
              작가명 |{" "}
              <Input
                type="text"
                ref={writerRef}
                placeholder="작가명을 입력해주세요"
              />
            </p>
            <BodyDom>
              <p>작품 설명 |</p>
              <Textarea
                cols="18"
                rows="5"
                ref={bodyRef}
                placeholder="작품 설명을 입력해주세요"
              />
            </BodyDom>
            <p>
              password |{" "}
              <Input
                type="text"
                ref={writerRef}
                placeholder="비밀번호를 입력해주세요"
              />
            </p>
          </Label>
          <Button>save</Button>
        </Tag>
      </TagDom>
    </>
  );
};

export default Create;
