import styled from "styled-components";

export const Dual = ({dualGrid}) => {
    return (
        <>
            <StyledDual>
                {dualGrid.map((item, index) => (
                    <StyledHolder key={index}>
                        <h1>{item.title}</h1>
                        <p>{item.content}</p>
                    </StyledHolder>
                ))}
            </StyledDual>
        </>
    )
}

const StyledDual = styled.div`
  display: grid;
  grid-template-columns: 900px;
  color: var(--secondary-text-color);
  padding-bottom: 2rem;
`;

const StyledHolder = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  height: 9rem;

  > h1 {
    width: 50%;
    text-align: center;
  }

  > p {
    width: 40%;
  }
`;