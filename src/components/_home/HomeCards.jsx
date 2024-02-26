import styled from "styled-components";
import {tripletCards} from "@/lib/objHome";

export const HomeCards = () => (
    <>
        <StyledTriplet>
            {
                tripletCards.map((card, index) => (
                    <div key={index}>
                        <img src={card.src} alt=""/>
                        <div>
                            <h2>{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))
            }
        </StyledTriplet>
    </>
)

const StyledTriplet = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 2rem;

  > div {

    > div {
      margin-top: 1rem;
      backdrop-filter: blur(16px) saturate(180%);
      -webkit-backdrop-filter: blur(16px) saturate(180%);
      background-color: rgba(30, 30, 30, 0.75);
      border-radius: 12px;
      border: 1px solid rgba(209, 213, 219, 0.3);
      color: var(--primary-background-color);
      padding: 1rem;

      > h2 {
        margin: 0.5rem 0;
      }

      > p {
        padding: 0.75rem 0;
        width: 100%;
      }
    }

    > img {
      border-radius: 10px;
      height: 60%;
      width: 100%;
      object-fit: cover;
    }


  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    > div {
      width: 51rem;

      > div {
        > h2 {
          font-size: 300%;
          padding: 1rem;
        }

        > p {
          padding: 1rem;
          font-size: 250%;
        }
      }

      > img {
        border-radius: 10px;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;