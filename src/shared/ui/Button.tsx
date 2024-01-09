import {styled} from '@fast-styles/react';
import {Pressable, PressableProps, Text} from 'react-native';
import {appTheme} from './theme.ts';
import React, {ComponentProps} from 'react';

const StyledPressable = styled(Pressable, {
  borderRadius: 16,
  paddingVertical: 16,
  paddingHorizontal: 32,

  variants: {
    type: {
      primary: {
        backgroundColor: appTheme.colors.$darkSlateBlue,
      },
      secondary: {
        backgroundColor: appTheme.colors.$lunarBlue,
      },
      destructive: {
        backgroundColor: appTheme.colors.$redstone,
      },
    },
  },
});

const StyledButtonText = styled(Text, {
  fontSize: 16,

  variants: {
    type: {
      primary: {
        color: appTheme.colors.$lunarBlue,
      },
      secondary: {
        backgroundColor: appTheme.colors.$knightRider,
      },
      destructive: {
        backgroundColor: appTheme.colors.$cherryFrosting,
      },
    },
  },
});

interface ButtonProps extends PressableProps {
  label: string;
  type: 'primary' | 'secondary' | 'destructive';
}

const StyledButton = ({label, type, ...rest}: ButtonProps) => {
  return (
    <StyledPressable type={type} {...rest}>
      <StyledButtonText type={type}>{label}</StyledButtonText>
    </StyledPressable>
  );
};

export {StyledButton as Button};
