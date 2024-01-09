import {createEffect, createStore} from 'effector';
import {
  createTodo,
  type CreateTodoDto,
  fetchTodoById,
  fetchTodos,
} from '../api';

export interface Todo {
  id: number;
  title: string;
  description: string;
}

export const $todos = createStore<Todo[]>([]);

export const fetchTodosFx = createEffect(async () => {
  return await fetchTodos();
});

$todos.on(fetchTodosFx.doneData, (_, todos) => {
  return todos;
});

export const fetchTodoFx = createEffect(async (id: number) => {
  return await fetchTodoById(id);
});

$todos.on(fetchTodoFx.doneData, (todos, todo) => {
  const existingTodo = todos.findIndex(({id}) => id === todo.id);
  if (existingTodo >= 0) {
    todos[existingTodo] = todo;
  } else {
    todos = [...todos, todo];
  }

  return todos;
});

export const createTodoFx = createEffect(async (props: CreateTodoDto) => {
  return await createTodo(props);
});

$todos.on(createTodoFx.doneData, (todos, todo) => {
  return [...todos, todo];
});
