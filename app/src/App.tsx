import React from 'react';
import styled from 'styled-components';

import CalendarCard from './components/CalendarCard';
import ServiceWrapper from './components/ServiceWrapper';

const App: React.FC = () => {
  return (
    <ServiceWrapper>
      <Container>
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
      </Container>
    </ServiceWrapper>
  );
};

export default App;

const Container = styled.div`
  padding: 16px 0;
  width: 100%;
  height: 100%;
`;
