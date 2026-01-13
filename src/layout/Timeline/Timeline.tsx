import styled from '@emotion/styled';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Caption, PointTitle } from '@/components/Text';
import images from '@/layout/Gallery/Images';
import './timeline-date-centered.css';

const timelineEvents = [
  {
    date: '2015',
    title: 'Strangers to Best Friends',
    description: 'A school project brought us together for a couple photo. Fate?',
    image: images[0].source,
  },
  {
    date: '2017',
    title: 'Winning a Short Movie Competition',
    description: 'It was a romance movie, but we were just friends. Or so we thought.',
    image: images[1].source,
  },
  {
    date: '2019',
    title: 'Annual Catchup',
    description: 'The ocean kept us apart, but we always found time once a year.',
    image: images[2].source,
  },
  {
    date: '2022',
    title: 'Officially more than Friends',
    description: 'Debbie’s birthday. This time, we’re not just friends.',
    image: images[3].source,
  },
  {
    date: '2023',
    title: 'First Year Together',
    description: 'Long distance, good food, and a lot of calls.',
    image: images[5].source,
  },
  {
    date: 'Q2 2024',
    title: 'Engaged!',
    description: 'Somewhere in Southeast Asia, she said yes.',
    image: images[6].source,
  },
  {
    date: 'Q4 2024',
    title: 'Holiday in Bali',
    description: 'Last deep breath before the chaos of immigration and weddding prep.',
    image: images[7].source,
  },
  {
    date: 'July 2025',
    title: 'Deebie moved to Auckland, New Zealand',
    description: 'The adventure begins. New city, new job, new life together.',
    image: images[8].source,
  },
  {
    date: 'August 2025',
    title: 'Officially married!',
    description: 'We registered our marriage with the New Zealand government!',
    image: images[9].source,
  }
];

interface TimelineProps {
  isCollapsed?: boolean;
  onExpand?: () => void;
}

const Timeline = ({ isCollapsed = false, onExpand }: TimelineProps) => {
  // Show 1 card when collapsed
  const previewCount = 1;
  return (
    <TimelineWrapper style={{ position: 'relative', width: '100%', maxWidth: 500 }}>
      <VerticalTimeline lineColor={`rgba(var(--color-pink), 0.95)`}>
        {(isCollapsed ? timelineEvents.slice(0, previewCount) : timelineEvents).map(
          (event, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={event.date}
              dateClassName="timeline-date-centered"
              iconStyle={{ background: 'rgba(var(--color-pink), 0.95)', color: 'rgb(var(--color-white))', boxShadow: '0 0 0 4px rgba(var(--color-pink), 0.9)' }}
              contentStyle={{
                    background: 'transparent',
                    color: 'rgb(var(--muted-text-rgb))',
                border: '1px solid rgba(var(--color-pink), 0.9)',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(var(--color-pink), 0.9)' }}>
              <PointTitle>{event.title}</PointTitle>
              <Caption>{event.description}</Caption>
              <Image src={event.image} alt={event.title} shapeIndex={idx} />
              {isCollapsed && idx === previewCount - 1 && (
                <ExpandButton onClick={onExpand}>Show Full Timeline</ExpandButton>
              )}
            </VerticalTimelineElement>
          )
        )}
      </VerticalTimeline>
      {isCollapsed && <FadeOverlay />}
    </TimelineWrapper>
  );
};

const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity));
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(var(--color-pink), 0.08);
  padding: 20px 0;
  position: relative;
`;

// deterministic PRNG
const mulberry = (seed: number) => () => {
  let t = seed += 0x6D2B79F5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const chaikin = (pts: Array<[number, number]>) => {
  const out: Array<[number, number]> = [];
  for (let i = 0; i < pts.length; i++) {
    const p0 = pts[i];
    const p1 = pts[(i + 1) % pts.length];
    out.push([p0[0] * 0.75 + p1[0] * 0.25, p0[1] * 0.75 + p1[1] * 0.25]);
    out.push([p0[0] * 0.25 + p1[0] * 0.75, p0[1] * 0.25 + p1[1] * 0.75]);
  }
  return out;
};

const generateLargeBlob = (index = 0, points = 24) => {
  const rand = mulberry(index + 1);
  const minR = 52;
  const maxR = 78;
  const cx = 50 + (rand() - 0.5) * 6;
  const cy = 50 + (rand() - 0.5) * 6;

  // initial radii with variation
  const radii: number[] = Array.from({ length: points }, () => minR + rand() * (maxR - minR));

  // apply smoothing by converting to coordinates and running Chaikin several times
  let coords: Array<[number, number]> = radii.map((r, i) => {
    const angle = (i / points) * Math.PI * 2;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r];
  });

  coords = chaikin(coords);
  coords = chaikin(coords);
  coords = chaikin(coords); // three passes for smoother silhouette

  // occasionally add spikes/lobes for interest
  if (rand() > 0.4) {
    const spikeCount = Math.floor(rand() * 3) + 1;
    for (let s = 0; s < spikeCount; s++) {
      const idx = Math.floor(rand() * coords.length);
      coords[idx] = [coords[idx][0] + (rand() - 0.5) * 12, coords[idx][1] + (rand() - 0.5) * 12];
    }
  }

  // finalize and clamp values
  const pts = coords.map(([x, y]) => [Math.max(1, Math.min(99, Math.round(x))), Math.max(1, Math.min(99, Math.round(y)))]) as Array<[number, number]>;
  return `polygon(${pts.map(([x, y]) => `${x}% ${y}%`).join(', ')})`;
};

const Image = styled.img<{ shapeIndex?: number }>`
  width: 100%;
  max-width: 320px;
  margin-top: 12px;
  box-shadow: 0 6px 18px rgba(var(--shadow-rgb), 0.08);
  transition: transform 220ms ease, box-shadow 220ms ease;
  border-radius: 10px;
  object-fit: cover;

  /* procedurally generated large blob clip-path (65% - 91% radius) */
  ${({ shapeIndex = 0 }) => `clip-path: ${generateLargeBlob(shapeIndex, 7)};`}

  &:hover {
    transform: translateY(-6px) scale(1.02) rotate(-0.6deg);
    box-shadow: 0 16px 36px rgba(var(--shadow-rgb), 0.12);
  }
`;

const ExpandButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  background: linear-gradient(90deg, rgba(var(--color-coral),1) 0%, rgba(var(--color-yellow),1) 100%);
  color: rgb(var(--color-white));
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(var(--color-pink), 0.1);
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: linear-gradient(90deg, rgba(var(--color-yellow),1) 0%, rgba(var(--color-coral),1) 100%);
    color: rgb(var(--muted-text-rgb));
  }
`;

const FadeOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(
    transparent 0%,
    rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity)) 90%
  );
  pointer-events: none;
`;

export default Timeline;
