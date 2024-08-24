import styled from 'styled-components';

import {Column, Row} from '../../components';

export const Container = styled(Column)`
  width: 100%;
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
`;

export const Content = styled(Column)`
  flex: 1;
  padding: 6px 12px;
  overflow: scroll;
`;

export const InputContainer = styled(Row)`
  position: relative;
  background-color: ${({theme}) => theme.surface};
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
`;

export const ChatBubble = styled.div<{orientation: 'left' | 'right'}>`
  max-width: 75%;
  padding: 12px;
  margin: 6px;
  background-color: ${({theme}) => theme.surface};
  border-radius: 8px;
  align-self: ${({orientation}) => (orientation === 'left' ? 'flex-start' : 'flex-end')};
`;
