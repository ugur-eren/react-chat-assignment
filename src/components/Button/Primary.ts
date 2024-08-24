import styled from 'styled-components';

export const ButtonPrimary = styled.button<{block?: boolean; radius?: number}>`
  ${({block}) => block && 'width: 100%'}

  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.onAccent};
  font-weight: 700;
  font-size: 18px;
  padding: 12px 36px;
  border: none;
  border-radius: ${({radius}) => radius ?? 6}px;
  cursor: pointer;
`;
