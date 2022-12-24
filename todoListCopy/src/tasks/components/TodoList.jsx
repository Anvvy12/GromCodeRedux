import React from "react";
import styled from "styled-components";
import TasksList from "./TasksList";

const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
`;

const TodoList = () => {
  return (
    <>
      <Title>Todo List</Title>
      <TasksList />
    </>
  );
};

export default TodoList;
