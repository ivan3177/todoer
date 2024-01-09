import React, {type PropsWithChildren} from 'react';
import {GestureHandlerRootView} from '../shared/adapters/react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export const WithProviders = ({children}: PropsWithChildren) => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
