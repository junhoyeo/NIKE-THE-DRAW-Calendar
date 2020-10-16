import React from 'react';
import styled, { css } from 'styled-components';

import SneakerCard from './SneakerCard';

interface ICalendarCard {}

const CalendarCard: React.FC<ICalendarCard> = () => {
  return (
    <Wrapper>
      <Container>
        <LeftSideBar>
          <CalendarList>
            <CalendarCircle>10</CalendarCircle>
            <CalendarCircle isSelected>29</CalendarCircle>
          </CalendarList>
          <CalendarText>
            <strong>응모 기간</strong>
            <br />
            10/29(목) 10:00 ~ 11:00
            <br />
            <strong>당첨자 발표</strong>
            <br />
            10/29(목) 14:00
            <br />
            <strong>당첨자 구매 기간</strong>
            <br />
            10/29(목) 14:00 ~ 16:00
          </CalendarText>
        </LeftSideBar>
        <SneakerCard />
      </Container>
    </Wrapper>
  );
};

export default CalendarCard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 32px 0;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const LeftSideBar = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalendarList = styled.div`
  display: flex;
`;

const CalendarText = styled.div`
  font-size: 13px;
  line-height: 1.45;
  margin-top: 16px;
  color: #212529;
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
