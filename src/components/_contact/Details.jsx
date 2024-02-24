import styled from "styled-components";

export const Details = () => {
    return (
        <StyledDetails>
            <div>
                <DetailHeader>Phone Number</DetailHeader>
                <DetailContent>+91 8879662240</DetailContent>
            </div>
            <div>
                <DetailHeader>Email</DetailHeader>
                <DetailContent>abc@gmail.com</DetailContent>
            </div>
            <div>
                <DetailHeader>Address</DetailHeader>
                <DetailContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea id minus nihil numquam optio, porro
                    provident repellendus rerum soluta veritatis.
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
`;

const DetailHeader = styled.h2`
  color: var(--priamry-text-color);
`;

const DetailContent = styled.p`
  padding-top: 0.5rem;
  color: var(--priamry-text-color);
`