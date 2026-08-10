export type ProjectDemoStep = {
  step: number;
  phase: string;
  title: string;
  description: string;
  /** Imagem única da etapa (legado / etapas simples) */
  image?: string;
  alt?: string;
  /** Várias imagens na mesma etapa (ex.: telas do dashboard) */
  images?: { src: string; alt: string }[];
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  demoPath: string;
  demoIntro: string;
  demoSteps: ProjectDemoStep[];
  galleryImages: { src: string; alt: string }[];
};

const restauranteDemoSteps: ProjectDemoStep[] = [
  {
    step: 1,
    phase: "Setup inicial",
    title: "Cadastro da equipe",
    description:
      "Admin ou gerente cria usuários internos com papéis (Admin, Gerente, Garçom e Cozinha) para operar o restaurante.",
    image: "/image/projects/restaurante/usuarios-gestao.png",
    alt: "Gestão de usuários e papéis da equipe",
  },
  {
    step: 2,
    phase: "Setup inicial",
    title: "Categorias do cardápio",
    description:
      "Organização do menu em categorias antes de cadastrar os produtos disponíveis para o cliente.",
    image: "/image/projects/restaurante/categorias-lista.png",
    alt: "Listagem de categorias do cardápio",
  },
  {
    step: 3,
    phase: "Setup inicial",
    title: "Produtos do cardápio",
    description:
      "Cadastro de itens com preço, imagem, categoria e disponibilidade para compor o cardápio público.",
    image: "/image/projects/restaurante/produtos-lista.png",
    alt: "Gestão de produtos do cardápio",
  },
  {
    step: 4,
    phase: "Setup inicial",
    title: "Mesas do salão",
    description:
      "Cadastro das mesas com capacidade e status. Cada mesa pode gerar QR Code para o cliente acessar o cardápio.",
    image: "/image/projects/restaurante/mesas-gestao.png",
    alt: "Gestão de mesas com status e ações",
  },
  {
    step: 5,
    phase: "Cliente na mesa",
    title: "QR Code na mesa",
    description:
      "Cliente escaneia o QR e abre o cardápio público da mesa, sem login, para montar o pedido.",
    image: "/image/projects/restaurante/modal-qr-code-mesa.png",
    alt: "QR Code da mesa para cardápio público",
  },
  {
    step: 6,
    phase: "Operação",
    title: "Pedidos",
    description:
      "Pedidos do cliente ou da equipe entram no sistema. A cozinha e o garçom acompanham em tempo real.",
    image: "/image/projects/restaurante/pedidos-lista.png",
    alt: "Listagem e filtros de pedidos",
  },
  {
    step: 7,
    phase: "Operação",
    title: "Cozinha",
    description:
      "Fila operacional: PENDING → PREPARING → READY → DELIVERED, com atualização ao vivo via Socket.IO.",
    image: "/image/projects/restaurante/cozinha-painel.png",
    alt: "Painel da cozinha com fila de preparo",
  },
  {
    step: 8,
    phase: "Operação",
    title: "Chamados de garçom",
    description:
      "Cliente pode chamar o garçom pelo cardápio. A equipe visualiza e atende os chamados por mesa.",
    image: "/image/projects/restaurante/chamados-atendimento.png",
    alt: "Chamados de garçom por mesa",
  },
  {
    step: 9,
    phase: "Fechamento",
    title: "Conta e pagamento",
    description:
      "Garçom fecha a conta da mesa, aplica taxa de serviço e desconto, registra o pagamento e libera a mesa.",
    image: "/image/projects/restaurante/contas-fechamento.png",
    alt: "Fechamento e pagamento de contas",
  },
];

const shoppingListDemoSteps: ProjectDemoStep[] = [
  {
    step: 1,
    phase: "Acesso",
    title: "Login",
    description:
      "Tela de entrada com e-mail, senha, recuperação de senha e sessão persistente via Supabase Auth.",
    image: "/image/projects/lista-compras/login.png",
    alt: "Tela de login do Shopping List",
  },
  {
    step: 2,
    phase: "Acesso",
    title: "Cadastro",
    description:
      "Criação de conta para começar a gerenciar listas de compras com orçamento.",
    image: "/image/projects/lista-compras/cadastro.png",
    alt: "Tela de cadastro do Shopping List",
  },
  {
    step: 3,
    phase: "Planejamento",
    title: "Minhas listas",
    description:
      "Visão geral das listas com status (rascunho, ativa, concluída/cancelada) e resumo financeiro.",
    image: "/image/projects/lista-compras/minhas-listas.png",
    alt: "Listagem de listas de compras",
  },
  {
    step: 4,
    phase: "Planejamento",
    title: "Nova lista com orçamento",
    description:
      "Criação de lista definindo orçamento e dados iniciais para planejar a compra.",
    image: "/image/projects/lista-compras/nova-lista.png",
    alt: "Formulário de nova lista com orçamento",
  },
  {
    step: 5,
    phase: "Planejamento",
    title: "Adicionar produtos",
    description:
      "CRUD de itens com quantidade, unidade, categoria e preço estimado/real.",
    image: "/image/projects/lista-compras/adicionar-produto.png",
    alt: "Modal de adicionar produto à lista",
  },
  {
    step: 6,
    phase: "No mercado",
    title: "Modo Compra",
    description:
      "Interface mobile-first para marcar itens no supermercado, registrar preços reais e acompanhar o orçamento.",
    image: "/image/projects/lista-compras/modo-compra.png",
    alt: "Modo Compra no mercado",
  },
  {
    step: 7,
    phase: "Histórico",
    title: "Histórico de compras",
    description:
      "Histórico com comparação de preços e opção de reutilizar uma lista concluída como nova lista.",
    image: "/image/projects/lista-compras/historico-compras.png",
    alt: "Histórico de compras e reutilização",
  },
  {
    step: 8,
    phase: "Insights",
    title: "Dashboard inteligente",
    description:
      "Produtos frequentes, alertas e sugestões de preço, além da evolução de preço por item — tudo no mesmo fluxo de insights.",
    images: [
      {
        src: "/image/projects/lista-compras/dashboard-frequentes.png",
        alt: "Produtos frequentes e alertas de preço",
      },
      {
        src: "/image/projects/lista-compras/dashboard-sugestoes.png",
        alt: "Sugestões de aumento de preço",
      },
      {
        src: "/image/projects/lista-compras/dashboard-evolucao-preco.png",
        alt: "Evolução de preço de um produto",
      },
    ],
  },
];

