import styled from "@emotion/styled";
import { useState } from "react";
import { meatballMenu, checkBox, checkBoxFilled } from "../../assets";
import { updateTodo } from "../../utils/apis/todo";
import Menulist from "./Menulist";
import UpdateButtonBox from "./UpdateButtonBox";

const ToDoItem = ({ todo, isCompleted, id, setRefresh }) => {
  const [isCheck, setIsCheck] = useState(isCompleted);
  const [readonly, setReadonly] = useState(true);
  const [viewMenulist, setViewMenulist] = useState(false);
  const [viewUpdateButton, setViewUpdateButton] = useState(false);
  const [inputValue, setInputValue] = useState(todo);

  const onClickCheckBox = () => {
    setIsCheck(!isCheck);
    updateTodo(id, { todo, isCompleted: !isCheck }).then(() =>
      setRefresh((state) => state + 1)
    );
  };

  return (
    <Container>
      <Item isCheck={isCheck}>
        <img
          alt="체크박스"
          src={isCheck ? checkBoxFilled : checkBox}
          onClick={() => onClickCheckBox()}
        />
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          readOnly={readonly}
        />
        <img
          alt="미트볼메뉴"
          src={meatballMenu}
          className="meatballMenu"
          onClick={() => setViewMenulist(!viewMenulist)}
        />
        {viewMenulist && (
          <Menulist
            id={id}
            setRefresh={setRefresh}
            setViewMenulist={setViewMenulist}
            setViewUpdateButton={setViewUpdateButton}
            setReadonly={setReadonly}
          />
        )}
      </Item>
      {viewUpdateButton && (
        <UpdateButtonBox
          id={id}
          isCompleted={isCompleted}
          basicTodo={todo}
          todo={inputValue}
          setInputValue={setInputValue}
          setViewUpdateButton={setViewUpdateButton}
          setReadonly={setReadonly}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Item = styled.div`
  height: 48px;
  padding: 16px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 8px;
  align-items: center;
  position: relative;
  display: flex;
  > input {
    margin-left: 12px;
    font-size: 18px;
    width: 85%;
    outline: none;
    font-weight: 400;
    border: none;
    color: ${({ theme, isCheck }) => (isCheck ? theme.gray : theme.black)};
    text-decoration: ${({ isCheck }) => (isCheck ? "line-through" : "none")};
  }

  > img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    user-select: none;
  }
  .meatballMenu {
    position: absolute;
    right: 12px;
  }
`;

export default ToDoItem;
