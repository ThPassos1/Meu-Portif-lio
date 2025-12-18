import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa'
import styled from 'styled-components'

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: clamp(2rem, 6vw, 5rem) 2rem;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: clamp(1rem, 2vw, 2rem);
`

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border-color: var(--accent-blue);
    box-shadow: 0 0 30px var(--glow-blue);
    transform: translateY(-4px);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: clamp(150px, 30vw, 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallback-icon {
    font-size: clamp(2.2rem, 4vw, 3rem);
    opacity: 0.85;
  }
`

const ProjectContent = styled.div`
  padding: clamp(1rem, 2vw, 1.5rem);
`

const ProjectTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
`

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const TechTag = styled.span`
  background: rgba(0, 212, 255, 0.1);
  color: var(--accent-blue);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: clamp(0.7rem, 1.6vw, 0.85rem);
  border: 1px solid rgba(0, 212, 255, 0.3);
`

const ProjectStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 1vw, 1rem);
  color: var(--text-secondary);
  font-size: clamp(0.75rem, 1.8vw, 0.9rem);
  margin-bottom: 1rem;
`

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: clamp(0.7rem, 1.5vw, 1rem);
  flex-wrap: wrap;
`

const LinkButton = styled.a`
  flex: 1;
  padding: clamp(0.6rem, 2vw, 0.8rem);
  border-radius: 8px;
  text-decoration: none;
  font-size: clamp(0.8rem, 1.8vw, 0.95rem);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: 0.3s ease;

  &.github {
    background: rgba(0, 212, 255, 0.1);
    color: var(--accent-blue);
    border-color: var(--accent-blue);

    &:hover {
      background: var(--accent-blue);
      color: var(--bg-primary);
      box-shadow: 0 0 20px var(--glow-blue);
      transform: translateY(-3px);
    }
  }

  &.demo {
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
    color: var(--text-primary);

    &:hover {
      box-shadow: 0 0 20px var(--glow-purple);
      transform: translateY(-3px);
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-secondary);
    }
  }
`

const Loading = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  font-size: clamp(1rem, 2vw, 1.2rem);
`

const Error = styled.div`
  text-align: center;
  padding: 3rem;
  color: #ff4444;
  font-size: clamp(1rem, 2vw, 1.2rem);
`

// URLs de deploy de projetos específicos
const projectDeployUrls = {
  '-Landing-Page-Passagens-Rel-mpago':
    'https://thpassos1.github.io/-Landing-Page-Passagens-Rel-mpago/',
}

// Imagens de prévias dos projetos
const projectPreviewImages = {
  '-Landing-Page-Passagens-Rel-mpago':
    '/previews/-Landing-Page-Passagens-Rel-mpago.png',
}

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const username = 'ThPassos1'
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        )
        if (!response.ok) throw new Error('Erro ao buscar repositórios')
        const data = await response.json()
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#F7DF1E',
      TypeScript: '#3178C6',
      React: '#61DAFB',
      PHP: '#777BB4',
      Python: '#3776AB',
      Java: '#ED8B00',
      default: '#00d4ff',
    }
    return colors[language] || colors.default
  }

  const getDeployUrl = (repo) => {
    if (repo.homepage) return repo.homepage
    if (projectDeployUrls[repo.name]) return projectDeployUrls[repo.name]
    return null
  }

  const getPreviewImage = (repo) => {
    return projectPreviewImages[repo.name] || null
  }

  if (loading) {
    return (
      <ProjectsSection id="projects">
        <SectionTitle>Meus Projetos</SectionTitle>
        <Loading>Carregando projetos...</Loading>
      </ProjectsSection>
    )
  }

  if (error) {
    return (
      <ProjectsSection id="projects">
        <SectionTitle>Meus Projetos</SectionTitle>
        <Error>Erro ao carregar projetos. Verifique seu GitHub.</Error>
      </ProjectsSection>
    )
  }

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Meus Projetos
      </SectionTitle>

      <ProjectsGrid>
        {repos.map((repo, index) => (
          <ProjectCard
            key={repo.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ scale: 1.02 }}
          >
            <ProjectImage>
              {getPreviewImage(repo) ? (
                <img
                  src={getPreviewImage(repo)}
                  alt={`Preview de ${repo.name}`}
                  onError={(e) => (e.target.style.display = 'none')}
                />
              ) : (
                <div className="fallback-icon">
                  <FaCodeBranch />
                </div>
              )}
            </ProjectImage>

            <ProjectContent>
              <ProjectTitle>{repo.name}</ProjectTitle>

              <ProjectDescription>
                {repo.description || 'Projeto sem descrição'}
              </ProjectDescription>

              <ProjectTech>
                {repo.language && (
                  <TechTag
                    style={{ borderColor: getLanguageColor(repo.language) }}
                  >
                    {repo.language}
                  </TechTag>
                )}
              </ProjectTech>

              <ProjectStats>
                <Stat>
                  <FaStar /> {repo.stargazers_count}
                </Stat>
                <Stat>
                  <FaCodeBranch /> {repo.forks_count}
                </Stat>
                <Stat>
                  Atualizado: {new Date(repo.updated_at).toLocaleDateString()}
                </Stat>
              </ProjectStats>

              <ProjectLinks>
                {getDeployUrl(repo) ? (
                  <LinkButton
                    href={getDeployUrl(repo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo"
                  >
                    <FaExternalLinkAlt /> Ver Online
                  </LinkButton>
                ) : (
                  <LinkButton className="demo disabled">
                    <FaExternalLinkAlt /> Ver Online
                  </LinkButton>
                )}

                <LinkButton
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github"
                >
                  <FaGithub /> Código
                </LinkButton>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  )
}

export default Projects
