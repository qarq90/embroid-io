import React, { useState } from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import styled from "styled-components";

export const Form = () => {
    const emailRegex = /^[a-zA-Z0-9_+.]+@[a-zA-Z]+\.[a-z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    const [fName, setFName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = async () => {
        if (fName.length === 0 || email.length === 0 || phone.length === 0 || message.length === 0) {
            console.log("Please fill all the details");
        } else if (!emailRegex.test(email)) {
            console.log("Please enter a valid email address");
        } else if (!phoneRegex.test(phone)) {
            console.log("Please enter a valid phone number");
        } else {
            const options = {
                method: 'POST',
                body: JSON.stringify({ fName, email, phone, message })
            };
            const response = await fetch("http://localhost:3000/api/post/sendDetails", options);
            const data = await response.json();
            if (!data.found) {
                console.log(data);
            }
            console.log("Form Submitted");
        }
    };

    return (
        <>
            <StyledForm>
                <div>
                    <Label htmlFor="firstName" label="First Name"/>
                    <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="Enter your First Name"
                        value={fName}
                        onChange={(e) => setFName(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="email" label="Email"/>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="phone" label="Phone Number"/>
                    <Input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Enter your Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="message" label="Message"/>
                    <Input
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <Button onClick={submitHandler} text="Submit"/>
            </StyledForm>
        </>
    );
};

const StyledForm = styled.div`
  width: 40%;
  padding: 1rem;
  border-radius: 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 98%;
  }
`;
