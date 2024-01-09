import {styled} from '@fast-styles/react';
import {View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import * as createTodoModel from '../model';

const BottomSheetContainer = styled(View, {
  flex: 1,
  paddingVertical: 16,
  paddingHorizontal: 16,
});

export const CreateTodoBottomSheetContainer = ({
  children,
}: PropsWithChildren) => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  React.useEffect(() => {
    const subscription =
      createTodoModel.$createTodoBottomSheetVisible.subscribe(visible => {
        if (visible) {
          bottomSheetModalRef.current?.present();
        } else {
          bottomSheetModalRef.current?.dismiss();
        }
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <BottomSheetModal
      onDismiss={createTodoModel.onBottomSheetDismiss}
      enableDismissOnClose
      ref={bottomSheetModalRef}
      enablePanDownToClose
      snapPoints={[250]}>
      <BottomSheetContainer>{children}</BottomSheetContainer>
    </BottomSheetModal>
  );
};
