import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Navigation = ({ type }) => {
  return (
    <Container>
      <p>
        {type === "login" ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
      </p>
      <Link to={type === "login" ? "/signup" : "/"}>
        {type === "login" ? "회원가입하기" : "로그인하기"}
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  font-size: 14px;
  height: 20px;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  > a {
    margin-left: 4px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray};
    background-color: ${({ theme }) => theme.white};
    cursor: pointer;
  }
`;

export default Navigation;
