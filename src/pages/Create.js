import React, { useRef, useState } from "react";
import styled from "styled-components";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Img = styled.label`
  width: 61vh;
  height: 40vh;
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
`;
const Background = styled.div`
  width: 61vh;
  height: 40vh;
  margin-top: 2vh;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer;
  position: absolute;
  z-index: 1;
`;
const Dom = styled.div`
  display: flex;
  justify-content: center;
`;
const TagDom = styled.div`
  width: 61vh;
  margin-top: 2vh;
  position: absolute;
`;
const Tag = styled.div`
  width: 61vh;
  float: left;
`;
const Label = styled.div`
  width: 40%;
  background-color: white;
  padding: 1vh;
  float: left;
`;
const Button = styled.button`
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
const ImgIcon = styled.img`
  width: 12vh;
  height: 12vh;
  position: relative;
  top: 14vh;
  z-index: 3;
`;
const ShowImg = styled.img`
  height: 40vh;
  position: absolute;
  z-index: 2;
`;
const Create = () => {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
        document.querySelector("#background").style.display = "none";
      };
    });
  };
  const onSubmit = (e) => {
    axios
      .post(
        "http://127.0.0.1:8000/",
        {
          // img: photoRef.current.value,
          img: e.target.files[0].name,
          title: titleRef.current.value,
          writer: writerRef.current.value,
          body: bodyRef.current.value,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.ok) {
          console.log(res);
          alert("추가완료!");
          navigate("/");
        }
      });
  };
  const photoRef = useRef(null);
  const writerRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  return (
    <>
      <Dom>
        <Background id="background" />
        <Img htmlFor="file">
          <ImgIcon src="img/addimg.png" alt="#" />
          {imageSrc && <ShowImg src={imageSrc} id="showimg" alt="#" />}
        </Img>

        <input
          type="file"
          name="file"
          id="file"
          ref={photoRef}
          style={{ visibility: "hidden", width: "0.1vh" }}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
            console.log(e.target.files[0].name);
          }}
        />
      </Dom>
      <Dom>
        <TagDom>
          <Tag>
            <Label>
              <p>작품명 |</p>
              <Input
                type="text"
                ref={titleRef}
                placeholder="작품명을 입력해주세요"
              />

              <p>작가명 |</p>
              <Input
                type="text"
                ref={writerRef}
                placeholder="작가명을 입력해주세요"
              />

              <BodyDom>
                <p>작품 설명 |</p>
                <Textarea
                  cols="18"
                  rows="5"
                  ref={bodyRef}
                  placeholder="작품 설명을 입력해주세요"
                />
              </BodyDom>
              <p>password |</p>
              <Input
                type="text"
                ref={writerRef}
                placeholder="비밀번호를 입력해주세요"
              />
            </Label>
            <Button onSubmit={(e) => onSubmit(e)}>save</Button>
          </Tag>
        </TagDom>
      </Dom>
    </>
  );
};

export default Create;
