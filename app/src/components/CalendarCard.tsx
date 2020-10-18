import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';

import SneakerCard, { ISneakerCard } from './SneakerCard';

interface ICalendarCard extends ISneakerCard {
  calendar: string[];
}

const CalendarCard: React.FC<ICalendarCard> = ({
  calendar,
  image,
  title,
  theme,
}) => {
  const calendarColumns = useMemo(
    () =>
      calendar.map((line) => {
        if (line.includes('시간')) {
          line = line.substr(0, line.lastIndexOf('('));
        }
        const [field, content] = line.split(/:(.+)/);
        return [field.trim(), content.trim()];
      }),
    [calendar],
  );

  const [month, day] = useMemo(() => {
    const numbers = calendarColumns[0][1].match(/\d+/g);
    if (numbers) {
      return [numbers[0], numbers[1]];
    }
    return [null, null];
  }, [calendarColumns]);

  return (
    <Wrapper>
      <Container>
        <LeftSideBar>
          <CalendarList>
            <CalendarCircle>{month && month}</CalendarCircle>
            <CalendarCircle isSelected>{day && day}</CalendarCircle>
          </CalendarList>
          <CalendarText>
            {calendarColumns.map(([field, content], index) => (
              <React.Fragment key={`calendar-${index}`}>
                <strong>{field}</strong>
                <br />
                {content}
                <br />
              </React.Fragment>
            ))}
          </CalendarText>
        </LeftSideBar>
        <SneakerCard image={image} title={title} theme={theme} />
      </Container>
    </Wrapper>
  );
};

export default CalendarCard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 32px 0;

  @media screen and (max-width: 500px) {
    zoom: 0.85;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 85%;
  }
`;

const LeftSideBar = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    zoom: 0.9;
  }
`;

const CalendarList = styled.div`
  display: flex;
`;

const CalendarText = styled.div`
  font-size: 14px;
  line-height: 1.45;
  margin-top: 16px;
  color: #495057;
`;

interface ICalendarCircle {
  isSelected?: boolean;
}

const CalendarCircle = styled.div<ICalendarCircle>`
  background-color: #f6f6f6;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  line-height: 1;
  font-weight: bold;
  margin-right: 6px;
  color: #ced4da;

  &:last-of-type {
    margin-right: 32px;
  }

  ${({ isSelected = false }) =>
    isSelected &&
    css`
      background-color: #f03e3e;
      color: white;
    `};
`;
