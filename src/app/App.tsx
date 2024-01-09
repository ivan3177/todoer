import React from 'react';
import {WithProviders} from './withProviders.tsx';
import {TodosListScreen} from '../screens';

export const App: React.FunctionComponent = () => {
  return (
    <WithProviders>
      <TodosListScreen />
    </WithProviders>
  );
};
