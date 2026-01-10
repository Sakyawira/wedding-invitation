import styled from '@emotion/styled';

const Container = styled.div`
  border: 30px solid transparent; /* Initial value for the border */
  /* The visible white "panel" is painted by the ::before pseudo-element so
     its opacity can be controlled independently of the children. The decorative
     frame is painted by ::after so it sits visually above the panel but does
     not affect the content layering. */
  --surface-opacity: 0.5; /* default opacity for the panel background */
    border-image-source: url('./background.png'); /* Set the image path */
  border-image-slice: 30% 49%; /* Set the size of the image */
  border-image-width: 280px; /* Set the width of the border image */
  background-color: #ffffff;

  /* panel background applied directly like Button to ensure consistent translucency */
  background: rgba(var(--surface-rgb, 0,0,0), var(--surface-opacity));
  border-radius: 8px;
  overflow: hidden;

  /* decorative frame (above the panel and the content) */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 3;
    /* prefer a processed transparent frame if present, otherwise fall back */
    background-repeat: no-repeat;
    background-position: center top;
    background-size: contain;
    pointer-events: none;
    opacity: var(--frame-opacity, 0);
    /* optionally crop outer margins of the frame so the body background shows through */
    clip-path: inset(var(--frame-clip, 0) var(--frame-clip, 0) var(--frame-clip, 0) var(--frame-clip, 0));
  }

  /* ensure children render above the panel but below the decorative frame */
  & > * {
    position: relative;
    z-index: 2;
  }

  @media screen and (min-width: 500px) {
    width: 500px;
  }
`;

export default Container;
