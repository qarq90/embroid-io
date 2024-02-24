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
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const StyledCaption = styled.p`
  padding: 1.5rem 0;
  text-align: center;
`;