# Portfólio Pessoal - Bruno

Um portfólio pessoal moderno e responsivo construído com Next.js, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Modo Dark/Light**: Sistema de temas com CSS separado para melhor organização
- **Performance Otimizada**: Construído com Next.js 14 e App Router
- **TypeScript**: Tipagem estática para maior confiabilidade
- **Tailwind CSS**: Estilização moderna e consistente
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **next-themes** - Gerenciamento de temas
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/bruno/portfolio-bruno.git
cd portfolio-bruno
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🎨 Personalização

### Cores e Temas

As cores são definidas no arquivo `src/styles/globals.css` usando variáveis CSS:

```css
:root {
  /* Light Theme */
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  /* ... */
}

.dark {
  /* Dark Theme */
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
  /* ... */
}
```

### Conteúdo

Para personalizar o conteúdo:

1. **Informações Pessoais**: Edite `src/app/page.tsx`
2. **Projetos**: Modifique o array `projects` na página principal
3. **Links Sociais**: Atualize os links no componente `Footer.tsx`
4. **Metadados**: Altere em `src/app/layout.tsx`

## 🚀 Deploy na Vercel

1. Faça push do código para o GitHub
2. Conecte seu repositório na [Vercel](https://vercel.com)
3. O deploy será automático!

Ou use a CLI da Vercel:

```bash
npm i -g vercel
vercel
```

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎯 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Footer.tsx          # Rodapé com links sociais
│   ├── ThemeProvider.tsx   # Provider de temas
│   └── ThemeToggle.tsx     # Botão de alternância de tema
└── styles/
    └── globals.css         # CSS com variáveis de tema
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou pull request.

---

Desenvolvido com ❤️ por Bruno