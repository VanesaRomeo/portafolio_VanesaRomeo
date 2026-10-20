
import { AboutImage } from './AboutStyles';
import {
  AboutSection,
  LeftColumn,
  RightColumn,
  Badge,
  Title,
  Subtitle,
  ButtonContainer,
  NavLinkStyled,
  LocationTag,
  AboutCard,
  BadgesExperienceContainer, 
  Badgeporta
  } from './AboutStyles';

export const About = () => {
  return (
    <AboutSection>
      <LeftColumn>
        <Badgeporta>PORTAFOLIO — DESARROLLO FRONT-END</Badgeporta>
        
        <Title>
          Sobre <br />
          Mí
        </Title>
        
        <Subtitle>
          Desarrolladora Frontend Junior con formación en Diseño Web, JavaScript y React.
           Cuento con proyectos integradores aprobados orientados a la 
           creación de sitios web modernos, responsivos y funcionales.
        </Subtitle>

        <ButtonContainer>
          <NavLinkStyled as="a" href="#proyectos">Mis Proyectos 
          </NavLinkStyled>
          <LocationTag>📍 San Luis, AR</LocationTag>
        </ButtonContainer>
      </LeftColumn>

      <RightColumn>
        <AboutCard>
         <AboutImage 
            // src={profileImage} 
            // alt="Vanesa Romeo" 
          />
         <BadgesExperienceContainer>
       <Badge>SIN EXPERIENCIA</Badge>
                   
       </BadgesExperienceContainer>
        </AboutCard>
      </RightColumn>
    </AboutSection>
  );
};