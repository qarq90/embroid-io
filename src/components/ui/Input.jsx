import styled from "styled-components";

export const Input = ({placeholder}) => {
    return (
        <>
            <StyledInput placeholder={placeholder} />
        </>
    )
}

const StyledInput = styled.input`
  width: 97%;
  height: 2.75rem;
  font-size: 1.25rem;
  border-radius: 5px;
  color: var(--secondary-text-color);
  background-color: var(--secondary-background-color);
  border: 1px var(--secondary-background-color) solid;
  transition: 0.5s all linear;
  padding-left: 1rem;
  margin: 0.5rem 0;

  &:focus {
    outline: none;
    border: 1px var(--secondary-background-color) solid;
  }
`;