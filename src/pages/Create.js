import React, { useRef } from "react";

const Create = () => {
  const photoRef = useRef(null);
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  return (
    <>
      이미지 | <input type="file" ref={photoRef} />
      제목 | <input type="text" ref={titleRef} />
      설명 | <textarea cols="30" rows="10" ref={bodyRef} />
    </>
  );
};

export default Create;
