# Pasta de Prévis de Projetos

Coloque aqui as imagens de prévia dos seus projetos.

## Como usar:

1. Adicione a imagem nesta pasta (`public/previews/`)
2. No arquivo `src/sections/Projects.jsx`, adicione no mapeamento `projectPreviewImages`:
   ```javascript
   const projectPreviewImages = {
     'nome-do-repositorio': '/previews/nome-da-imagem.jpg',
   }
   ```

## Formatos suportados:
- .jpg / .jpeg
- .png
- .webp
- .gif

## Exemplo:
- Imagem: `public/previews/passagens-relampago.jpg`
- Configuração: `'-Landing-Page-Passagens-Rel-mpago': '/previews/passagens-relampago.jpg'`

