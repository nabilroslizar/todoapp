"use client";

import { useRef } from "react";
import { createTodoAction } from "../_action";

const NewTodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    const title = data.get("title");
    if (!title || typeof title !== "string") return;

    //call server action to create a todo
    await createTodoAction(title);

    //reset the form
    formRef.current?.reset();
    //toast subnmit success
  }

  return (
    <form action={action} ref={formRef} className="mt-4">
      <div className="font-semibold">Create a new todo</div>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          name="title"
          id="title"
          className="border rounded-md mt-2 pl-4"
        />
        <button
          type="submit"
          className="bg-black text-white px-2 py-1 rounded-md text.sm"
        >
          Add todo
        </button>
      </div>
    </form>
  );
};

export default NewTodoForm;
