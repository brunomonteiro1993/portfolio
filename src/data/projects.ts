export type ProjectDemoStep = {
  step: number;
  phase: string;
  title: string;
  description: string;
  image: string;
  alt: string;
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
    galleryImages: restauranteDemoSteps.map((step) => ({
      src: step.image,
      alt: step.alt,
    })),
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
