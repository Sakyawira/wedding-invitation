import styled from '@emotion/styled';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(var(--color-peach), 0.95);
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: rgba(var(--surface-rgb), calc(var(--surface-opacity) + 0.12));
  display: flex;
  align-items: center;
  color: rgb(var(--color-green));
  text-decoration: none;
  gap: 2px;
`.withComponent('a');

export default Button;
