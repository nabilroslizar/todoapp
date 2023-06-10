import { Todo } from "@prisma/client";
import React from "react";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <label htmlFor={todo.id} className="">
      {todo.title}
    </label>
  );
};

export default TodoItem;
