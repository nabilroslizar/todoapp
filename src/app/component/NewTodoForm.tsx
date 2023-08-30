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
      <div className="font-semibold">Create a new task</div>
      <div className="flex flex-row gap-4 items-center">
        <input
          type="text"
          name="title"
          id="title"
          className="border border-black rounded-md mt-2 pl-4"
        />
        <button
          type="submit"
          className="bg-black text-white px-5 py-1 rounded-md text.sm"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default NewTodoForm;
