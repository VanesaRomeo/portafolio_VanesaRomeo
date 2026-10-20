
import {
  HabilidadesSection,
  HeaderContainer,
  SectionTag,
  MainTitle,
  MainSubtitle,
  ContentGrid,
  LeftList,
  ItemContainer,
  ItemNumber,
  ItemTitle,
  ItemDescription,
  RightColumn,
  SkillsCard,
  CardCategoryTitle,
  BadgesContainer,
  Badge,
  LanguagesContainer,
  LanguageRow,
  LanguageName,
  LanguageLevel
} from './HabilidadesStyles';

export const Habilidades = () => {
  return (
    <HabilidadesSection id="habilidades">
      {/* Encabezado Superior */}
      <HeaderContainer>
        <SectionTag>02 — HABILIDADES</SectionTag>
        <MainTitle>Servicios y herramientas</MainTitle>
        <MainSubtitle>
          Desarrollo de interfaces accesibles, escalables y funcionales adaptadas a las necesidades del proyecto.
        </MainSubtitle>
      </HeaderContainer>

      {/* Grid en 2 Columnas */}
      <ContentGrid>
        {/* Columna Izquierda: Lista de Servicios/Puntos */}
        <LeftList>
          <ItemContainer>
            <ItemNumber>01</ItemNumber>
            <ItemTitle>EXPERIENCIA</ItemTitle>
            <ItemDescription>
             Aunque aun no cuento con experiencia laboral formal en el area, desarrolle proyectos practicos durante mi formacion, aplicando conocimientos de disenio web, maquetacion, JavaScript y React JS.
Estos proyectos me permitieron adquirir practica en la creacion de nterfaces web, resolucion de problemas, organizacion del codigo y adaptacion de sitios a distintos dispositivos.
            </ItemDescription>
          </ItemContainer>

          <ItemContainer>
            <ItemNumber>02</ItemNumber>
            <ItemTitle>OBJETIVO LABORAL</ItemTitle>
            <ItemDescription>
             Busco mi primera oportunidad laboral como Desarrolladora Frontend Junior, Diseniadora WebJunior o Maquetadora Web, donde pueda aplicar mis conocimientos en HTML, CSS, JavaScript y ReactJS,continuar aprendiendo y desarrollarme profesionalmente dentro del area tecnologica.

            </ItemDescription>
          </ItemContainer>

          <ItemContainer>
            <ItemNumber>03</ItemNumber>
            <ItemTitle>Optimización & Accesibilidad</ItemTitle>
            <ItemDescription>
              Buenas prácticas HTML5, estructuras accesibles y tiempos de carga eficientes.
            </ItemDescription>
          </ItemContainer>
        </LeftList>

        {/* Columna Derecha: Tarjeta Contenedora */}
        <RightColumn>
          <SkillsCard>
            {/* Bloque Superior: Herramientas */}
            <CardCategoryTitle>HERRAMIENTAS</CardCategoryTitle>
            <BadgesContainer>
              <Badge>HTML5</Badge>
              <Badge>CSS3</Badge>
              <Badge>JavaScript</Badge>
               <Badge>React</Badge>
              <Badge>Java</Badge>
              <Badge>Python</Badge>
              <Badge>NetBeans64</Badge>
              <Badge>GitBash</Badge>
              <Badge>GitHub</Badge>
              <Badge>Figma</Badge>
            </BadgesContainer>

            {/* Bloque Inferior: Idiomas */}
            <CardCategoryTitle style={{ marginTop: '30px' }}>IDIOMAS</CardCategoryTitle>
            <LanguagesContainer>
              <LanguageRow>
                <LanguageName>Español</LanguageName>
                <LanguageLevel>Nativo</LanguageLevel>
              </LanguageRow>
              <LanguageRow>
                <LanguageName>Inglés</LanguageName>
                <LanguageLevel>Técnico / Intermedio</LanguageLevel>
              </LanguageRow>
            </LanguagesContainer>
          </SkillsCard>
        </RightColumn>
      </ContentGrid>
    </HabilidadesSection>
  );
};