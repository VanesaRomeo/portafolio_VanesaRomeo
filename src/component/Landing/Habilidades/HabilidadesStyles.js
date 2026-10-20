import styled from 'styled-components';

export const HabilidadesSection = styled.section`
  width: 100%;
  padding: 80px 8%;
  background-color: #f5f4f0;
  box-sizing: border-box;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 50px;
  padding-top: 32px;
    border-top: 1px solid rgba(0, 0, 0, 0.12); 
 
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
  font-size: 3.2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 16px;
  justify-content: center;
  text-align: center;
`;

export const MainSubtitle = styled.p`
  font-size: 1.05rem;
  color: #666666;
//   max-width: 650px;
  line-height: 1.6;
  justify-content: center;
  text-align: center;
`;

/* Distribución en 2 Columnas */
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

/* Columna Izquierda: Lista limpia */
export const LeftList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  padding: 24px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

export const ItemNumber = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #888888;
  margin-bottom: 6px;
  display: block;
`;

export const ItemTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

export const ItemDescription = styled.p`
  font-size: 0.95rem;
  color: #666666;
  line-height: 1.5;
`;

/* Columna Derecha: Tarjeta Unificada */
export const RightColumn = styled.div`
  width: 100%;
`;

export const SkillsCard = styled.div`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 36px 30px;
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

/* Globitos / Pastillas */
export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

/* Lista de Idiomas */
export const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LanguageRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LanguageName = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #222222;
`;

export const LanguageLevel = styled.span`
  font-size: 0.85rem;
  color: #777777;
`;