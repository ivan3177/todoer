import {ListRenderItem} from 'react-native';
import {todoModel} from '../../entities/todo';
import {TodoPreview, TodosListContainer} from '../../features/todos/ui';
import React from 'react';

const renderItem: ListRenderItem<todoModel.Todo> = ({item}) => (
  <TodoPreview {...item} />
);

export const TodosList = () => {
  return <TodosListContainer renderItem={renderItem} />;
};
