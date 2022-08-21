import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Dom = styled.div`
  display: flex;
  justify-content: center;
`;
const Introduce = styled.div`
  // border: 1px solid #d9d9d9;
  // background-color: #d9d9d9;
  // width: 100vh;
  // height: 70vh;
  border-radius: 5px;
  text-align: center;
  margin: 1.5vh 0vh;
`;
const Text = styled.p`
  // position: relative;
`;
const Button = styled.button`
  margin: 0px 7px;
`;

const Landing = () => {
  return (
    <>
      <Dom>
        <Introduce>
          <Text>
            {/* <h3>* 망한 필름 전시회 *</h3> */}
            <p>
              한 치의 순간도 놓치고 싶지 않아, 모든 순간을 휴대폰 셔터에 담던 그
              어느날,
            </p>
            <p>
              손에 쥐여진 <strong>필름 카메라 하나 📷</strong>
            </p>
            <p>두근거리고, 어쩌면 떨리기까지한 마음을 안고, 조심스레 담았던</p>

            <p>서른 여섯 장의 나의 시선들.</p>

            <p>
              결과물을 한 치도 예상할 수 없는 자그마한 카메라를 들고 신나게
              스캔본을 받으러 간 날,
            </p>

            <p>웬걸! 망한 사진이 무려 열 두장이나 있는 것이 아니겠어요?</p>
            <br />
            <p>
              우리는 망한 사진을 찍어도 손쉽게 삭제를 해버리고 맙니다, 다시
              찍으면 되니까요.
            </p>

            <p>
              하지만, 나의 두근거림과 추억이 담긴 사진이라면 이야기가 달라지죠.
            </p>
            <p>
              <strong style={{ backgroundColor: "#d9d9d9" }}>
                망한 사진에도 소중한 추억들은 완연히 담겨있습니다.
              </strong>
            </p>
            <p>여러분들의 온전한 시선이 담긴 망한 사진을 전시해주세요.</p>
            <br />
            <p>
              망한 사진 전시회는 사진을 감상하며, 촬영자의 시선을 상상을 통해
              따라가고자 하는 취지를 담고 있습니다.
            </p>

            <p>
              고로, 누군가의 추억이 삭제될 것을 우려하여, 삭제 기능을 제공하지
              않사오니 신중히 전시해주시기 바랍니다.
            </p>

            <p>(수정은 자유롭게 가능합니다~)</p>

            <p>전시 관람료는 무료이며, 작품 게재료도 받지 않습니다.</p>
            <p>
              전시를 즐겁게 관람하셨다면 우측 하단의 feedback버튼을 눌러
              의견남겨주시면 감사하겠습니다 🙂
            </p>
            <br />
            <p>
              <strong>망한 사진 전시회</strong>에 오신 여러분 진심으로
              환영합니다 🎉
            </p>

            <p>즐거운 관람되세요 Life is Journey 🌷</p>

            <p>[ 문의 ] 수수 @seo_ground_water DM</p>
          </Text>
        </Introduce>
      </Dom>

      <Dom>
        <Link to="/read">
          <Button>watch</Button>
        </Link>
        <Link to="/create">
          <Button>upload</Button>
        </Link>
      </Dom>
    </>
  );
};

export default Landing;
