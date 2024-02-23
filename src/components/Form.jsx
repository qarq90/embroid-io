import React, {useState} from "react";
import styled from "styled-components";
import {Label} from "@/components/ui/Label";
import {Input} from "@/components/ui/Input";
import {Button} from "@/components/ui/Button";
import {inputFields} from "@/lib/objContact";

export const Form = () => {

    const [fName, setFName] = useState("");
    const [sName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        switch (e.id) {
            case "firstName":
                setFName(e.target.value);
                break;
            case "secondName":
                setLName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "phone":
                setPhone(e.target.value);
                break;
            case "message":
                setMessage(e.target.value);
                break;
            default:
                break;
        }
        console.log(fName, sName, email, phone, message);
    }

    return (
        <StyledForm>
            {inputFields.map((field, index) => (
                <div key={index}>
                    <Label htmlFor={field.id} label={field.label}/>
                    <Input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        onChange={submitHandler(this.value())}
                    />
                </div>
            ))}
            <Button onClick={submitHandler} text={"Submit"}/>
        </StyledForm>
    );
}

const StyledForm = styled.form`
  width: 40%;
  padding: 2rem;
  border-radius: 20px;
`;
