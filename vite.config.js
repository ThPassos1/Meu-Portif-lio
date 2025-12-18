import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Se você estiver fazendo deploy no GitHub Pages com um repositório nomeado diferente de 'portfolio',
// descomente a linha abaixo e substitua 'portfolio' pelo nome do seu repositório
// const repoName = 'portfolio'

export default defineConfig({
  plugins: [react()],
  base: '/Meu-Portif-lio/',

   build: {
    outDir: 'docs',
    emptyOutDir: true,
    },
})

