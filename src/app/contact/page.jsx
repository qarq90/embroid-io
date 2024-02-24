"use client"

import styled from "styled-components";
import {Nav} from "@/components/Nav";
import {Footer} from "@/components/Footer";
import {Form} from "@/components/_contact/Form";
import {Tigraph} from "@/components/ui/Tigraph";
import {Details} from "@/components/_contact/Details";

export default function Contact() {


    return (
        <>
            <Nav/>
            <StyledContact className="contact-page">
                <Tigraph title={"Contact Us"}
                         paragraph={"We're here to help! Please fill out the form below and we'll get back to you as soon as possible."}/>
                <InnerFlex>
                    <Form/>
                    <Details/>
                </InnerFlex>
            </StyledContact>
            <Footer/>
        </>
    )
}

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const InnerFlex = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  padding: 0.5rem;
`;