import styled from 'styled-components';

export const TrayectoriaSection = styled.section`
  width: 100%;
  padding: 80px 8%;
  background-color: #f5f4f0;
  box-sizing: border-box;
`;

/* Encabezado con línea superior sutil */
export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin-bottom: 50px;
`;

export const SectionTag = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #888888;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 12px;
`;

export const MainTitle = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3rem;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 16px;
  justify-content: center;
  text-align: center;
`;

export const MainSubtitle = styled.p`
  font-size: 1.05rem;
  color: #666666;
  
  line-height: 1.6;
  justify-content: center;
  text-align: center;
`;

/* Grid en 2 columnas principales */
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

/* Columna de Línea de Tiempo (Timeline) */
export const TimelineColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  /* Línea vertical continua */
  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 8px;
    bottom: 24px;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* Punto / Nodo en la línea de tiempo */
export const TimelineDot = styled.div`
  position: absolute;
  left: -20px;
  top: 6px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${props => (props.$active ? '#d95338' : '#888888')};
  box-shadow: 0 0 0 3px #f5f4f0; /* Espacio sutil alrededor del punto */
`;

export const YearTag = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${props => (props.$active ? '#d95338' : '#888888')};
  margin-bottom: 6px;
  display: block;
`;

export const DegreeTitle = styled.h3`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`;

export const Institution = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #d95338;
  display: block;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.p`
  font-size: 0.95rem;
  color: #666666;
  line-height: 1.5;
  margin: 0;
`;

/* Columna Derecha: Tarjeta de Certificaciones */
export const CertCardColumn = styled.div`
  width: 100%;
`;

export const CertCard = styled.div`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 32px 28px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.04);
`;

export const CardCategoryTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #999999;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 18px;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

export const Badge = styled.span`
  background-color: #f0eee9;
  color: #333333;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;