import styled from "styled-components";

export const Grid = ({gridImages}) => {
    return (
        <StyledGrid>
            {gridImages.map((index) => (
                <StyledBlock key={index}>
                    <StyledImage src={index.src} alt={index.alt}/>
                    <StyledCaption>{index.content}</StyledCaption>
                </StyledBlock>
            ))}
        </StyledGrid>
    );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-items: center;
  margin: 20px;
  color: var(--secondary-text-color);
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 55rem;
    grid-template-columns: 1fr;
  }
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 95%;
  }
`;

const StyledCaption = styled.p`
  padding: 1.5rem 0;
  text-align: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(30, 30, 30, 0.75);
  border-radius: 12px;
  margin-top: 1rem;
  border: 1px solid rgba(209, 213, 219, 0.3);
  color: var(--primary-background-color);
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 2rem;
    width: 95%;
  }
`;