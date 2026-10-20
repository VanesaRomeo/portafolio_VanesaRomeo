import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LiaAddressCardSolid } from 'react-icons/lia';
import {
  NavbarWrapper,
  FloatingNav,
  BrandContainer,
  BrandName,
  NavLinksContainer,
  NavMenu,
  NavItem,
  NavLinkStyled,
  ContactButton
} from './NavbarStyles';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activa el modo flotante cuando el scroll baja más de 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarWrapper $scrolled={isScrolled}>
      <FloatingNav $scrolled={isScrolled}>
        {/* Lado Izquierdo: Nombre e Ícono */}
        <BrandContainer as={Link} to="/">
          <LiaAddressCardSolid size={24} />
          <BrandName>Vanesa Romeo</BrandName>
        </BrandContainer>

        {/* Lado Derecho: Menú y Botón de Contacto */}
        <NavLinksContainer>
          <NavMenu>
  <NavItem>
    <NavLinkStyled as="a" href="#proyectos">Proyectos</NavLinkStyled>
  </NavItem>
  <NavItem>
    <NavLinkStyled as="a" href="#habilidades">Habilidades</NavLinkStyled>
  </NavItem>
  <NavItem>
    <NavLinkStyled as="a" href="#Formacion">Trayectoria</NavLinkStyled>
  </NavItem>
</NavMenu>

<ContactButton as="a" href="#contacto">
  Contacto
</ContactButton>

          
        </NavLinksContainer>
      </FloatingNav>
    </NavbarWrapper>
  );
};