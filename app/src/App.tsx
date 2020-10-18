import React from 'react';
import SafeArea from 'react-safe-area-component';
import styled from 'styled-components';

import CalendarCard from './components/CalendarCard';
import ServiceWrapper from './components/ServiceWrapper';

import sneakers from './mockups/sneakers.json';

const App: React.FC = () => {
  return (
    <SafeArea top bottom>
      <ServiceWrapper>
        <Container>
          {sneakers.map((sneaker, index) => (
            <CalendarCard key={`sneaker-${index}`} {...sneaker} />
          ))}
        </Container>
      </ServiceWrapper>
    </SafeArea>
  );
};

export default App;

const Container = styled.div`
  padding: 16px 0;
  width: 100%;
  height: 100%;
`;
