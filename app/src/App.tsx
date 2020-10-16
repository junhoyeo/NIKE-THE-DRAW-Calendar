import React from 'react';
import styled from 'styled-components';

import ServiceWrapper from './components/ServiceWrapper';
import SneakerCard from './components/SneakerCard';

const App: React.FC = () => {
  return (
    <ServiceWrapper>
      <SneakerCardList>
        <SneakerCard />
      </SneakerCardList>
    </ServiceWrapper>
  );
};

export default App;

const SneakerCardList = styled.div`
  margin-top: 16px;
`;
