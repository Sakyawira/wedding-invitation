import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <AccordionIcon />
        </span>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  font-family: inherit;
  border: 1px solid rgba(var(--color-pink), 0.9);
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(var(--color-pink), 0.95);
  padding: 0 15px;
  cursor: pointer;
  & > p {
    color: rgb(var(--color-green));
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: rgba(var(--surface-rgb), var(--surface-opacity));
`;

const AccordionIcon = styled(ExpandMore)`
  width: 18px;
  height: 18px;
  fill: rgba(var(--color-pink), 1) !important;
`;
