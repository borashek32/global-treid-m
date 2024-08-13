import styles from './Chat.module.css';
import { KeyboardEvent, useEffect, useState } from 'react';
import { Close } from '@/shared/components/close-button/Close';
import send from '@/shared/assets/icons/send.svg';
import Image from 'next/image';

const supportMessages: MessageType[] = [
  { text: 'Добрый день! Введите вашу электронную почту.' },
  { text: 'Чем я могу помочь?' },
  { text: 'Оператор ответит на вашу электронную почту в течение получаса' },
];

type Props = {
  active: boolean;
  setActive: (active: boolean) => void;
};

type MessageType = {
  text: string;
  isUserMessage?: boolean;
};

type MessagesArrType = MessageType[];

export const Chat = ({ active, setActive }: Props) => {
  const [message, setMessage] = useState<MessageType>({ text: '' });
  const [messagesArr, setMessagesArr] = useState<MessagesArrType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleOnPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addMessage();
    }
  };

  const handleOnClick = () => {
    addMessage();
  };

  const addMessage = () => {
    if (message.text.trim() === '') return;

    if (!emailValidated && !emailPattern.test(message.text)) {
      setError('Ведите корректный email адрес');
      return;
    }

    setError('');
    setMessagesArr([...messagesArr, message]);
    setIsLoading(true);
    setMessage({ text: '' });

    if (!emailValidated) setEmailValidated(true);
  };

  useEffect(() => {
    if (messagesArr.length === 0) {
      setMessagesArr([supportMessages[0]]);
    }
  }, []);

  useEffect(() => {
    if (messagesArr.length === 2) {
      setTimeout(() => {
        setMessagesArr([...messagesArr, supportMessages[1]]);
        setIsLoading(false);
      }, 2000);
    }
  }, [messagesArr]);

  useEffect(() => {
    if (messagesArr.length === 4) {
      setTimeout(() => {
        setMessagesArr([...messagesArr, supportMessages[2]]);
        setIsLoading(false);
      }, 2000);
    }
  }, [messagesArr]);

  return (
    <div className={styles.chat + ' ' + (active ? styles.active : '')}>
      {active && <Close onClick={() => setActive(false)} />}
      <h3 className={styles.chat__header}>Чат с тех. поддержкой</h3>
      <div className={styles.chat__wrapper}>
        <div className={styles.chat__messagesWrapper}>
          {messagesArr.map((item: MessageType, index: number) => (
            <div
              key={index}
              className={
                styles.chat__message +
                ' ' +
                (item.isUserMessage ? styles.chat__userMessage : '')
              }
            >
              {item.text}
            </div>
          ))}
          {isLoading && <div className={styles.chat__message}>...</div>}
        </div>

        {error && <p className={styles.chat__error}>{error}</p>}
        <div className={styles.chat__inputWrapper}>
          <Image
            src={send}
            alt="send"
            className={styles.chat__send}
            onClick={handleOnClick}
          />
          <input
            value={message.text}
            type="text"
            placeholder="Введите ваше сообщение"
            className={styles.input}
            onChange={(e) =>
              setMessage({
                text: e.currentTarget.value,
                isUserMessage: true,
              })
            }
            onKeyPress={handleOnPressEnter}
          />
        </div>
      </div>
    </div>
  );
};
