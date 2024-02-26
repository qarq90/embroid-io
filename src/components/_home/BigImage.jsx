import styled from "styled-components";

export const BigImage = () => (
    <>
        <ImageContainer>
            <StyledImage id="home-image"/>
        </ImageContainer>
    </>
);

const ImageContainer = styled.div`
  margin: 0 20rem;
`;

const StyledImage = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 75vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
  background-color: aqua;
  }
`;
