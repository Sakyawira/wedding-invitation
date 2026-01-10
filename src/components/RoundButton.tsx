import styled from '@emotion/styled';

const RoundButton = styled.button`
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: #6a7b3a;
  text-decoration: none;
  background-color: #f7c7ce;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`.withComponent('a');

export default RoundButton;
