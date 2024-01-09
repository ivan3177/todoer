import {styled} from '@fast-styles/react';
import {FlatList} from 'react-native';
import {ui} from '../../../shared/ui';
import {todoModel} from '../../../entities/todo';
import * as todosModel from '../model';
import {reflect} from '@effector/reflect';
import React, {PropsWithChildren} from 'react';
import {useGate} from 'effector-react';

const List = reflect({
  view: styled(FlatList<todoModel.Todo>, {
    flex: 1,
    backgroundColor: ui.appTheme.colors.$lunarBlue,
  }),
  bind: {
    data: todoModel.$todos,
    onRefresh: todosModel.refresh,
    refreshing: todosModel.$refreshing,
  },
});

const FetchingGateContainer = reflect({
  view: ({fetching, children}: PropsWithChildren<{fetching: boolean}>) => {
    if (fetching) {
      return null;
    }

    return <>{children}</>;
  },
  bind: {
    fetching: todosModel.$fetching,
  },
});

export const TodosListContainer = (
  props: React.ComponentProps<typeof List>,
) => {
  useGate(todosModel.todosFetchGate);

  return (
    <FetchingGateContainer>
      <List {...props} />
    </FetchingGateContainer>
  );
};
