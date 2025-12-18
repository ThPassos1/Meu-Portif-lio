# 💡 Exemplos e Dicas

## 📦 Adicionar Projetos Manuais

Se quiser adicionar projetos que não estão no GitHub, você pode modificar o componente `Projects.jsx`:

```jsx
// Adicione após a linha 30
const manualProjects = [
  {
    id: 'manual-1',
    name: 'Meu Projeto Incrível',
    description: 'Descrição detalhada do projeto...',
    language: 'React',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    html_url: 'https://github.com/user/repo',
    homepage: 'https://meu-projeto.com',
    image: '/projeto-image.jpg'
  }
]

// E depois combine com os repos do GitHub:
const allProjects = [...manualProjects, ...repos]
```

## 🎨 Adicionar Mais Skills

Para adicionar mais skills em `Skills.jsx`, simplesmente adicione ao array:

```jsx
const skills = [
  // ... skills existentes
  { name: 'Vue.js', icon: SiVuejs },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Docker', icon: SiDocker },
]
```

## 🌈 Personalizar Animações

Você pode ajustar as animações do Framer Motion em qualquer componente:

```jsx
// Animação mais rápida
transition={{ duration: 0.3 }}

// Animação mais lenta
transition={{ duration: 1 }}

// Delay maior
transition={{ delay: 0.5 }}

// Efeito de bounce
transition={{ type: "spring", stiffness: 100 }}
```

## 🎯 Adicionar Seções Extras

Para adicionar uma nova seção (ex: Blog, Certificados):

1. Crie o arquivo: `src/sections/Blog.jsx`
2. Importe no `App.jsx`:
   ```jsx
   import Blog from './sections/Blog'
   ```
3. Adicione no JSX:
   ```jsx
   <Blog />
   ```
4. Adicione o link na Navbar:
   ```jsx
   { name: 'Blog', href: '#blog' }
   ```

## 🔧 Modo Claro/Escuro (Opcional)

Para adicionar toggle de tema, você pode:

1. Criar um contexto de tema
2. Adicionar variáveis CSS para modo claro
3. Criar um botão toggle na Navbar

Exemplo básico:

```jsx
// src/context/ThemeContext.jsx
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

## 📊 Adicionar Estatísticas

Você pode adicionar uma seção de estatísticas do GitHub:

```jsx
// Exemplo de componente de stats
const [stats, setStats] = useState(null)

useEffect(() => {
  fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => setStats(data))
}, [])
```

## 🎬 Adicionar Vídeos

Para adicionar vídeos de demonstração:

```jsx
<iframe
  width="100%"
  height="400"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameBorder="0"
  allowFullScreen
/>
```

## 🔍 Melhorar SEO

Adicione mais meta tags no `index.html`:

```html
<meta property="og:title" content="Seu Nome - Desenvolvedor Web" />
<meta property="og:description" content="Portfólio profissional..." />
<meta property="og:image" content="/og-image.jpg" />
<meta property="og:url" content="https://seusite.com" />
<meta name="twitter:card" content="summary_large_image" />
```

## 🚀 Performance

Para melhorar a performance:

1. **Lazy Loading de imagens:**
   ```jsx
   <img loading="lazy" src="..." />
   ```

2. **Code Splitting:**
   ```jsx
   const Projects = lazy(() => import('./sections/Projects'))
   ```

3. **Otimizar partículas:**
   - Reduza o número de partículas em `Hero.jsx`
   - Ajuste `value: 50` para um número menor

## 📱 PWA (Progressive Web App)

Para tornar o portfólio um PWA:

1. Instale: `npm install vite-plugin-pwa -D`
2. Configure no `vite.config.js`
3. Adicione um `manifest.json`

---

**Dica:** Sempre teste as mudanças localmente antes de fazer deploy!

