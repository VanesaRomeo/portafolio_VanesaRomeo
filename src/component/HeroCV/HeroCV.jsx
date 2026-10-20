
// import React from 'react';

import {Lottie} from 'lottie-react';
import cvAnimation from "../../assets/cv-animation.json";
import {
  HeroSection,
  LeftColumn,
  RightColumn,
  Badge,
  Title,
  Subtitle,
  ButtonContainer,
  PrimaryButton,
  LocationTag,
  CVCard
} from './HeroCVStyles';


  export const HeroCV = ({ onEnterPortafolio }) => {
  return (
    <HeroSection>
      <LeftColumn>
        <Badge>PORTAFOLIO — DESARROLLO FRONT-END</Badge>
        
        <Title>
          Curriculum <br />
          Vitae
        </Title>
        
        <Subtitle>
          Vanesa Romeo —Desarrolladora Frontend Junior | Diseñadora Web
        </Subtitle>

        <ButtonContainer>
          <PrimaryButton onClick={onEnterPortafolio}>
            Ver el portafolio →
          </PrimaryButton>
          <LocationTag>📍 San Luis, AR</LocationTag>
        </ButtonContainer>
      </LeftColumn>

      <RightColumn>
        <CVCard>
          <Lottie 
           src={cvAnimation}
  autoplay
  loop
  style={{ width: '100%', height: '100%' }}
          />
        </CVCard>
      </RightColumn>
    </HeroSection>
  );
};