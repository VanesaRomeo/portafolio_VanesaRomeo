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
  padding-top: ${(props) => (props.$scrolled ? '0' : '20px')};
`;

export const FloatingNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150%;
  max-width: 1000px;
  padding: 10px 24px;
  border-radius: 40px;
  transition: all 0.3s ease-in-out;

  background-color: ${(props) => (props.$scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent')};
  backdrop-filter: ${(props) => (props.$scrolled ? 'blur(12px)' : 'none')};
  -webkit-backdrop-filter: ${(props) => (props.$scrolled ? 'blur(12px)' : 'none')};
  border: ${(props) => (props.$scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid transparent')};
  box-shadow: ${(props) => (props.$scrolled ? '0 8px 32px rgba(0, 0, 0, 0.08)' : 'none')};
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

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li``;

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
`;