import bg from '@/assets/images/compressed/05.jpg';
import styled from '@emotion/styled';

const Bg = styled.div`
  position: fixed;
  inset: 0;
  z-index: -999;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  filter: none;
  pointer-events: none;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: -998;
  background: rgba(var(--surface-rgb), 0.18); /* subtle tint to match theme */
  pointer-events: none;
`;

export default function BodyBackground() {
  return (
    <>
      <Bg />
      <Overlay />
    </>
  );
}
