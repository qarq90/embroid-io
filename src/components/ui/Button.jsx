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
  height: 2.75rem;
  font-size: 1.25rem;
  border-radius: 5px;
  color: var(--priamry-text-color);
  background-color: var(--secondary-background-color);
  border: 1px var(--primary-background-color) solid;
  transition: 0.5s all linear;
  margin-top: 1rem;

  &:hover {
    color: var(--primary-background-color);
    background-color: var(--secondary-text-color);
    cursor: pointer;
    border: none;
  }
`;