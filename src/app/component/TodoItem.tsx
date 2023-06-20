"use client";

import { Todo } from "@prisma/client";
import React, { useTransition } from "react";
import { updateTodoAction } from "../_action";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="flex justify-between gap-3 ">
      <div className="flex gap-2">
        <input
          type="checkbox"
          id={todo.id}
          defaultChecked={todo.isCompleted}
          onChange={(e) =>
            startTransition(() => updateTodoAction(todo.id, e.target.checked))
          }
          className="peer h-4 w-4 cursor-pointer rounded border-gray-300 focus:ring-slate-600"
        />
        <label
          htmlFor={todo.id}
          className="peer-checked:text-slate-500 peer-checked:line-through"
        >
          {todo.title}
        </label>
        <div className="text-sm peer-checked:line-through">
          {todo.updatedAt.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
