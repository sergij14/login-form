import React from "react";
import {
  Body,
  FormContainer,
  Header,
  HeaderText,
  Input,
  InputError,
  InputField,
  InputIcon,
  SubmitBtn,
} from "./LoginForm.styles";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
  const { submitHanlder, register, errors } = useLoginForm();
  return (
    <FormContainer onSubmit={submitHanlder}>
      <Header>
        <HeaderText>Login Form</HeaderText>
      </Header>
      <Body>
        <Input>
          <InputField type="text" placeholder="Email..."  {...register("email")} />
          <InputIcon src="/images/user.svg" alt="" />
          {errors.email && <InputError>{errors.email.message}</InputError>} 
        </Input>
        <Input>
          <InputField type="password" placeholder="Password..."  {...register("password")} />
          <InputIcon src="/images/locked.svg" alt="" />
          {errors.password && <InputError>{errors.password.message}</InputError>}
        </Input>
        <SubmitBtn type="submit">Log In</SubmitBtn>
      </Body>
    </FormContainer>
  );
};

export default LoginForm;
