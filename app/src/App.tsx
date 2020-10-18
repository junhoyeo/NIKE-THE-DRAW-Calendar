import React from 'react';
import styled from 'styled-components';

import CalendarCard from './components/CalendarCard';
import ServiceWrapper from './components/ServiceWrapper';

import sneakers from './mockups/sneakers.json';

const App: React.FC = () => {
  return (
    <ServiceWrapper>
      <Container>
        {sneakers.map((sneaker, index) => (
          <CalendarCard key={`sneaker-${index}`} {...sneaker} />
        ))}
      </Container>
    </ServiceWrapper>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: calc(constant(safe-area-inset-bottom) + 16px);
  padding-bottom: calc(env(safe-area-inset-bottom) + 16px);
`;
