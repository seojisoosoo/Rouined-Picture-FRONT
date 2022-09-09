import React, { useRef, useState } from "react";
import styled from "styled-components";
import "../App.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

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
  //   width: 61vh;
  height: 40vh;
  position: absolute;
  z-index: 2;
`;
const Update = () => {
  const { state } = useLocation();
  const [imageSrc, setImageSrc] = useState(`${state.detail.img}`);
  console.log(state);
  const navigate = useNavigate();
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
    e.preventDefault();

    console.log("put 시작");

    let formData = new FormData();
    if (photoRef.current.files[0] === undefined) {
      console.log("null이다");
    } else {
      formData.append("imgFile", photoRef.current.files[0]);
    }
    console.log(titleRef.current.value);
    console.log(writerRef.current.value);
    console.log(bodyRef.current.value);
    console.log(passwordRef.current.value);

    formData.append("title", titleRef.current.value);
    formData.append("writer", writerRef.current.value);
    formData.append("body", bodyRef.current.value);

    if (!passwordRef.current.value) alert("비밀번호를 입력해주세요!");
    formData.append("password", passwordRef.current.value);

    axios
      .post(
        `https://rouined-photo-exhibition.herokuapp.com/${state.id}/update`,
        formData,
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.ok) {
          console.log(res);
          alert("수정완료!");
          navigate("/read");
        }
      });
  };
  const photoRef = useRef(null);
  const writerRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <form>
      <Dom>
        <Background id="background" />
        <Img htmlFor="file">
          <ImgIcon src="img/addimg2.png" alt="logo" />
          {imageSrc && (
            <ShowImg
              src={imageSrc}
              id="showimg"
              alt="#"
              //여기에 넣어둔 img 보여주기 or 새로 넣은 사진 보여주기
            />
          )}
        </Img>

        <input
          type="file"
          name="file"
          id="file"
          ref={photoRef}
          style={{ visibility: "hidden", width: "0.1vh" }}
          onChange={(e) => {
            encodeFileToBase64(e.target.files[0]);
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
                defaultValue={state.detail.title}
              />

              <p>작가명 | </p>
              <Input
                type="text"
                ref={writerRef}
                defaultValue={state.detail.writer}
              />

              <BodyDom>
                <p>작품 설명 |</p>
                <Textarea
                  cols="18"
                  rows="5"
                  ref={bodyRef}
                  defaultValue={state.detail.body}
                />
              </BodyDom>
              <p>password | </p>
              <Input
                type="text"
                ref={passwordRef}
                defaultValue={state.detail.password}
              />
            </Label>
            <Button type="button" onClick={(e) => onSubmit(e)}>
              save
            </Button>
          </Tag>
        </TagDom>
      </Dom>
    </form>
  );
};

export default Update;
