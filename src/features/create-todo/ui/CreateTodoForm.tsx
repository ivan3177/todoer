import {reflect} from '@effector/reflect';
import {ui} from '../../../shared/ui';
import * as createTodoModel from '../model';
import {styled} from '@fast-styles/react';
import {View} from 'react-native';
import React from 'react';

const TitleField = reflect({
  view: styled(ui.TextInput, {
    marginBottom: 16,
  }),
  bind: {
    placeholder: 'Title',
    value: createTodoModel.$title,
    onChangeText: createTodoModel.onTitleChange,
  },
});

const DescriptionField = reflect({
  view: ui.TextInput,
  bind: {
    placeholder: 'Description',
    value: createTodoModel.$description,
    onChangeText: createTodoModel.onDescriptionChange,
  },
});

const FormContainer = styled(View, {
  padding: 16,
  borderRadius: 32,
  borderWidth: 1,
  borderColor: ui.appTheme.colors.$lunarBlue,
});

export const CreateTodoForm = () => {
  return (
    <FormContainer>
      <TitleField />
      <DescriptionField />
    </FormContainer>
  );
};
