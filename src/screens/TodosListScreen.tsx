import {styled} from '@fast-styles/react';
import {SafeAreaView} from 'react-native';
import {ui} from '../shared/ui';
import {TodosList} from '../widgets/todos-list';
import {CreateTodoBottomSheet} from '../widgets/create-todo';
import React from 'react';

const Container = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: ui.appTheme.colors.$lunarBlue,
});

export const TodosListScreen = () => {
  return (
    <Container>
      <TodosList />
      <CreateTodoBottomSheet />
    </Container>
  );
};
