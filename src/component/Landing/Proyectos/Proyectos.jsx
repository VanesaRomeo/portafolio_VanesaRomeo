
import { proyectosData} from './ProyectosData';
import {
  ProyectosSection,
  HeaderContainer,
  SectionTag,
  Title,
  Subtitle,
  ProjectsGrid,
  Card,
  CardImage,
  CardContent,
  CardTech,
  CardTitle,
  CardDescription,
  CardButtons,
  LinkButton
} from './ProyectosStyles';

export const Proyectos = () => {
  return (
    <ProyectosSection id="proyectos">
      <HeaderContainer>
        <SectionTag>01 — TRABAJOS</SectionTag>
        <Title>Proyectos seleccionados</Title>
        <Subtitle>
          Una selección de proyectos desarrollados durante mi formación, desde la maquetación inicial hasta el desarrollo con React.
        </Subtitle>
      </HeaderContainer>

      <ProjectsGrid>
        {proyectosData.map((proyecto) => (
          <Card key={proyecto.id}>
            <CardImage src={proyecto.imagen} alt={proyecto.titulo} />
            <CardContent>
              <CardTech>{proyecto.tecnologia}</CardTech>
              <CardTitle>{proyecto.titulo}</CardTitle>
              <CardDescription>{proyecto.descripcion}</CardDescription>
              <CardButtons>
                <LinkButton href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" >
                  Ver Demo
                </LinkButton>
                <LinkButton href={proyecto.linkGithub} target="_blank" rel="noopener noreferrer">
                  GitHub
                </LinkButton>
              </CardButtons>
            </CardContent>
          </Card>
        ))}
      </ProjectsGrid>
    </ProyectosSection>
  );
};