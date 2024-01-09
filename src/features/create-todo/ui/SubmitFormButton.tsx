import {reflect} from '@effector/reflect';
import {ui} from '../../../shared/ui';
import * as createTodoModel from '../model';

export const SubmitFormButton = reflect({
  view: ui.Button,
  bind: {
    label: 'Submit',
    type: 'primary',
    onPress: () => {
      createTodoModel.sumbitForm();
    },
  },
});
