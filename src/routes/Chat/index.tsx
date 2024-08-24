import {ButtonPrimary} from '../../components';
import {Menu, MenuItem} from '../../components/Menu';
import {ChatBubble, Container, Content, Input, InputContainer, MenuContainer} from './styled';

export const Chat: React.FC = () => {
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
        <MenuContainer>
          <Menu>
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
            <MenuItem>Option 4</MenuItem>
          </Menu>
        </MenuContainer>

        <Input placeholder="Enter your message" />
        <ButtonPrimary radius={0}>Send</ButtonPrimary>
      </InputContainer>
    </Container>
  );
};
