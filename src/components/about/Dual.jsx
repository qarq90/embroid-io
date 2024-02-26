import styled from "styled-components";

export const Dual = ({dualGrid}) => {
    return (
        <>
            <StyledDual>
                {dualGrid.map((item, index) => (
                    <div>
                        <StyledHolder key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </StyledHolder>
                    </div>
                ))}
            </StyledDual>
        </>
    )
}

const StyledDual = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: 900px;
  padding: 1.5rem 0;
  text-align: center;

  > div {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(30, 30, 30, 0.75);
    border-radius: 12px;
    margin: 1rem;
    border: 1px solid rgba(209, 213, 219, 0.3);
    color: var(--primary-background-color);
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 54rem;
    > div {
      width: 54rem;
      display: flex;
      flex-direction: column;
      padding-bottom: 20rem;
    }
  }
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

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 54rem;
    flex-direction: column;
    > h1 {
      padding: 2rem 0;
    }

    > p {
      font-size: 205%;      
      width: 40rem;
      padding-top: 1rem;
    }
  }
`;