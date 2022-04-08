import React from "react";
import {
  AppContainer,
  Body,
  Header,
  Input,
  InputField,
  InputIcon,
  SubmitBtn,
} from "./LoginForm.styles";

const LoginForm = () => {
  return (
    <AppContainer>
      <Header>
        <h3>Login form</h3>
      </Header>
      <Body>
        <Input>
          <InputField type="text" placeholder="Username" />
          <InputIcon src="user.svg" alt="" />
        </Input>
        <Input>
          <InputField type="password" placeholder="Password" />
          <InputIcon src="locked.svg" alt="" />
        </Input>
        <SubmitBtn type="submit">Log In</SubmitBtn>
      </Body>
    </AppContainer>
  );
};

export default LoginForm;
