import styled from 'styled-components';

export const ProyectosSection = styled.section`
  width: 100%;
  padding: 80px 8%;
  background-color: #f5f4f0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 50px 5%;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 50px;
  padding-top: 32px;
  border-top: 1px solid rgba(0, 0, 0, 0.12); 
  
`;

export const SectionTag = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #777777;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 3.5rem;
  font-weight: 400;
  color: #1a1a1a;
  margin-bottom: 16px;
  justify-content: center;
  text-align: center;

  // @media (max-width: 768px) {
  //   font-size: 2.5rem;
  // }
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #666666;
  // max-width: 600px;
  line-height: 1.6;
  justify-content: center;
  text-align: center;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
`;

export const Card = styled.article`
  background-color: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CardTech = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #888888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 12px;
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
`;

export const CardButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  text-align: center;
`;

export const LinkButton = styled.a`
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  background-color: ${props => props.primary ? '#1a1a1a' : 'transparent'};
  color: ${props => props.$primary ? '#ffffff' : '#1a1a1a'};
  border: ${props => props.$primary ? 'none' : '1px solid #1a1a1a'};

  &:hover {
    opacity: 0.85;
  }
`;