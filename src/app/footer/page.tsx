"use client"
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Conteneur principal du footer
const FooterContainer = styled.footer`
    background-color: #f8f9fa;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
`;

// Style pour les différentes sections
const Section = styled.div`
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

// Liens vers les réseaux sociaux
const SocialLink = styled.a`
    margin: 0 1rem;
    font-size: 1.5rem;
    color: #333;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #007bff;
    }
`;

// Style des icônes et du texte
const ContactInfo = styled.p`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #333;
`;

export default function Footer() {
    return (
        <FooterContainer>
            {/* Section Réseaux sociaux */}
            <Section>
                <SocialLink href="#" aria-label="LinkedIn">
                    <FaLinkedin />
                </SocialLink>
                <SocialLink href="#" aria-label="GitHub">
                    <FaGithub />
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                    <FaTwitter />
                </SocialLink>
            </Section>

            {/* Section Informations de contact */}
            <Section>
                <ContactInfo>
                    <FaEnvelope /> <span>koulibalyamadou10@gmail.com</span>
                </ContactInfo>
                <ContactInfo>
                    <FaMapMarkerAlt /> <span>Ratoma Kiroty, Conakry, Guinée</span>
                </ContactInfo>
            </Section>

            {/* Section Droits d'auteur */}
            <Section>
                <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
            </Section>
        </FooterContainer>
    );
}
