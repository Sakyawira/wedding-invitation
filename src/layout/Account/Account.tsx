import styled from '@emotion/styled';
import data from 'data.json';
import DressCodeWrap from './DressCodeWrap.tsx';
// import AccountWrap from './AccountWrap.tsx';
import Accordion from '@/components/Accordion.tsx';

const Account = () => {
  const { dressCodes } = data as any;

  return (
    <HostInfoWrapper>
      {dressCodes?.map((group: any) => (
        <Accordion title={group.title} key={group.title} defaultOpen>
          <DressCodeWrap title={group.title} colors={group.colors} />
        </Accordion>
      ))}
    </HostInfoWrapper>
  );
};

export default Account;

const HostInfoWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 20px;
`;
