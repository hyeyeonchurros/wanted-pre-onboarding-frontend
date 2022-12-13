import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, signUp } from "../../utils/apis/auth";
import {
  checkEmail,
  checkPassword,
  extractionUsername,
} from "../../utils/function";
import Navigation from "./Navigation";

const Content = ({ type }) => {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onClickLogin = () => {
    login({ email, password }).then((data) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("nickname", extractionUsername(email));
      navigate("/todo");
    });
  };

  const onClickSignup = () => {
    signUp({ email, password }).then(navigate("/"));
  };

  useEffect(() => {
    if (!checkEmail(email) && !checkPassword(password)) {
      setDisabled(true);
      setErrorMessage("이메일과 비밀번호를 다시 확인해주세요.");
    } else if (!checkEmail(email))
      setErrorMessage("이메일을 다시 확인해주세요.");
    else if (!checkPassword(password))
      setErrorMessage("비밀번호는 8자 이상입니다.");
    else {
      setDisabled(false);
      setErrorMessage("");
    }
    if (email === "" && password === "") setErrorMessage("");
  }, [email, password]);

  return (
    <Container>
      <h1>{type === "login" ? "LOGIN" : "SIGNUP"}</h1>
      <input
        placeholder="이메일을 입력해주세요"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="비밀번호를 입력해주세요"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <button
        disabled={disabled}
        onClick={type === "login" ? onClickLogin : onClickSignup}
      >
        확인
      </button>
      <Navigation type={type} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 48px;
  height: 540px;
  border-radius: 8px 0 0 8px;
  background-color: ${({ theme }) => theme.white};
  > h1 {
    font-size: 40px;
    margin: 40px 0 32px 0;
    color: ${({ theme }) => theme.black};
  }
  > button {
    border: none;
    width: 302px;
    cursor: pointer;
    border-radius: 8px;
    margin: 52px 0 16px 0;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.main};
    height: 54px;
    font-size: 18px;
    :disabled {
      opacity: 0.3;
    }
  }
  > input {
    height: 54px;
    margin-top: 20px;
    padding: 16px;
    width: 302px;
    font-size: 16px;
    outline: none;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.gray};
    :focus {
      border: 1px solid ${({ theme }) => theme.main};
    }
  }
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  margin: 8px 0 0 auto;
  height: 12px;
  color: ${({ theme }) => theme.systemRed};
`;

export default Content;
