
import { LiaAddressCardSolid } from 'react-icons/lia';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
  FooterContainer,
 
  FooterContent,
  BrandSection,
  BrandIcon,
  BrandInfo,
  SocialLinks,
  SocialIconButton,
  DividerLine,
  CopyrightRow,
  SectionContact
} from './FooterStyles';

export const Footer = () => {
  return (
    <FooterContainer id="contacto">
      <SectionContact>04 — CONTACTO</SectionContact>
      {/* Contenido principal del footer */}
      <FooterContent>
        <BrandSection>
          <BrandIcon>
            <LiaAddressCardSolid size={22} />
          </BrandIcon>
          <BrandInfo>
            Vanesa Romeo — <span>📍 San Luis, AR</span>
          </BrandInfo>
        </BrandSection>

        {/* Redes sociales */}
        <SocialLinks>
          <SocialIconButton
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </SocialIconButton>
          
          <SocialIconButton
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </SocialIconButton>
        </SocialLinks>
      </FooterContent>

      <DividerLine />

      {/* Fila de derechos de autor */}
      <CopyrightRow>
        © {new Date().getFullYear()} Vanesa Romeo. Diseñado y desarrollado con React & Styled Components.
      </CopyrightRow>
    </FooterContainer>
  );
};