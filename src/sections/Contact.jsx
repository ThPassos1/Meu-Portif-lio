import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'

const ContactSection = styled.section`
  min-height: 100vh;
  padding: clamp(2rem, 6vw, 5rem) 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const InfoTitle = styled.h3`
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: var(--text-primary);
  margin-bottom: 1rem;
`

const InfoText = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
  max-width: 450px;

  @media (max-width: 968px) {
    margin: 0 auto;
    text-align: center;
  }
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: clamp(0.8rem, 2vw, 1rem);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 10px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--accent-blue);
    box-shadow: 0 0 20px var(--glow-blue);
    transform: translateX(5px);
  }

  svg {
    font-size: 1.5rem;
    color: var(--accent-blue);
  }
`

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
  max-width: 450px;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: var(--text-primary);
  font-weight: 500;
  font-size: clamp(0.9rem, 1.8vw, 1rem);
`

const Input = styled.input`
  padding: clamp(0.8rem, 2vw, 1rem);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: clamp(0.9rem, 2vw, 1rem);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-blue);
    box-shadow: 0 0 10px var(--glow-blue);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`

const TextArea = styled.textarea`
  padding: clamp(0.8rem, 2vw, 1rem);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: clamp(0.9rem, 2vw, 1rem);
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-blue);
    box-shadow: 0 0 10px var(--glow-blue);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`

const SubmitButton = styled(motion.button)`
  padding: clamp(0.9rem, 2.5vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  border: none;
  border-radius: 50px;
  color: var(--text-primary);
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 0 20px var(--glow-blue);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 30px var(--glow-purple);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  width: 100%;
`

const Message = styled(motion.div)`
  padding: 0.9rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  font-size: clamp(0.85rem, 2vw, 1rem);

  &.success {
    background: rgba(0, 255, 0, 0.1);
    color: #00ff00;
    border: 1px solid rgba(0, 255, 0, 0.3);
  }

  &.error {
    background: rgba(255, 0, 0, 0.1);
    color: #ff4444;
    border: 1px solid rgba(255, 0, 0, 0.3);
  }
`

// Configuração EmailJS
const EMAILJS_SERVICE = 'service_eoogkp8'
const EMAILJS_TEMPLATE = 'template_9rtu8mi'
const EMAILJS_PUBLIC = 'wGh-QmzuTd8xhcG2Z'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    if (!formData.name || !formData.email || !formData.message) {
      setMessage({ type: 'error', text: 'Preencha todos os campos.' })
      setLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setMessage({ type: 'error', text: 'Por favor informe um email válido.' })
      setLoading(false)
      return
    }

    try {
      if (emailjs && emailjs.init) {
        try { emailjs.init(EMAILJS_PUBLIC) } catch {}
      }

      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'thiagopassos.dev@gmail.com',
          message: formData.message,
          reply_to: formData.email,
        }
      )

      setMessage({ type: 'success', text: 'Mensagem enviada com sucesso!' })
      setFormData({ name: '', email: '', message: '' })

    } catch (error) {
      setMessage({ type: 'error', text: 'Erro ao enviar mensagem. Tente novamente.' })
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/+559293627266' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/thiago-passos-2a8b93258' },
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ThPassos1' },
  ]

  return (
    <ContactSection id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Entre em Contato
      </SectionTitle>

      <ContactContainer>

        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <InfoTitle>Vamos conversar?</InfoTitle>
            <InfoText>
              Estou sempre aberto a novas oportunidades e projetos interessantes.
              Entre em contato através do formulário ou pelas redes sociais.
            </InfoText>
          </div>

          <SocialLinks>
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <SocialLink
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Icon />
                  <span>{link.name}</span>
                </SocialLink>
              )
            })}
          </SocialLinks>
        </ContactInfo>

        <Form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {message && (
            <Message
              className={message.type}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {message.text}
            </Message>
          )}

          <FormGroup>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Mensagem</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua mensagem..."
              required
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Enviando...' : (
              <>
                <FaPaperPlane /> Enviar Mensagem
              </>
            )}
          </SubmitButton>

        </Form>

      </ContactContainer>
    </ContactSection>
  )
}

export default Contact
