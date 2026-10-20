import styled from 'styled-components';

// Contenedor principal de la sección About
export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 85vh;
  padding: 60px 8%;
  background-color: #f5f4f0; /* Tono cálido/neutro de fondo */
  gap: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 40px 5%;
    text-align: center;
  }
`;

export const Badgeporta = styled.span`
 font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #555;
  background-color: #e5e3dd;
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 24px;
  text-transform: uppercase;
`;
export const NavLinkStyled = styled.a`
  text-decoration: none;
  color: #555555;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: #1a1a1a;
  }
`;

// Columna izquierda para textos y CTA
export const LeftColumn = styled.div`
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

// Etiqueta superior
export const Badge = styled.span`
 position: absolute;
  bottom:10PX;
  left: 10px;
  
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #555;
  background-color: #e5e3dd;
  padding: 6px 14px;
  border-radius: 20px;
  text-transform: uppercase;
`;
export const BadgesExperienceContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* flex-start en lugar de left */
  align-items: flex-start;     /* flex-start en lugar de left */
  flex-wrap: wrap;
  gap: 20px;
`;


// Título principal con estilo editorial
export const Title = styled.h1`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4.2rem;
  line-height: 1.1;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
`;

// Bajada / Subtítulo
export const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 32px;
`;

// Contenedor de botones y ubicación
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Botón principal
export const PrimaryButton = styled.button`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 30px;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #333333;
    transform: translateY(-2px);
  }
`;

// Etiqueta de ubicación
export const LocationTag = styled.span`
  font-size: 0.9rem;
  color: #666;
`;

// Columna derecha para la animación
export const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// Tarjeta que envuelve la animación Lottie
export const AboutCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  min-height: 300px; /* Le da espacio visible si el SVG tarda en renderizar */
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilo para ajustar la imagen dentro de la tarjeta
export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 380px;
  object-fit: cover;
  border-radius: 12px;
`;

