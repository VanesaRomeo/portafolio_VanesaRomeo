import styled from 'styled-components';

export const FooterContainer = styled.footer`
position: relative;
  width: 100%;
  background-color: #121212;
  color: #ffffff;
  /* El primer valor (30px) controla la distancia desde el borde superior */
  padding: 30px 8% 30px 8%; 
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

/* Texto gigante en marca de agua al fondo */
export const SectionContact = styled.h2`
font-size: 0.8rem;
  font-weight: 600;
  color: #888888;
  letter-spacing: 2px;
  display: block;
  margin-top: 0;           /* Elimina cualquier margen superior por defecto de h2 */
  margin-bottom: 32px;     /* Separa el 04 — CONTACTO de la fila de tu nombre */
  text-transform: uppercase;
`;


export const FooterContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const BrandIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

export const BrandInfo = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #ffffff;
  margin: 0;

  span {
    color: #888888;
    font-weight: 400;
    margin-left: 6px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SocialIconButton = styled.a`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #121212;
    transform: translateY(-3px);
  }
`;

export const DividerLine = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
  margin-bottom: 24px;
`;

export const CopyrightRow = styled.p`
  position: relative;
  z-index: 2;
  font-size: 0.8rem;
  color: #666666;
  margin: 0;
  text-align: left;
`;