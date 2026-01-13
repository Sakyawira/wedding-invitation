import { useState } from 'react';
import styled from '@emotion/styled';
import { googleSheetsService } from '../../services/googleSheets';

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('Please fill in your name and message. 😢');
      return;
    }

    // Basic validation
    if (name.length > 50) {
      alert('Name must be less than 50 characters. 😅');
      return;
    }

    if (message.length > 500) {
      alert('Message must be less than 500 characters. 😅');
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await googleSheetsService.appendEntry({
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
      });

      if (success) {
        setName('');
        setMessage('');
        alert('Thank you for your message! 💝');
      } else {
        alert('Sorry, there was an error submitting your message. Please try again. 😢');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Sorry, there was an error submitting your message. Please try again. 😢');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="Are you coming?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid rgba(var(--color-pink), 0.9);
  font-family: inherit;
  font-weight: 300;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid rgba(var(--color-pink), 0.9);
  resize: none;
  font-family: inherit;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid rgba(var(--color-green), 0.9);
  background-color: rgba(var(--color-peach), 0.95);
  font-family: inherit;
  font-weight: 500;
  color: rgb(var(--muted-text-rgb));
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: rgba(var(--color-yellow), 0.95);
    border-color: rgba(var(--color-green), 0.95);
  }

  &:disabled {
    background-color: rgba(var(--color-peach), 0.85);
    color: rgb(var(--muted-text-rgb));
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
export default CommentForm;
