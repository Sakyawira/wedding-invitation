import styled from '@emotion/styled';

interface IDressCodeProps {
  title?: string;
  colors: string[];
}

const DressCodeWrap = ({ title, colors }: IDressCodeProps) => {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <SwatchGrid>
        {colors.map((c) => (
          <Swatch key={c} style={{ background: c }}>
            <HexLabel>{c}</HexLabel>
          </Swatch>
        ))}
      </SwatchGrid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px 0;
`;

const Title = styled.h4`
  margin: 0 0 10px 0;
  color: rgb(var(--muted-text-rgb));
`;

const SwatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 8px;
`;

const Swatch = styled.div`
  height: 56px;
  border-radius: 6px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 6px;
  box-shadow: 0 1px 2px rgba(var(--shadow-rgb), 0.06);
`;

const HexLabel = styled.span`
  font-size: 0.65rem;
  color: rgba(var(--color-white), 0.95);
  text-shadow: 0 1px 0 rgba(0,0,0,0.25);
`;

export default DressCodeWrap;
