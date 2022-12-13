import styled from "@emotion/styled";
import { signup } from "../../assets";
import Content from "../../components/auth/Content";

const SignUp = () => {
  return (
    <Wrapper>
      <Container>
        <Content type={"signup"} />
        <img src={signup} alt="회원가입" />
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
  > img {
    height: 540px;
  }
`;

export default SignUp;
