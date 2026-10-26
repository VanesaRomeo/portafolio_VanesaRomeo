import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  position: ${(props) => (props.$scrolled ? 'fixed' : 'relative')};
  top: ${(props) => (props.$scrolled ? '16px' : '0')};
  left: 0;
  padding: ${(props) => (props.$scrolled ? '0 16px' : '20px 16px 0 16px')};
  box-sizing: border-box;
`;

export const FloatingNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 10px 24px;
  border-radius: ${(props) => (props.$isOpen ? '24px' : '40px')};
  transition: all 0.3s ease-in-out;
  position: relative;

  background-color: ${(props) =>
    props.$scrolled || props.$isOpen ? 'rgba(255, 255, 255, 0.92)' : 'transparent'};
  backdrop-filter: ${(props) => (props.$scrolled || props.$isOpen ? 'blur(12px)' : 'none')};
  -webkit-backdrop-filter: ${(props) => (props.$scrolled || props.$isOpen ? 'blur(12px)' : 'none')};
  border: ${(props) =>
    props.$scrolled || props.$isOpen
      ? '1px solid rgba(255, 255, 255, 0.5)'
      : '1px solid transparent'};
  box-shadow: ${(props) =>
    props.$scrolled || props.$isOpen ? '0 8px 32px rgba(0, 0, 0, 0.08)' : 'none'};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 12px 20px;
  }
`;

export const BrandContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 600;
  cursor: pointer;
`;

export const BrandName = styled.span`
  font-size: 0.95rem;
`;

// Botón Ícono Hamburguesa
export const MenuIconButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #1a1a1a;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Contenedor de enlaces adaptado a desplegable en móvil
export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    gap: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    margin-top: 10px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
`;

export const NavItem = styled.li`
  @media (max-width: 768px) {
    text-align: center;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
    display: block;
  }
`;

export const ContactButton = styled.a`
  text-decoration: none;
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 10px 18px;
  }
`;