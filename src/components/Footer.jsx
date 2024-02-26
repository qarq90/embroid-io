import styled from "styled-components";
import Link from "next/link";
import {leftFooterLinks, middleFooterLinks, rightFooterLinks} from "@/lib/objFooter";

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <SubFooter>
                    {rightFooterLinks.map((FooterLink, index) => (
                        <li key={index}>
                            <p key={index}>
                                {FooterLink.icon}
                                {FooterLink.title}
                            </p>
                        </li>
                    ))}
                </SubFooter>
                <SubFooter>
                    {middleFooterLinks.map((FooterLink, index) => (
                        <li key={index}>
                            <Link href={FooterLink.path} key={index} id={FooterLink.id}>
                                {FooterLink.icon}
                                {FooterLink.title}
                            </Link>
                        </li>
                    ))}
                </SubFooter>
                <SubFooter>
                    {leftFooterLinks.map((FooterLink, index) => (
                        <li key={index}>
                            <p key={index}>
                                {FooterLink.icon}
                                {FooterLink.title}
                            </p>
                        </li>
                    ))}
                </SubFooter>
            </FooterContainer>
        </>
    )
}

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background-color: var(--NF-background-color);
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 55rem;
    display: flex;
    flex-direction: column;
  }
`;

const SubFooter = styled.div`
  display: flex;

  > li {
    padding: 1rem 2rem;
    flex-wrap: wrap;

    > a {
      display: flex;
      text-decoration: none;
      align-items: center;
      color: var(--NF-text-color);
      @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        font-size: 2rem;
      }

      > svg {
        padding-right: 0.5rem;
      }
    }

    > p {
      display: flex;
      text-decoration: none;
      align-items: center;
      color: var(--NF-text-color);

      @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
        font-size: 2rem;
      }

      > svg {
        padding-right: 0.5rem;
      }
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;