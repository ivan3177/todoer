import {reflect} from '@effector/reflect';
import {ui} from '../../../shared/ui';
import * as createTodoModel from '../model';

export const CreateTodoButton = reflect({
  view: ui.Button,
  bind: {
    type: 'primary',
    label: 'New todo',
    onPress: () => {
      createTodoModel.toggleCreateTodoBottomSheet();
    },
  },
});
