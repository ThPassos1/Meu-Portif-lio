# 🚀 Guia de Deploy

## Opção 1: GitHub Pages (Recomendado - Gratuito)

### Passo 1: Inicializar Git e criar repositório

```bash
# No diretório do projeto
cd portfolio

# Inicializar Git
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit - Portfolio"

# Criar repositório no GitHub (via site ou GitHub CLI)
# Depois, adicione o remote:
git remote add origin https://github.com/SEU_USERNAME/SEU_REPOSITORIO.git

# Fazer push
git branch -M main
git push -u origin main
```

### Passo 2: Configurar base path (se necessário)

Se seu repositório NÃO se chama "portfolio", edite `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/NOME_DO_SEU_REPOSITORIO/',
})
```

### Passo 3: Fazer deploy

```bash
npm run deploy
```

Isso irá:
1. Fazer build do projeto
2. Publicar na branch `gh-pages` do seu repositório

### Passo 4: Ativar GitHub Pages

1. Vá em Settings > Pages no seu repositório GitHub
2. Selecione a branch `gh-pages` como source
3. Seu site estará disponível em: `https://SEU_USERNAME.github.io/SEU_REPOSITORIO/`

---

## Opção 2: Vercel (Mais fácil - Gratuito)

### Via CLI:

```bash
# Instalar Vercel CLI
npm i -g vercel

# No diretório do projeto
cd portfolio

# Fazer deploy
vercel
```

### Via Site:

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Selecione o projeto
4. Deploy automático!

---

## Opção 3: Netlify (Gratuito)

### Via CLI:

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# No diretório do projeto
cd portfolio

# Fazer build
npm run build

# Fazer deploy
netlify deploy --prod --dir=dist
```

### Via Site:

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` (após `npm run build`)
3. Deploy instantâneo!

---

## Opção 4: Deploy Manual

Se preferir fazer deploy manual:

```bash
# Fazer build
npm run build

# A pasta 'dist' estará pronta para upload em qualquer servidor
```

---

## ⚠️ Importante antes do deploy:

- [ ] Configure seu nome no Hero
- [ ] Adicione sua foto de perfil
- [ ] Configure o username do GitHub
- [ ] Configure o EmailJS
- [ ] Atualize links das redes sociais
- [ ] Teste localmente com `npm run dev`

---

## 🔧 Troubleshooting

### Erro: "Failed to get remote.origin.url"
- Certifique-se de que o Git está inicializado
- Verifique se o remote está configurado: `git remote -v`

### Site não carrega corretamente
- Verifique o `base` no `vite.config.js`
- Certifique-se de que os assets estão sendo carregados corretamente

### Erro 404 no GitHub Pages
- Verifique se a branch `gh-pages` foi criada
- Verifique as configurações de Pages no GitHub

