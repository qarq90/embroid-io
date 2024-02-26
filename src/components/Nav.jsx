import styled from "styled-components";
import {NavLinks} from "@/lib/objNav";
import Link from "next/link";

export const Nav = () => {
    return (
        <>
            <NavContainer>
                {NavLinks.map((navLink, index) => (
                    <li key={index}>
                        <Link href={navLink.path} key={index} id={navLink.id}>
                            {navLink.icon}
                            {navLink.title}
                        </Link>
                    </li>
                ))}
            </NavContainer>
        </>
    )
}

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  list-style-type: none;
  background-color: var(--NF-background-color);

  > li {
    padding: 1rem 2rem;
    flex-wrap: wrap;

    > #logo-link {
      font-weight: bold;
    }

    > a {
      display: flex;
      text-decoration: none;
      align-items: center;
      color: var(--NF-text-color);

      > svg {
        padding-right: 0.5rem;
      }
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px){
    width: 55rem;
    height: auto;
    font-size: 1.5rem;
    flex-direction: column;

    > li {
      padding: 1rem 2rem;
      flex-wrap: wrap;

      > #logo-link {
        font-weight: bold;
      }

      > a {
        font-size: 200%;
        display: flex;
        text-decoration: none;
        align-items: center;
        color: var(--NF-text-color);

        > svg {
          padding-right: 1rem;
        }
      }
    }
  }
`;