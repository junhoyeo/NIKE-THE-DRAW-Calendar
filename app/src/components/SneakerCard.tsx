import React from 'react';
import styled from 'styled-components';

export interface ISneakerCard {
  image: string;
  title: string;
  theme: string;
}

const SneakerCard: React.FC<ISneakerCard> = ({ image, title, theme }) => {
  return (
    <Container>
      <SneakerImage src={image} />
      <SneakerMeta>
        <SneakerTitle>{title}</SneakerTitle>
        <SneakerTheme>{theme}</SneakerTheme>
      </SneakerMeta>
    </Container>
  );
};

export default SneakerCard;

const Container = styled.div`
  position: relative;
  background-color: #f6f6f6;
  width: 256px;
  height: 300px;
  overflow: hidden;
  border-radius: 28px;
`;

const SneakerImage = styled.img`
  transform: rotate(-25deg);
  position: absolute;
  width: 256px;
  height: 256px;
  left: -32px;
  top: -36px;
`;

const SneakerMeta = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 24px;
  right: 24px;
  bottom: 24px;
  flex: 1;
`;

const SneakerTitle = styled.span`
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 1.2;
  color: #212529;
`;

const SneakerTheme = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #495057;
  line-height: 1.45;
`;
