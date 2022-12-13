import { login } from "../../assets";
import styled from "@emotion/styled";
import Content from "../../components/auth/Content";

const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Content type={"login"} />
        <img src={login} alt="로그인" />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  > img {
    height: 540px;
  }
`;

export default Login;
