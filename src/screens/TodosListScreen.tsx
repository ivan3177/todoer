import {styled} from '@fast-styles/react';
import {SafeAreaView, View} from 'react-native';
import {ui} from '../shared/ui';
import {TodosList} from '../widgets/todos-list';
import {CreateTodoBottomSheet} from '../widgets/create-todo';
import React from 'react';
import {CreateTodoButton} from '../features/create-todo/ui';

const Container = styled(SafeAreaView, {
  flex: 1,
  backgroundColor: ui.appTheme.colors.$lunarBlue,
});

const Footer = styled(View, {
  paddingVertical: 8,
  paddingHorizontal: 16,
});

export const TodosListScreen = () => {
  return (
    <Container>
      <TodosList />
      <Footer>
        <CreateTodoButton />
      </Footer>
      <CreateTodoBottomSheet />
    </Container>
  );
};
