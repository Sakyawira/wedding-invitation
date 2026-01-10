import styled from '@emotion/styled';
import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.png?url';
import toss from '@/assets/icons/toss.png?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}
const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('Account number has been copied.😉😉');
      },
      () => {
        alert('Failed to copy account number.🥲🥲');
      }
    );
  };

  return (
    <Wrapper>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <Details>
        <AccountInfo>
          {bank} {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
          <Copy fill={`rgb(var(--color-peach))`} />
        </CopyButton>
      </Details>
      <AccountLinks>
        {kakaopayAccount && (
          <AccountButton href={kakaopayAccount} target="_blank" rel="noreferrer">
            <KakaopayImg src={kakaopay} alt="kakaopay" />
          </AccountButton>
        )}
        {tossAccount && (
          <AccountButton href={tossAccount} target="_blank" rel="noreferrer">
            <TossImg src={toss} alt="toss" />
          </AccountButton>
        )}
      </AccountLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: inherit;
  padding: 20px;
  margin: 10px 0;
    border-bottom: 1px solid rgba(var(--color-pink), 0.9);
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 5px 0;
`;
const Relation = styled.span`
    color: rgb(var(--color-green));
`;
const Name = styled.span`
  font-size: 1rem;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountInfo = styled.div``;
const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
    background: rgba(var(--surface-rgb), var(--surface-opacity));
`;

const AccountLinks = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;

const AccountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
    border: 1px solid rgba(var(--color-peach), 0.95);
  border-radius: 5px;
  margin: 5px 0;
  padding: 0 0.8em;
  width: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  gap: 2px;
    color: rgb(var(--color-green));
  text-decoration: none;
  outline: none;
  box-shadow: none;
    background: rgba(var(--surface-rgb), var(--surface-opacity));
`.withComponent('a');

const KakaopayImg = styled.img`
  width: 50px;
`;

const TossImg = styled.img`
  width: 70px;
`;

export default AccountWrap;
