# 📋 Guia de Configuração Completo

## 🔧 Configurações Necessárias

### 1. Informações Pessoais

#### Hero Section (`src/sections/Hero.jsx`)
- **Linha 95**: Substitua `[Seu Nome]` pelo seu nome
- **Linha 103**: Ajuste o título profissional se necessário
- **Linha 120**: Atualize o link do CV: `href="/cv.pdf"`

#### About Section (`src/sections/About.jsx`)
- **Linha 100**: Substitua a URL da imagem:
  ```jsx
  <img src="https://via.placeholder.com/300" alt="Foto de perfil" />
  ```
  Por:
  ```jsx
  <img src="/sua-foto.jpg" alt="Foto de perfil" />
  ```
  E coloque sua foto na pasta `public/`

- **Linhas 120-140**: Personalize os textos sobre você

### 2. GitHub API

#### Projects Section (`src/sections/Projects.jsx`)
- **Linha 30**: Substitua `'SEU_USERNAME'` pelo seu username do GitHub:
  ```jsx
  const username = 'seu-username-github'
  ```

### 3. EmailJS (Formulário de Contato)

#### Passo a passo:

1. **Crie uma conta no EmailJS**
   - Acesse: https://www.emailjs.com/
   - Crie uma conta gratuita

2. **Configure um serviço de email**
   - No dashboard, vá em "Email Services"
   - Escolha seu provedor (Gmail, Outlook, etc.)
   - Siga as instruções para conectar

3. **Crie um template**
   - Vá em "Email Templates"
   - Clique em "Create New Template"
   - Use este exemplo:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: Nova mensagem do portfólio
     
     Mensagem:
     {{message}}
     ```
   - Salve o template e anote o Template ID

4. **Obtenha sua Public Key**
   - Vá em "Account" > "General"
   - Copie sua Public Key

5. **Configure no código** (`src/sections/Contact.jsx`)
   - **Linha 50**: Substitua `YOUR_SERVICE_ID`
   - **Linha 51**: Substitua `YOUR_TEMPLATE_ID`
   - **Linha 52**: Substitua `YOUR_PUBLIC_KEY`

### 4. Redes Sociais

#### Contact Section (`src/sections/Contact.jsx`)
- **Linha 100**: WhatsApp - `https://wa.me/5511999999999` (formato: 55 + DDD + número)
- **Linha 105**: LinkedIn - `https://linkedin.com/in/seu-perfil`
- **Linha 110**: GitHub - `https://github.com/seu-username`
- **Linha 115**: Email - `mailto:seu@email.com`

#### Footer (`src/components/Footer.jsx`)
- Atualize os mesmos links nas linhas 20-35

### 5. SEO e Meta Tags

#### `index.html`
- **Linha 7**: Atualize a descrição
- **Linha 8**: Atualize as keywords
- **Linha 9**: Atualize o autor
- **Linha 10**: Atualize o título

### 6. Favicon

- Substitua `public/favicon.svg` pelo seu favicon personalizado
- Ou mantenha o atual que já está configurado

### 7. CV/Currículo

- Coloque seu arquivo PDF na pasta `public/`
- Nomeie como `cv.pdf` (ou atualize o link no Hero.jsx)

## 🎨 Personalização de Cores

Para alterar as cores do tema, edite `src/index.css`:

```css
:root {
  --bg-primary: #0a0a0f;        /* Cor de fundo principal */
  --bg-secondary: #0f0f1a;      /* Cor de fundo secundária */
  --accent-blue: #00d4ff;       /* Azul neon */
  --accent-purple: #b026ff;     /* Roxo neon */
  --text-primary: #ffffff;      /* Texto principal */
  --text-secondary: #a0a0b0;    /* Texto secundário */
}
```

## 📱 Testando Localmente

```bash
npm run dev
```

Acesse: http://localhost:5173

## 🚀 Deploy

Após configurar tudo, faça o build:

```bash
npm run build
```

A pasta `dist` estará pronta para deploy em qualquer plataforma:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

## ✅ Checklist Final

- [ ] Nome atualizado no Hero
- [ ] Foto de perfil adicionada
- [ ] Textos sobre você personalizados
- [ ] Username do GitHub configurado
- [ ] EmailJS configurado e testado
- [ ] Links das redes sociais atualizados
- [ ] CV adicionado na pasta public
- [ ] Meta tags do HTML atualizadas
- [ ] Favicon personalizado (opcional)
- [ ] Testado localmente
- [ ] Build realizado com sucesso

---

**Dúvidas?** Abra uma issue no repositório!

