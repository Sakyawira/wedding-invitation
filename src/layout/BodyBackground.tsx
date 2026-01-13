import bg from '@/assets/images/13.jpg';
import styled from '@emotion/styled';

const Bg = styled.div`
  position: fixed;
  inset: 0;
  z-index: -999;
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;
    /* background-attachment: fixed causes iOS Safari to zoom/crop the image.
      Keep it by default for desktop, but disable on touch devices and small screens. */
  background-attachment: fixed;

  /* Target iOS Safari and other touch devices */
  @supports (-webkit-overflow-scrolling: touch) {
    background-attachment: scroll;
    background-position: center top;
  }

  /* Fallback for coarse pointers / small viewports */
  @media (max-width: 768px), (pointer: coarse) {
    background-attachment: scroll;
    background-position: center top;
  }
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
