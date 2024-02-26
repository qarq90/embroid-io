import styled from "styled-components";

export const Button = ({onClick,text}) => {
    return (
        <>
            <StyledButton type="button" onClick={onClick}>{text}</StyledButton>
        </>
    )
}

const StyledButton = styled.button`
  width: 100%;
  height: auto;
  font-size: 1.25rem;
  border-radius: 5px;
  color: var(--priamry-text-color);
  background-color: var(--secondary-background-color);
  border: 1px var(--primary-background-color) solid;
  transition: 0.5s all linear;
  margin-top: 1rem;
  padding: 0.5rem;

  &:hover {
    color: var(--primary-background-color);
    background-color: var(--secondary-text-color);
    cursor: pointer;
    border: none;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: var(--NF-background-color);
    color: var(--secondary-background-color);
    font-size: 250%;
    margin-top: 2rem;
    padding: 1rem;
  }
`;