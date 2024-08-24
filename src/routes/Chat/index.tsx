import {useState} from 'react';
import {v4 as uuid} from 'uuid';

import {ButtonPrimary} from '../../components';
import {Menu, MenuItem} from '../../components/Menu';
import {useAutoComplete} from '../../hooks';
import {ChatBubble, Container, Content, Input, InputContainer, MenuContainer} from './styled';

type Message = {
  id: string;
  type: 'image' | 'text';
  content: string;
  orientation: 'left' | 'right';
};

export const Chat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const completions = useAutoComplete(message);

  const handleMessageSend = () => {
    setMessage('');
    setMessages((prev) => [
      ...prev,
      {id: uuid(), type: 'text', content: message, orientation: 'right'},
    ]);

    if (message.startsWith('/image')) {
      const imageId = message.split(' ')[1];

      setMessages((prev) => [
        ...prev,
        {
          id: uuid(),
          type: 'image',
          content: `https://picsum.photos/id/${imageId}/500/500`,
          orientation: 'left',
        },
      ]);
    }
  };

  return (
    <Container>
      <Content>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} orientation={msg.orientation}>
            {msg.type === 'text' && msg.content}
            {msg.type === 'image' && <img src={msg.content} alt="Image" width="100%" />}
          </ChatBubble>
        ))}
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

        <ButtonPrimary radius={0} onClick={handleMessageSend}>
          Send
        </ButtonPrimary>
      </InputContainer>
    </Container>
  );
};
