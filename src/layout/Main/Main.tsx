import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/compressed/05.jpg';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Main = () => {
  const { greeting } = data;

  // Extract name parameter from URL (safe for SSR) and sanitize
  const urlParams =
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  let name = urlParams ? urlParams.get('name') : null;
  if (name) {
    try {
      name = decodeURIComponent(name);
    } catch (e) {
      // ignore decode errors and keep raw value
    }
    name = name.trim().slice(0, 50);
    // Insert space between camel-cased parts: SakyaRuslim -> Sakya Ruslim
    name = name.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  // Create dynamic title
  const dynamicTitle = name
    ? `Hi, ${name}! 💍 Sakya & Debbie got married - come celebrate! 🎉✨`
    : greeting.title;

  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{dynamicTitle}</MainTitle>
      {/* <SubTitle>{greeting.eventDetail}</SubTitle> */}
    </div>
  );
};

export default Main;

// ...existing code...
const MainImg = styled.img`
  width: 90%;
  max-width: 450px;
  padding: 18px;
  display: block;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;

  /* organic clipped shape with graceful fallback */
  border-radius: 20px;
  clip-path: polygon(
    5% 10%, 95% 5%, 100% 40%, 85% 95%, 15% 95%, 0% 55%
  );

  box-shadow: 0 10px 30px rgba(var(--shadow-rgb), 0.12);
  transition: transform 220ms ease, box-shadow 220ms ease;

  &:hover {
    transform: translateY(-6px) scale(1.01) rotate(-0.5deg);
    box-shadow: 0 18px 40px rgba(var(--shadow-rgb), 0.16);
  }
`;

const MainTitle = styled.p`
  font-family: inherit;
  font-size: 2rem;
  color: rgb(var(--color-green));
  line-height: 120%;
  white-space: pre-line;
  margin: 10px 0;
  animation: ${fadeIn} 1.2s ease-out;
`;
