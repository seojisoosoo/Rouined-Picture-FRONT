import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import "../App.css";

const Img = styled.img`
  width: 61vh;
  // height: 40vh;
  margin-top: 2vh;
`;
const Dom = styled.div`
  display: flex;
  justify-content: center;
`;
const Body = styled.div`
  background-color: #f5f5f5;
`;
const TagDom = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
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
  // height: 25px;
  // margin: 30px 0px 0px 10px;
  // cursor: pointer;
`;
const Like = styled.button`
  margin: -0.7vh 0.5vh 0vh 0vh;
  float: right;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: transparent;
  background-color: transparent;
`;
const LikeIcon = styled.img`
  width: 5vh;
  cursor: pointer;
  margin-bottom: -0.5vh;
`;
const LikeCount = styled.p`
  padding: 0vh;
  margin: auto;
`;
const Read = () => {
  // const [like, setLike] = useState({});
  // const [like, setLike] = useState(0);

  // const [dataLike, setDataLike] = useState();
  const [photos, setPhotos] = useState();
  const navigate = useNavigate();
  const update = (url, id) => {
    navigate(url, {
      state: { id: id, detail: photos.filter((photo) => photo.id === id)[0] },
    });
    console.log(id + "클릭");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:8000/");
      console.log(response.data);
      setPhotos(response.data.data);
      console.log("success");
    };
    fetchData();
  }, []);
  console.log("성공" + photos);

  const likes = (id) => {
    // setLike(like + 1);
    axios.post(`http://127.0.0.1:8000/${id}/like`).then((res) => {
      if (res.data.ok) {
        console.log(res.data);
        window.location.reload();
        // setLike[id] = res.data.data.like_count;
        // console.log(like);
      }
    });
  };
  return (
    <Body>
      {photos &&
        photos.map((photo) => (
          <Fragment key={photo.id}>
            <Dom>
              <Img src={photo.img} alt="no image" />
            </Dom>
            <TagDom>
              <Tag>
                <Label>
                  <p>{photo.title}</p>
                  <p>{photo.writer}</p>
                  <p>{photo.body}</p>
                </Label>

                <Button
                  type="button"
                  onClick={() => update(`/${photo.id}/check`, photo.id)}
                  key={photo.id}
                >
                  update
                </Button>

                <Like>
                  <LikeIcon
                    src="img/like.png"
                    onClick={() => likes(photo.id)}
                    // onClick={() => setLike(like + 1)}
                    alt="#"
                  />
                  <LikeCount>{photo.like_count}</LikeCount>
                </Like>
              </Tag>
            </TagDom>
          </Fragment>
        ))}
    </Body>
  );
};

export default Read;
