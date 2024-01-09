import {styled} from '@fast-styles/react';
import {RefreshControl} from 'react-native';
import {appTheme} from './theme.ts';

const StyledRefreshControl = styled(RefreshControl, {
  attributes: {
    tintColor: appTheme.colors.$darkSlateBlue,
    colors: [appTheme.colors.$darkSlateBlue],
    refreshing: false,
  },
});

export {StyledRefreshControl as RefreshControl};
