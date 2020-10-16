import React from 'react';
import styled from 'styled-components';

const EXAMPLE_SNEAKER_IMAGE =
  'https://camo.githubusercontent.com/a76aef49dbc60fd84d194c69f59adc3a792fc2c3/68747470733a2f2f7374617469632d627265657a652e6e696b652e636f2e6b722f6b722f6b6f5f6b722f636d737374617469632f70726f647563742f4441323535332d3830302f66636239626465372d666130652d346438342d613133312d6239616637396633333963325f7072696d6172792e6a70673f67616c6c657279';

interface ISneakerCard {}

const SneakerCard: React.FC<ISneakerCard> = () => {
  return (
    <Container>
      <SneakerImage src={EXAMPLE_SNEAKER_IMAGE} />
      <SneakerMeta>
        <SneakerTitle>줌 '92 X UNION LA</SneakerTitle>
        <SneakerTheme>"GUAVA ICE"</SneakerTheme>
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
  left: -20px;
  top: -26px;
`;

const SneakerMeta = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 24px;
  bottom: 24px;
  line-height: 1.45;
`;

const SneakerTitle = styled.span`
  font-weight: 900;
  font-size: 1.25rem;
  color: #212529;
`;

const SneakerTheme = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #495057;
`;
