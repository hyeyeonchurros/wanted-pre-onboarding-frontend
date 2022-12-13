import styled from "@emotion/styled";
import { deleteTodo } from "../../utils/apis/todo";

const Menulist = ({
  id,
  setRefresh,
  setViewMenulist,
  setViewUpdateButton,
  setReadonly,
}) => {
  const onClickModify = () => {
    setViewUpdateButton(true);
    setViewMenulist(false);
    setReadonly(false);
  };

  const onClickDelete = async () => {
    deleteTodo(id).then(() => setRefresh((state) => state + 1));
    setViewMenulist(false);
  };

  return (
    <Container>
      <button className="modify" onClick={() => onClickModify()}>
        수정하기
      </button>
      <button className="delete" onClick={() => onClickDelete()}>
        삭제하기
      </button>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: 1;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  top: 44px;
  right: 12px;
  background-color: ${({ theme }) => theme.white};
  button {
    cursor: pointer;
    font-size: 14px;
    border: none;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.gray};
  }
  .delete {
    margin-top: 8px;
    color: ${({ theme }) => theme.systemRed};
  }
`;

export default Menulist;
