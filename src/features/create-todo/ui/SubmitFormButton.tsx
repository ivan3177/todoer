import {reflect} from '@effector/reflect';
import {ui} from '../../../shared/ui';
import * as createTodoModel from '../model';
import {styled} from '@fast-styles/react';

export const SubmitFormButton = reflect({
  view: styled(ui.Button, {
    marginTop: 20,
  }),
  bind: {
    label: 'Submit',
    type: 'primary',
    onPress: () => {
      createTodoModel.sumbitForm();
    },
  },
});
