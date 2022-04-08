import styled from "styled-components";

export const FormContainer = styled.div`
  font-size: 1.6rem;
  color: white;
  width: 100vw;
  padding: 1rem;
  @media (min-width: ${({ theme }) => theme.breakPoints.sm}) {
    width: 40rem;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  background: linear-gradient(
    180deg,
    rgba(120, 81, 123, 1) 0%,
    rgba(103, 70, 106, 1) 100%
  );
  box-shadow: 1px 1px 1px #8d6590 inset;
  padding: 2rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 1.4rem;
`;

export const HeaderText = styled.h3`
  text-shadow: 0px 1px 2px #000;
`;

export const Body = styled.form`
  background-color: #f2f2f2;
  color: #78517b;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 4px 2px -2px #251327;
`;

export const Input = styled.div`
  position: relative;
`;

export const InputIcon = styled.img`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: 0;
  right: 0;
  margin: 12px;
`;

export const InputField = styled.input`
  background-color: #f0eef0;
  border-radius: 5px;
  border: 1px #dfdfdf solid;
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  outline: 1px #fbfbfb solid;
  width: 100%;
`;

export const SubmitBtn = styled.button`
  background: linear-gradient(
    180deg,
    rgba(120, 81, 123, 1) 0%,
    rgba(103, 70, 106, 1) 100%
  );
  border-radius: 5px;
  align-self: flex-start;
  border: none;
  outline: none;
  font-size: 12px;
  padding: 1rem 2rem;
  color: white;
  font-weight: bold;
  text-shadow: 0px 1px 2px #000;
  cursor: pointer;
`;
