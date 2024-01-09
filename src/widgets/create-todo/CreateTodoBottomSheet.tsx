import {
  CreateTodoBottomSheetContainer,
  CreateTodoForm,
  SubmitFormButton,
} from '../../features/create-todo/ui';
import React from 'react';

export const CreateTodoBottomSheet = () => {
  return (
    <CreateTodoBottomSheetContainer>
      <CreateTodoForm />
      <SubmitFormButton />
    </CreateTodoBottomSheetContainer>
  );
};
