import React, { useRef } from "react";

const Create = () => {
  const photoRef = useRef(null);
  const writerRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  return (
    <>
      이미지 | <input type="file" ref={photoRef} />
      작품명 | <input type="text" ref={titleRef} />
      작가 | <input type="text" ref={writerRef} />
      작품 설명 | <textarea cols="30" rows="10" ref={bodyRef} />
    </>
  );
};

export default Create;
