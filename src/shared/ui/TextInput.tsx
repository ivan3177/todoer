import {styled} from '@fast-styles/react';
import {TextInput} from 'react-native';
import {appTheme} from './theme.ts';

const StyledTextInput = styled(TextInput, {
  color: appTheme.colors.$knightRider,
  backgroundColor: appTheme.colors.$volcanicPearl,
  borderRadius: 16,
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderWidth: 2,
  borderColor: appTheme.colors.$volcanicPearl,
  fontSize: 16,
});

export {StyledTextInput as TextInput};
