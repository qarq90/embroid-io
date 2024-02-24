import styled from "styled-components";
import {tripletCards} from "@/lib/objHome";

export const HomeCards = () => (
    <>
        <StyledTriplet>
            {
                tripletCards.map((card, index) => (
                    <div key={index}>
                        <img src={card.src} alt=""/>
                        <h2>{card.title}</h2>
                        <p>{card.description}</p>
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
    > img {
      border-radius: 10px;
      height: 60%;
      width: 100%;
      object-fit: cover;
    }
    >h2{
      color: var(--secondary-text-color);
      margin: 0.5rem 0;
    }
    >p{
      width: 75%;
      color: var(--secondary-text-color);
    }
  }
`;