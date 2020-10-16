import React from 'react';
import styled from 'styled-components';
import MobileSizedView from 'react-mobile-sized-view';

const ServiceWrapper: React.FC = ({ children }) => {
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
