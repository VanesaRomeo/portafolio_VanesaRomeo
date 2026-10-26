import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LiaAddressCardSolid } from 'react-icons/lia';
import { HiMenu, HiX } from 'react-icons/hi'; // Importamos íconos para la hamburguesa
import {
  NavbarWrapper,
  FloatingNav,
  BrandContainer,
  BrandName,
  NavLinksContainer,
  NavMenu,
  NavItem,
  NavLinkStyled,
  ContactButton,
  MenuIconButton
} from './NavbarStyles';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/cerrar menú hamburguesa

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <NavbarWrapper $scrolled={isScrolled}>
      <FloatingNav $scrolled={isScrolled} $isOpen={isOpen}>
        {/* Lado Izquierdo: Nombre e Ícono */}
        <BrandContainer as={Link} to="/" onClick={closeMenu}>
          <LiaAddressCardSolid size={24} />
          <BrandName>Vanesa Romeo</BrandName>
        </BrandContainer>

        {/* Botón Hamburguesa (solo visible en celular) */}
        <MenuIconButton onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menú">
          {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </MenuIconButton>

        {/* Lado Derecho: Menú desplegable */}
        <NavLinksContainer $isOpen={isOpen}>
          <NavMenu>
            <NavItem>
              <NavLinkStyled as="a" href="#proyectos" onClick={closeMenu}>
                Proyectos
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled as="a" href="#habilidades" onClick={closeMenu}>
                Habilidades
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled as="a" href="#Formacion" onClick={closeMenu}>
                Trayectoria
              </NavLinkStyled>
            </NavItem>
          </NavMenu>

          <ContactButton as="a" href="#contacto" onClick={closeMenu}>
            Contacto
          </ContactButton>
        </NavLinksContainer>
      </FloatingNav>
    </NavbarWrapper>
  );
};