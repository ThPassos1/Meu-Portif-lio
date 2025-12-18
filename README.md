# 🚀 Portfólio Profissional - Desenvolvedor Web

Portfólio moderno e hi-tech desenvolvido com React, apresentando uma estética futurista com dark mode, efeitos glow e animações suaves.

## ✨ Características

- 🎨 Design futurista e minimalista
- 🌙 Dark mode premium
- ✨ Efeitos glow sutis (azul e roxo neon)
- 🎭 Animações suaves com Framer Motion
- 📱 100% responsivo
- 🔗 Integração com GitHub API
- 📧 Formulário de contato funcional
- ⚡ Performance otimizada

## 🛠️ Tecnologias

- **React** - Biblioteca JavaScript
- **Vite** - Build tool
- **Framer Motion** - Animações
- **Styled Components** - Estilização
- **React Icons** - Ícones
- **TSParticles** - Partículas animadas
- **EmailJS** - Envio de emails

## 📦 Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre no diretório
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## ⚙️ Configuração

### 1. Personalize suas informações

#### No arquivo `src/sections/Hero.jsx`:
- Substitua `[Seu Nome]` pelo seu nome
- Ajuste o título profissional

#### No arquivo `src/sections/About.jsx`:
- Adicione sua foto de perfil (substitua a URL do placeholder)
- Personalize o texto sobre você

#### No arquivo `src/sections/Projects.jsx`:
- Substitua `'SEU_USERNAME'` pelo seu username do GitHub

#### No arquivo `src/sections/Contact.jsx`:
- Configure o EmailJS:
  1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
  2. Crie um serviço de email
  3. Crie um template
  4. Substitua `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID` e `YOUR_PUBLIC_KEY`
- Atualize os links das redes sociais:
  - WhatsApp: `https://wa.me/SEU_NUMERO`
  - LinkedIn: `https://linkedin.com/in/SEU_PERFIL`
  - GitHub: `https://github.com/SEU_USERNAME`
  - Email: `mailto:seu@email.com`

#### No arquivo `src/components/Footer.jsx`:
- Atualize os links das redes sociais
- Substitua `[Seu Nome]` pelo seu nome

#### No arquivo `index.html`:
- Atualize as meta tags com suas informações
- Personalize o título

### 2. Adicione seu CV

Coloque seu arquivo CV em formato PDF na pasta `public` e atualize o link no botão "Baixar CV" em `src/sections/Hero.jsx`:

```jsx
<Button href="/cv.pdf" download>
```

### 3. Personalize o favicon

Substitua o arquivo `public/favicon.svg` pelo seu favicon personalizado.

## 🎨 Personalização de Cores

As cores principais estão definidas em `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #0f0f1a;
  --accent-blue: #00d4ff;
  --accent-purple: #b026ff;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deploy

```bash
npm run build
vercel
```

### Netlify

```bash
npm run build
# Faça upload da pasta dist
```

### GitHub Pages

1. Instale o plugin: `npm install --save-dev gh-pages`
2. Adicione ao `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Execute: `npm run deploy`

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

---

Desenvolvido com ❤️ usando React

