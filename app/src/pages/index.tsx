import React from 'react';
import SafeArea from 'react-safe-area-component';
import styled from 'styled-components';

import CalendarCard from '@/components/CalendarCard';
import ServiceWrapper from '@/components/ServiceWrapper';

import sneakers from '@/mockups/sneakers.json';

const HomePage: React.FC = () => {
  return (
    <>
      <ServiceWrapper>
        <Container>
          {sneakers.length === 0 && (
            <EmptyText>
              진행중인 드로우가 없습니다!<br />
              <span>No available draws at the time</span>
            </EmptyText>
          )}
          {sneakers.map((sneaker, index) => (
            <CalendarCard key={`sneaker-${index}`} {...sneaker} />
          ))}
        </Container>
      </ServiceWrapper>
      <SafeArea bottom />
    </>
  );
};

export default HomePage;

const Container = styled.div`
  padding: 16px 0;
  width: 100%;
  height: 100%;
`;

const EmptyText = styled.h1`
  margin-top: 32px;
  text-align: center;
  font-size: 24px;
  line-height: 1.4;

  @media screen and (max-width: 450px) {
    font-size: 18px;
  }

  span {
    font-size: 85%;
    color: rgba(0, 0, 0, 0.65);
  }
`
