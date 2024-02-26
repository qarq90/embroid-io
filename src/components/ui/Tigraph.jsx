import styled from "styled-components";

export const Tigraph = ({title, paragraph}) => {
    return (
        <StyledTigraph>
            <StyledTitle>{title}</StyledTitle>
            <StyledParagraph>{paragraph}</StyledParagraph>
        </StyledTigraph>
    )
}

const StyledTigraph = styled.div`
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(30, 30, 30, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  color: var(--primary-background-color);
  margin: 2rem 25rem;
  padding: 2rem;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 40rem;
    padding: 2rem 7rem;
    margin: 2rem 0.5rem;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 400%;
  }
`;

const StyledParagraph = styled.p`
  padding-top: 2rem;
  width: 100%;
  line-height: 1.5rem;
  font-size: 1.25rem;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    text-align: justify-all;
    font-size: 300%;
    line-height: 4rem;
  }
`;