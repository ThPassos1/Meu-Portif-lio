import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 2rem;
  backdrop-filter: blur(10px);
  background: ${(props) =>
    props.scrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent'};
  border-bottom: ${(props) =>
    props.scrolled ? '1px solid rgba(0, 212, 255, 0.2)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(6px);
    z-index: 900;
  }
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.a)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const NavLinks = styled(motion.ul)`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    height: 100vh;
    width: 70%;
    min-width: 250px;
    background: rgba(10, 10, 15, 0.98);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    backdrop-filter: blur(20px);
    border-left: 1px solid rgba(0, 212, 255, 0.2);
    z-index: 950;
    padding: 2rem 1rem;
  }
`

const NavLink = styled(motion.li)`
  a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;
    padding: 0.5rem 0.2rem;

    &:hover {
      color: var(--accent-blue);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.4rem;

  @media (max-width: 768px) {
    display: block;
  }
`

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Impede scroll quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <Nav
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavContainer>
          <Logo
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {'<Meu portfólio/>'}
          </Logo>

          <NavLinks isOpen={isOpen}>
            {navItems.map((item, index) => (
              <NavLink
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={item.href} onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              </NavLink>
            ))}
          </NavLinks>

          <MenuToggle onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuToggle>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar
