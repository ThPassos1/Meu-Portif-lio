import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import { Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { FaDownload, FaCode } from 'react-icons/fa'
import styled from 'styled-components'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
  z-index: 2;

  @media (max-width: 480px) {
    min-height: 90vh;
  }
`

// 🔥 Partículas agora cobrem toda a página
const ParticlesContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
`

const Content = styled(motion.div)`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--accent-blue);
  margin-bottom: 1rem;
  font-weight: 500;
`

const Name = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px var(--glow-blue);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 300;
`

const Buttons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`

const Button = styled(motion.a)`
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;

  &.primary {
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  }

  &.secondary {
    border: 2px solid var(--accent-blue);
  }
`

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <HeroSection id="home">

      {/* 🔥 partículas cobrindo tudo */}
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            particles: {
              number: { value: 60, density: { enable: true, area: 800 } },
              move: { enable: true, speed: 1, outModes: { default: "bounce" } },
              links: {
                color: "#00d4ff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              size: { value: { min: 1, max: 3 } },
              color: { value: ["#00d4ff", "#b026ff"] },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                push: { quantity: 3 },
                repulse: { distance: 150 },
              },
            },
          }}
        />
      </ParticlesContainer>

      {/* conteúdo */}
      <Content>
        <Greeting>Olá, eu sou</Greeting>
        <Name>Thiago Passos</Name>
        <Title>Desenvolvedor Web Full Stack</Title>

        <Buttons>
          <Button href="#projects" className="primary"><FaCode /> Ver Projetos</Button>
          <Button href="/Curr%C3%ADculo_Thiago_Almeida.pdf" download className="secondary"><FaDownload /> Baixar CV</Button>
        </Buttons>
      </Content>
    </HeroSection>
  )
}

export default Hero
