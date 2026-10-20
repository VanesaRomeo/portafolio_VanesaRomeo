
import {
  TrayectoriaSection,
  HeaderContainer,
  SectionTag,
  MainTitle,
  MainSubtitle,
  ContentGrid,
  TimelineColumn,
  TimelineItem,
  TimelineDot,
  YearTag,
  DegreeTitle,
  Institution,
  DescriptionText,
  CertCardColumn,
  CertCard,
  CardCategoryTitle,
  BadgesContainer,
  Badge
} from './FormacionStyles';

export const Formacion = () => {
  return (
    <TrayectoriaSection id="Formacion">
      {/* Encabezado con la línea superior sutil */}
      <HeaderContainer>
        <SectionTag>03 — TRAYECTORIA</SectionTag>
        <MainTitle>Formación Académica</MainTitle>
        <MainSubtitle>
          Mi recorrido de aprendizaje continuo, combinando educación universitaria y especializaciones técnicas en desarrollo web.
        </MainSubtitle>
      </HeaderContainer>

      {/* Grid: Columna izquierda con Timeline de 2 columnas / Columna derecha con Certificaciones */}
      <ContentGrid>
        {/* Línea de tiempo (Timeline) */}
        <TimelineColumn>
          {/* Hito 1: 2026 - Presente */}
          <TimelineItem>
            <TimelineDot $active />
            <YearTag $active>2026 — Presente</YearTag>
            <DegreeTitle>Tecnicatura de Desarrollo de Software</DegreeTitle>
            <Institution> Universitaria</Institution>
            <DescriptionText>
              Formación integral en estructuras de datos, arquitectura de software, bases de datos y metodologías de desarrollo.
            </DescriptionText>
          </TimelineItem>

          {/* Hito 2: 2022 */}
          <TimelineItem>
            <TimelineDot />
            <YearTag>2022</YearTag>
            <DegreeTitle>Desarrolladora Full-Stack</DegreeTitle>
            <Institution>NUCBA</Institution>
            <DescriptionText>
              Curso intensivo enfocado en el desarrollo de aplicaciones web complejas, maquetación avanzada, lógica en JavaScript y arquitectura backend.
            </DescriptionText>
          </TimelineItem>
        </TimelineColumn>

        {/* Tarjeta Derecha: Certificaciones de NUCBA */}
        <CertCardColumn>
          <CertCard>
            <CardCategoryTitle>Certificaciones por Lenguaje (NUCBA)</CardCategoryTitle>
            <BadgesContainer>
              <Badge>HTML5 & CSS3</Badge>
              <Badge>JavaScript ES6+</Badge>
              <Badge>React.js</Badge>
            
              <Badge>Bases de Datos (en revision)</Badge>
            </BadgesContainer>
          </CertCard>
        </CertCardColumn>
      </ContentGrid>
    </TrayectoriaSection>
  );
};