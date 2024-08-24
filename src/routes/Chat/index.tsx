import {ButtonPrimary} from '../../components';
import {ChatBubble, Container, Content, Input, InputContainer} from './styled';

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
        <Input placeholder="Enter your message" />
        <ButtonPrimary radius={0}>Send</ButtonPrimary>
      </InputContainer>
    </Container>
  );
};
