import React from 'react';
import styled from 'styled-components';

import CalendarCard from './components/CalendarCard';
import ServiceWrapper from './components/ServiceWrapper';

const App: React.FC = () => {
  return (
    <ServiceWrapper>
      <Container>
        <CalendarCard />
      </Container>
    </ServiceWrapper>
  );
};

export default App;

const Container = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 100%;
`;
