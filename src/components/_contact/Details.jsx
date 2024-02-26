import styled from "styled-components";
import {FaMailBulk, FaWhatsapp} from "react-icons/fa";
import {FaLocationPin} from "react-icons/fa6";

export const Details = () => {
    return (
        <StyledDetails>
            <div>
                <DetailHeader><FaWhatsapp/>WhatsApp</DetailHeader>
                <DetailContent>+91 7738022001</DetailContent>
            </div>
            <div>
                <DetailHeader><FaMailBulk/> Email</DetailHeader>
                <DetailContent>aqureshiofc@gmail.com</DetailContent>
            </div>
            <div>
                <DetailHeader><FaLocationPin/> Address</DetailHeader>
                <DetailContent>A-603, Rustomjee Central Park,
                    Andheri East
                    Mumbai, Maharashtra
                </DetailContent>
            </div>
        </StyledDetails>
    )
}

const StyledDetails = styled.div`
  width: 40%;
  padding: 1rem;
  border-radius: 20px;

  > div {
    padding: 1rem;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 95%;
    font-size: 200%;
    padding: 1rem;
  }
`;

const DetailHeader = styled.h2`
  color: var(--priamry-text-color);
  display: flex;
  align-items: center;
  >svg{
    margin-right: 1rem;
  }
`;

const DetailContent = styled.p`
  padding-top: 0.5rem;
  color: var(--priamry-text-color);
`