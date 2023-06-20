"use server";

import { revalidatePath } from "next/cache";
import { createTodo, updateTodo } from "../../lib/todos";

export async function createTodoAction(title: string) {
  await createTodo(title);
  revalidatePath("/");
}

export async function updateTodoAction(id:string, isCompleted:boolean  ){
    //perform updaate prisma client
    await updateTodo(id, isCompleted)
    //revalidate
    revalidatePath('/')
}