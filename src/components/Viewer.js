import React, { useState } from "react";
import styled from "styled-components";

const Viewer = () => {
  const [urlImage, setUrlImage] = useState(
    "https://miro.medium.com/max/1400/1*GI-td9gs8D5OKZd19mAOqA.png"
  );

  const handleUrlImage = (e) => {
    setUrlImage(e.target.value);
  };

  return (
    <Container>
      <Viewers>
        <H1>Live Image Viewer</H1>
        <Input
          type="text"
          name="url"
          id="url"
          placeholder="put link here ..."
          onChange={handleUrlImage}
        />
        <Img src={urlImage} alt="images-viewer" />
      </Viewers>
    </Container>
  );
};

const Img = styled.img`
  width: 300px;
  border-radius: 0.5em;
  margin-top: 10px;
`;

const Input = styled.input`
  border: none;
  background: #c5c5c5;
  padding: 5px;
  border-radius: 0.5em;
  &:focus {
    outline: none;
  }
`;

const H1 = styled.h1`
  font-size: 1.6em;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Viewers = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 30px;
  border-radius: 0.5em;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export default Viewer;
