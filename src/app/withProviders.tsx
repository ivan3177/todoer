import React, {type PropsWithChildren} from 'react';
import {GestureHandlerRootView} from '../shared/adapters/react-native-gesture-handler';

export const WithProviders = ({children}: PropsWithChildren) => {
  return <GestureHandlerRootView>{children}</GestureHandlerRootView>;
};
