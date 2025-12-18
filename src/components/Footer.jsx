import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import styled from 'styled-components'

const FooterSection = styled.footer`
  padding: clamp(1.5rem, 4vw, 3rem) 2rem;
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  background: rgba(10, 10, 15, 0.5);
  backdrop-filter: blur(10px);
  margin-top: 3rem;
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1rem, 3vw, 2rem);
`

const SocialIcons = styled.div`
  display: flex;
  gap: clamp(1rem, 3vw, 2rem);
  flex-wrap: wrap;
  justify-content: center;
`

const SocialIcon = styled(motion.a)`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: var(--text-secondary);
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0.6rem; /* área tocável melhor em mobile */

  &:hover {
    color: var(--accent-blue);
    filter: drop-shadow(0 0 10px var(--glow-blue));
  }
`

const Copyright = styled.p`
  color: var(--text-secondary);
  text-align: center;
  font-size: clamp(0.75rem, 1vw, 0.9rem);
`

const MadeWith = styled.p`
  color: var(--text-secondary);
  text-align: center;
  font-size: clamp(0.7rem, 1vw, 0.85rem);

  span {
    color: var(--accent-blue);
    font-weight: 600;
  }
`

function Footer() {
  // 🔥 Agora você pode atualizar tudo aqui sem mexer no componente
  const PERSONAL_DATA = {
    name: 'Thiago Passos',
    github: 'https://github.com/ThPassos1',
    linkedin: 'https://linkedin.com/in/thiago-passos-2a8b93258',
    whatsapp: 'https://wa.me/559293627266',
    email: 'mailto:thiagopassos.dev@gmail.com',
  }

  const socialLinks = [
    { icon: FaGithub, url: PERSONAL_DATA.github, label: 'GitHub' },
    { icon: FaLinkedin, url: PERSONAL_DATA.linkedin, label: 'LinkedIn' },
    { icon: FaWhatsapp, url: PERSONAL_DATA.whatsapp, label: 'WhatsApp' },
    { icon: FaEnvelope, url: PERSONAL_DATA.email, label: 'Email' },
  ]

  return (
    <FooterSection>
      <FooterContainer>
        <SocialIcons>
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <SocialIcon
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.93 }}
              >
                <Icon />
              </SocialIcon>
            )
          })}
        </SocialIcons>

        <Copyright>
          © {new Date().getFullYear()} {PERSONAL_DATA.name}. Todos os direitos reservados.
        </Copyright>

        <MadeWith>
          Feito com <span>React</span> e muito <span>☕</span>
        </MadeWith>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
