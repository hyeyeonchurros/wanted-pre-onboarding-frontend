import styled from "@emotion/styled";
import { updateTodo } from "../../utils/apis/todo";

const UpdateButtonBox = ({
  id,
  setViewUpdateButton,
  setReadonly,
  setInputValue,
  todo,
  basicTodo,
  isCompleted,
  setRefresh,
}) => {
  const onClickCancel = () => {
    setReadonly(true);
    setViewUpdateButton(false);
    setInputValue(basicTodo);
  };
  const onClickUpdate = async () => {
    setReadonly(true);
    setViewUpdateButton(false);
    updateTodo(id, { todo, isCompleted }).then(() =>
      setRefresh((state) => state + 1)
    );
  };
  return (
    <ButtonContainer>
      <button className="cancel" onClick={() => onClickCancel()}>
        취소
      </button>
      <button className="update" onClick={() => onClickUpdate()}>
        수정
      </button>
    </ButtonContainer>
  );
};

export default UpdateButtonBox;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  width: 100%;
  justify-content: flex-end;
  > button {
    height: 38px;
    width: 56px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }
  .update {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.white};
    border: none;
  }
  .cancel {
    color: ${({ theme }) => theme.gray};
    background-color: transparent;
    border: 1.5px solid ${({ theme }) => theme.gray};
  }
`;
