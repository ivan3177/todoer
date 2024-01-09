import {styled} from '@fast-styles/react';
import {FlatList} from 'react-native';
import {ui} from '../../../shared/ui';
import {todoModel} from '../../../entities/todo';
import * as todosModel from '../model';
import {reflect} from '@effector/reflect';
import React, {PropsWithChildren} from 'react';
import {useGate, useUnit} from 'effector-react';

const StyledList = styled(FlatList, {
  flex: 1,
  backgroundColor: ui.appTheme.colors.$lunarBlue,
});

const FetchingGate: React.FunctionComponent<
  PropsWithChildren<{fetching: boolean}>
> = ({fetching, children}) => {
  if (fetching) {
    return null;
  }

  return <>{children}</>;
};

const FetchingGateContainer = reflect({
  view: FetchingGate,
  bind: {
    fetching: todosModel.$fetching,
  },
});

const List = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof StyledList>) => {
  useGate(todosModel.todosFetchGate);

  return (
    <FetchingGateContainer>
      <StyledList {...props} />
    </FetchingGateContainer>
  );
};

export const TodosListContainer = reflect({
  view: List,
  bind: {
    data: todoModel.$todos,
    onRefresh: todosModel.refresh,
    refreshing: todosModel.$refreshing,
  },
});
