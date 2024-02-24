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
  padding: 2rem 25rem;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: var(--secondary-text-color);
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;

const StyledParagraph = styled.p`
  padding-top: 2rem;
  width: 100%;
  line-height: 1.5rem;
  font-size: 1.25rem;
`;