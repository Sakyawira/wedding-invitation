import styled from '@emotion/styled';

const YouTubeLiveStream = () => {
  return (
    <Wrapper>
      <StyledIframe
        src="https://www.youtube-nocookie.com/embed/_GQr5ciW8JI?si=hucyuZGTTEEGYthF&amp;"
        title="YouTube Live Stream"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></StyledIframe>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto; /* Updated margin to align with the rest of the site */
  width: 100%;
  max-width: 800px;
  height: auto;
  border: 2px solid rgba(var(--color-pink), 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(var(--shadow-rgb), 0.12);
  background-color: rgba(var(--surface-rgb), var(--surface-opacity));
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 315px;
  border: none;
  border-radius: 8px;
`;

export default YouTubeLiveStream;
