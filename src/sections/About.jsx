import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const AboutSection = styled.section`
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 5rem) 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileImage = styled(motion.div)`
  width: clamp(200px, 30vw, 360px);
  height: clamp(200px, 30vw, 360px);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  padding: 5px;
  position: relative;
  box-shadow: 0 0 40px var(--glow-blue);

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--bg-primary);
  }

  &::before {
    content: '';
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
    opacity: 0.3;
    filter: blur(20px);
    z-index: -1;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }
`

const Content = styled(motion.div)`
  flex: 1;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Text = styled(motion.p)`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const Highlight = styled.span`
  color: var(--accent-blue);
  font-weight: 600;
`

function About() {
  return (
    <AboutSection id="about">

      <ImageContainer
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ProfileImage whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <img src={`${import.meta.env.BASE_URL}perfil.jpeg`} alt="Foto de perfil" />
        </ProfileImage>
      </ImageContainer>

      <Content>
        <SectionTitle
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre Mim
        </SectionTitle>

        <Text
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sou um desenvolvedor web apaixonado por criar soluções inovadoras e
          eficientes. Com experiência em <Highlight>React</Highlight>,{' '}
          <Highlight>JavaScript/TypeScript</Highlight>,{' '}
          <Highlight>Node.js</Highlight> e <Highlight>PHP/Laravel</Highlight>,
          busco sempre entregar produtos de alta qualidade.
        </Text>

        <Text
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Minha trajetória inclui desenvolvimento de aplicações web modernas,
          APIs RESTful, integração com bancos de dados e implementação de
          interfaces responsivas e intuitivas. Estou sempre em busca de novos
          desafios e oportunidades de aprendizado.
        </Text>

        <Text
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Foco em escrever código limpo, escalável e bem documentado, sempre
          priorizando a experiência do usuário e as melhores práticas de
          desenvolvimento.
        </Text>
      </Content>

    </AboutSection>
  )
}

export default About
