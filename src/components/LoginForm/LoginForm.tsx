import React from "react";
import {
  Body,
  FormContainer,
  Header,
  HeaderText,
  Input,
  InputField,
  InputIcon,
  SubmitBtn,
} from "./LoginForm.styles";

const LoginForm = () => {
  return (
    <FormContainer>
      <Header>
        <HeaderText>Login Form</HeaderText>
      </Header>
      <Body>
        <Input>
          <InputField type="text" placeholder="Username" />
          <InputIcon src="/images/user.svg" alt="" />
        </Input>
        <Input>
          <InputField type="password" placeholder="Password" />
          <InputIcon src="/images/locked.svg" alt="" />
        </Input>
        <SubmitBtn type="submit">Log In</SubmitBtn>
      </Body>
    </FormContainer>
  );
};

export default LoginForm;
