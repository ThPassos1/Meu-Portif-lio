import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from 'react-icons/si'
import styled from 'styled-components'

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: clamp(2rem, 5vw, 5rem) 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: clamp(2rem, 5vw, 3rem);
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
  padding: 1rem 0;
`

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 15px;
  padding: clamp(1rem, 2.5vw, 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 1rem);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-blue);
    box-shadow: 0 0 30px var(--glow-blue);
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
  }
`

const SkillIcon = styled.div`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: var(--accent-blue);
  transition: 0.3s ease;

  ${SkillCard}:hover & {
    color: var(--accent-purple);
    transform: scale(1.1);
  }
`

const SkillName = styled.h3`
  font-size: clamp(0.85rem, 2vw, 1.1rem);
  color: var(--text-primary);
  font-weight: 600;
`

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PHP', icon: SiPhp },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'Git', icon: SiGit },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
]

function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Minhas Skills
      </SectionTitle>

      <SkillsGrid>
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <SkillCard
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              <SkillIcon>
                <Icon />
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          )
        })}
      </SkillsGrid>
    </SkillsSection>
  )
}

export default Skills
