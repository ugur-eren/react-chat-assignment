import styled from 'styled-components';

import {Column} from '../Flex';

export const Menu = styled(Column)`
  gap: 12px;
  padding: 12px;
  background-color: ${({theme}) => theme.elevated};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const MenuItem = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px;
  background-color: ${({theme}) => theme.surface};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;