function getStepImages(step: ProjectDemoStep) {
  if (step.images && step.images.length > 0) {
    return step.images;
  }

  if (step.image) {
    return [{ src: step.image, alt: step.alt ?? step.title }];
  }

  return [];
}

function galleryFromSteps(steps: ProjectDemoStep[]) {
  return steps.flatMap(getStepImages);
}

export { getStepImages };

export const projects: Project[] = [
  {
    id: "restaurante",
    title: "Projeto Restaurante",
    subtitle: "SaaS de gestão de restaurante",
    description:
      "Sistema multi-tenant com painel interno para equipe (garçom, cozinha, gerente e admin) e área pública para o cliente pedir pelo cardápio via QR Code da mesa, sem login. Cobre todo o fluxo operacional: pedidos em tempo real, fila da cozinha, chamados de garçom e fechamento de conta com pagamento.",
    highlights: [
      "Tenant isolado por restaurante (dados separados por restaurantId)",
      "QR Code na mesa abre cardápio público com carrinho e pedidos",
      "Fluxo cozinha: PENDING → PREPARING → READY → DELIVERED",
      "Contas com taxa de serviço, desconto e liberação da mesa ao pagar",
      "Atualizações em tempo real com Socket.IO",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Socket.IO",
      "Vercel",
      "Render",
    ],
    demoPath: "/projetos/restaurante",
    demoIntro:
      "Demonstração visual do sistema na ordem em que o processo acontece: setup do restaurante, pedido do cliente, operação da cozinha e fechamento da conta.",
    links: [
      {
        label: "Ver demo",
        href: "/projetos/restaurante",
        external: false,
        primary: true,
      },
      {
        label: "GitHub Frontend",
        href: "https://github.com/brunomonteiro1993/restaurante-frontend",
        external: true,
      },
      {
        label: "GitHub Backend",
        href: "https://github.com/brunomonteiro1993/restaurant-backend",
        external: true,
      },
      {
        label: "App ao vivo",
        href: "https://restaurante-frontend-xi-five.vercel.app/login",
        external: true,
      },
    ],
    demoSteps: restauranteDemoSteps,
    galleryImages: galleryFromSteps(restauranteDemoSteps),
  },
  {
    id: "lista-compras",
    title: "Lista de Compras Financeira",
    subtitle: "Shopping List com controle de orçamento",
    description:
      "App full stack para gerenciar listas de supermercado com controle de orçamento. Inclui autenticação, CRUD de listas e produtos, Modo Compra mobile-first, histórico com evolução de preços, favoritos e sugestões inteligentes. Stack: React, TypeScript, Node/Express e Supabase (Auth + PostgreSQL com RLS), com validação Zod e API REST segura.",
    highlights: [
      "Lista de compras com orçamento e status (rascunho → ativa → concluída)",
      "Modo Compra mobile-first para usar no mercado",
      "Histórico com comparação de preços e reutilização de listas",
      "Dashboard com frequentes, favoritos, sugestões e alertas de preço",
      "Arquitetura React → API Express → Supabase com RLS",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zod",
      "Node.js",
      "Express",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Render",
    ],
    demoPath: "/projetos/lista-compras",
    demoIntro:
      "Walkthrough do fluxo: login e cadastro, planejamento da lista com orçamento, Modo Compra no mercado, histórico e dashboard inteligente (frequentes, sugestões e evolução de preço).",
    links: [
      {
        label: "Ver demo",
        href: "/projetos/lista-compras",
        external: false,
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/brunomonteiro1993/Lista-de-comprar-financeira",
        external: true,
      },
      {
        label: "App ao vivo",
        href: "https://lista-de-comprar-financeira.vercel.app/dashboard",
        external: true,
      },
    ],
    demoSteps: shoppingListDemoSteps,
    galleryImages: galleryFromSteps(shoppingListDemoSteps),
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
