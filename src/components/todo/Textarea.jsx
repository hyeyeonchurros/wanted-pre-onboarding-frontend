import styled from "@emotion/styled";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { createTodo } from "../../utils/apis/todo.js";

const Textarea = ({ setRefresh }) => {
  const [todo, setTodo] = useState("");

  return (
    <Container>
      <TextArea
        placeholder="내용을 입력해주세요..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <AddButton
        onClick={() => {
          createTodo({ todo }).then(() => {
            setTodo("");
            setRefresh((state) => state + 1);
          });
        }}
      >
        TODO 추가
      </AddButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  width: 1040px;
`;

const TextArea = styled(TextareaAutosize)`
  border: none;
  resize: none;
  outline: none;
  width: 100%;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
`;

const AddButton = styled.button`
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  font-size: 18px;
  height: 48px;
  border: none;
  width: 130px;
  border-radius: 8px;
  cursor: pointer;
`;

export default Textarea;
