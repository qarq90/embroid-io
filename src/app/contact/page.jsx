"use client"

import {Form} from "@/components/Form";
import styled from "styled-components";
import {Nav} from "@/components/Nav";
import {Footer} from "@/components/Footer";

export default function Contact() {
    return (
        <>
            <Nav/>
            <StyledContact>
                <Form/>
            </StyledContact>
            <Footer/>
        </>
    )
}

const StyledContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;