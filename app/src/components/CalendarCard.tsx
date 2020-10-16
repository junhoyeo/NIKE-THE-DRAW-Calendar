import React from 'react';
import styled, { css } from 'styled-components';

import SneakerCard from './SneakerCard';

interface ICalendarCard {}

const CalendarCard: React.FC<ICalendarCard> = () => {
  return (
    <Wrapper>
      <Container>
        <CalendarList>
          <CalendarCircle>10</CalendarCircle>
          <CalendarCircle isSelected>29</CalendarCircle>
        </CalendarList>
        <SneakerCard />
      </Container>
    </Wrapper>
  );
};

export default CalendarCard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const CalendarList = styled.div`
  display: flex;
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
    margin-right: 16px;
  }

  ${({ isSelected = false }) =>
    isSelected &&
    css`
      background-color: #f03e3e;
      color: white;
    `};
`;
