import {useState} from 'react';

import {ButtonPrimary} from '../../components';
import {Menu, MenuItem} from '../../components/Menu';
import {useAutoComplete} from '../../hooks';
import {ChatBubble, Container, Content, Input, InputContainer, MenuContainer} from './styled';

export const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const completions = useAutoComplete(message);

  return (
    <Container>
      <Content>
        <ChatBubble orientation="right">
          Eu eu labore ex qui eu nulla incididunt aute in elit aute labore. Nisi dolor ullamco esse
          amet. Sunt et reprehenderit ea sint. Quis consequat eu laboris ex in est eu quis velit
          ipsum proident.
        </ChatBubble>

        <ChatBubble orientation="right">
          Eu eu labore ex qui eu nulla incididunt aute in elit aute labore. Nisi dolor ullamco esse
          amet. Sunt et reprehenderit ea sint. Quis consequat eu laboris ex in est eu quis velit
          ipsum proident.
        </ChatBubble>

        <ChatBubble orientation="left">
          Eu eu labore ex qui eu nulla incididunt aute in elit aute labore. Nisi dolor ullamco esse
          amet. Sunt et reprehenderit ea sint. Quis consequat eu laboris ex in est eu quis velit
          ipsum proident.
        </ChatBubble>

        <ChatBubble orientation="right">
          Eu eu labore ex qui eu nulla incididunt aute in elit aute labore. Nisi dolor ullamco esse
          amet. Sunt et reprehenderit ea sint. Quis consequat eu laboris ex in est eu quis velit
          ipsum proident.
        </ChatBubble>
      </Content>

      <InputContainer>
        {completions.length > 0 && (
          <MenuContainer>
            <Menu>
              {completions.map((match) => (
                <MenuItem key={match.label} onClick={() => setMessage(match.message)}>
                  {match.label}
                </MenuItem>
              ))}
            </Menu>
          </MenuContainer>
        )}

        <Input
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <ButtonPrimary radius={0}>Send</ButtonPrimary>
      </InputContainer>
    </Container>
  );
};
