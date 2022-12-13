import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Textarea from "../components/todo/Textarea";
import ToDoItem from "../components/todo/ToDoItem";
import { getTodos } from "../utils/apis/todo";

const ToDo = () => {
  const nickname = localStorage.getItem("nickname");
  const [todolist, setTodolist] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const data = await getTodos();
        setTodolist(data.reverse());
      } catch (e) {
        console.log(e);
      }
    })();
  }, [refresh]);

  return (
    <Container>
      <Title>
        {nickname}님의 Todo 총 {todolist.length}개
      </Title>
      <Textarea setRefresh={setRefresh} />
      <ItemContainer>
        {todolist?.map((item) => (
          <ToDoItem {...item} key={item.id} setRefresh={setRefresh} />
        ))}
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  width: 1040px;
  height: 100%;
`;

const Title = styled.p`
  font-size: 32px;
  margin: 48px 0 24px;
`;

const ItemContainer = styled.div`
  width: 1040px;
  margin-top: 48px;
  gap: 24px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default ToDo;
