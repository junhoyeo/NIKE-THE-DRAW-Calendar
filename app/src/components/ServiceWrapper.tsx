import React from 'react';
import styled from 'styled-components';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ServiceWrapper;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const Container = styled.main`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
`;
