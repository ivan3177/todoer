import {Text, View} from 'react-native';
import {styled} from '@fast-styles/react';
import {ui} from '../../../shared/ui';
import {todoModel} from '../../../entities/todo';

const Title = styled(Text, {
  fontSize: 16,
  color: ui.appTheme.colors.$darkSlateBlue,
});

const Description = styled(Text, {
  fontSize: 12,
  color: ui.appTheme.colors.$knightRider,
});

const Container = styled(View, {
  paddingVertical: 8,
  paddingHorizontal: 16,
  backgroundColor: ui.appTheme.colors.$volcanicPearl,
});

export const TodoPreview = ({title, description}: todoModel.Todo) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
