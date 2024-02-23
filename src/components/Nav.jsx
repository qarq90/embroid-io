import styled from "styled-components";
import {NavLinks} from "@/lib/objNav";
import Link from "next/link";

export const Nav = () => {
    return (
        <>
            <NavContainer>
                {NavLinks.map((navLink, index) => (
                    <li key={index}>
                        <Link href={navLink.path} key={index}>
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
`;