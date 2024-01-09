import {createEvent, createStore, sample} from 'effector';
import {todoModel} from '../../../entities/todo';

export const $title = createStore<string>('');
export const onTitleChange = createEvent<string>();
sample({
  clock: onTitleChange,
  target: $title,
});

export const $description = createStore<string>('');
export const onDescriptionChange = createEvent<string>();
sample({
  clock: onDescriptionChange,
  target: $description,
});

export const sumbitForm = createEvent();
sample({
  clock: sumbitForm,
  source: {title: $title, description: $description},
  target: todoModel.createTodoFx,
});
