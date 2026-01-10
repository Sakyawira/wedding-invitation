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
      <VerticalTimeline lineColor="#F7C7CE">
        {(isCollapsed ? timelineEvents.slice(0, previewCount) : timelineEvents).map(
          (event, idx) => (
            <VerticalTimelineElement
              key={idx}
              date={event.date}
              dateClassName="timeline-date-centered"
              iconStyle={{ background: '#F7C7CE', color: '#fff', boxShadow: '0 0 0 4px #F7C7CE' }}
              contentStyle={{
                background: 'transparent',
                color: '#2F2120',
                border: '1px solid #F7C7CE',
              }}
              contentArrowStyle={{ borderRight: '7px solid #F7C7CE' }}>
              <PointTitle>{event.title}</PointTitle>
              <Caption>{event.description}</Caption>
              <Image src={event.image} alt={event.title} />
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
  box-shadow: 0 4px 12px rgba(247, 199, 206, 0.08);
  padding: 20px 0;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(247, 199, 206, 0.1);
`;

const ExpandButton = styled.button`
  width: 100%;
  margin-top: 16px;
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  background: linear-gradient(90deg, #d9772a 0%, #fcde70 100%);
  color: #fff;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(232, 140, 166, 0.1);
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: linear-gradient(90deg, #fcde70 0%, #d9772a 100%);
    color: #2f2120;
  }
`;

const FadeOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(var(--surface-rgb, 255, 255, 255), var(--surface-opacity)) 90%
  );
  pointer-events: none;
`;

export default Timeline;
