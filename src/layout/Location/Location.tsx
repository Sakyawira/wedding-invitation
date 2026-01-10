import styled from '@emotion/styled';
import data from 'data.json';
import Map from './Map.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo, locationInfo, greeting } = data;

  // Build a Google Calendar link from the event date/time and address in data.json
  const buildCalendarLink = () => {
    // greeting.eventDetail is like "February 28, 2026 (Saturday) 10:00"
    const match = /([A-Za-z]+ \d{1,2}, \d{4}).*?(\d{1,2}:\d{2})/.exec(
      greeting.eventDetail
    );
    if (!match) return '#';
    const datePart = match[1];
    const timePart = match[2];

    // Parse local date/time (assume venue local timezone is Asia/Jakarta)
    const localString = `${datePart} ${timePart}`; // e.g. "February 28, 2026 10:00"
    const localDate = new Date(localString + ' GMT+0700');

    const pad = (n: number) => String(n).padStart(2, '0');
    const toGoogleDate = (d: Date) => {
      return (
        d.getUTCFullYear() +
        pad(d.getUTCMonth() + 1) +
        pad(d.getUTCDate()) +
        'T' +
        pad(d.getUTCHours()) +
        pad(d.getUTCMinutes()) +
        '00Z'
      );
    };

    const start = toGoogleDate(localDate);
    const endDate = new Date(localDate.getTime() + 2 * 60 * 60 * 1000); // +2 hours
    const end = toGoogleDate(endDate);

    const title = encodeURIComponent("Sakyawira & Debbie Wedding");
    const details = encodeURIComponent(
      `Join us for the wedding celebration of Sakyawira and Debbie!\n\nLocation: ${mapInfo.address2}`
    );
    const location = encodeURIComponent(mapInfo.address2);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&ctz=Asia/Jakarta`;
  };

  const calendarLink = buildCalendarLink();

  return (
    <LocationWrapper>
      {/* <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption> */}
      <Way>
        <PointTitle>{locationInfo[1].title}</PointTitle>
        <Caption>{locationInfo[1].desc}</Caption>
        <Map src={mapInfo.googleMap} />
      </Way>
      <Way>
        <PointTitle>{locationInfo[0].title}</PointTitle>
        <Caption>{locationInfo[0].desc}</Caption>
        <RoundButton id="google-calendar-link" target="_blank" href={calendarLink} rel="noreferrer">
          Add to Calendar
        </RoundButton>
      </Way>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-top: 24px;
`;
