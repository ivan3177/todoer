import {combine, createEvent, createStore, sample} from 'effector';
import {createGate} from 'effector-react';
import {todoModel} from '../../../entities/todo';

const fetchTodos = createEvent();

sample({
  clock: fetchTodos,
  target: todoModel.fetchTodosFx,
});

export const todosFetchGate = createGate();
todosFetchGate.status.watch(opened => {
  if (opened) {
    fetchTodos();
  }
});

export const $refreshing = createStore(false);
export const refresh = createEvent();

$refreshing.on(refresh, () => true);
sample({
  clock: refresh,
  target: fetchTodos,
});

$refreshing.on(todoModel.fetchTodosFx.finally, () => false);

export const $fetching = combine(
  $refreshing,
  todoModel.fetchTodosFx.pending,
  (refreshing, requestPending) => requestPending && !refreshing,
);
