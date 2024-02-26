import styled from "styled-components";

export const Label = ({label}) => {
    return (
        <>
            <StyledLabel>{label}</StyledLabel>
        </>
    )
}

const StyledLabel = styled.p`
  width: auto;
  height: 1.5rem;
  font-size: 1.25rem;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0.15rem 0;
  color: var(--priamry-text-color);
  background-color: transparent;
  transition: 0.5s all linear;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    font-size: 250%;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
`;