import React from 'react';
import MobileSizedView from 'react-mobile-sized-view';
import styled from 'styled-components';

import useWindowSize from '@/utils/useWindowSize';

const ServiceWrapper: React.FC = ({ children }) => {
  const { width = 1980 } = useWindowSize();
  if (width <= 500) {
    return <>{children}</>;
  }

  return (
    <MobileSizedView
      backgroundColor="#EFEFEF"
      screenBackgroundColor="#FFFFFF"
      screenLightShadow="-31px -31px 62px #E9E9E9"
      screenDarkShadow="31px 31px 62px #DDDDDD"
    >
      <ContentWrapper id="content-wrapper">{children}</ContentWrapper>
    </MobileSizedView>
  );
};

export default ServiceWrapper;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  scroll-behavior: smooth;
  min-height: 100vh;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
