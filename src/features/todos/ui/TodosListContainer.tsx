import {styled} from '@fast-styles/react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {ui} from '../../../shared/ui';
import {todoModel} from '../../../entities/todo';
import * as todosModel from '../model';
import {reflect} from '@effector/reflect';
import React, {PropsWithChildren} from 'react';
import {useGate} from 'effector-react';

const ListRefreshControl = reflect({
  view: ui.RefreshControl,
  bind: {
    refreshing: todosModel.$refreshing,
    onRefresh: todosModel.refresh,
  },
});

const List = reflect({
  view: styled(FlatList<todoModel.Todo>, {
    flex: 1,
    backgroundColor: ui.appTheme.colors.$lunarBlue,
  }),
  bind: {
    data: todoModel.$todos,
    refreshControl: <ListRefreshControl />,
  },
});

const LoaderContainer = styled(View, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: ui.appTheme.colors.$lunarBlue,
});

const Loader = styled(ActivityIndicator, {
  attributes: {
    animating: true,
    size: 'large',
    color: ui.appTheme.colors.$darkSlateBlue,
  },
});

const FetchingGateContainer = reflect({
  view: ({fetching, children}: PropsWithChildren<{fetching: boolean}>) => {
    if (fetching) {
      return (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      );
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
