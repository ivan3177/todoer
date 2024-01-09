import {ListRenderItem, View} from 'react-native';
import {todoModel} from '../../entities/todo';
import {TodoPreview, TodosListContainer} from '../../features/todos/ui';
import {styled} from '@fast-styles/react';
import {CreateTodoButton} from '../../features/create-todo/ui';

const Footer = styled(View, {
  paddingVertical: 8,
  paddingHorizontal: 16,
});

const renderItem: ListRenderItem<todoModel.Todo> = ({item}) => (
  <TodoPreview {...item} />
);

export const TodosList = () => {
  return (
    <TodosListContainer
      renderItem={renderItem}
      ListFooterComponent={
        <Footer>
          <CreateTodoButton />
        </Footer>
      }
    />
  );
};
