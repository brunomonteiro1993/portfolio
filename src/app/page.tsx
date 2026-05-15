"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { TypewriterText } from "@/components/TypewriterText";
import { useState, useEffect } from "react";
import "./page.css";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Animation Hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const wasAnimated =
          entry.target.getAttribute("data-animated") === "true";

        // Se já foi animado ao carregar, não faz nada ao fazer scroll
        if (wasAnimated) {
          return;
        }

        // Só anima se ainda não foi animado
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.setAttribute("data-animated", "true");
        }
      });
    }, observerOptions);

    // Função para verificar se elemento já está visível
    const isElementVisible = (el: Element): boolean => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return rect.top < windowHeight && rect.bottom > 0;
    };

    // Função para observar elementos
    const observeElements = () => {
      const animatedElements = document.querySelectorAll(
        ".scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in",
      );

      animatedElements.forEach((el) => {
        // Se já foi processado, não processa novamente
        if (el.getAttribute("data-processed") === "true") {
          return;
        }

        // Marca como processado
        el.setAttribute("data-processed", "true");

        // Garante que comece sem a classe para forçar a animação
        el.classList.remove("visible");

        // Verifica se o elemento já está visível ao carregar
        if (isElementVisible(el)) {
          // Se já estiver visível, adiciona a classe após um pequeno delay para forçar a animação
          setTimeout(() => {
            if (el.getAttribute("data-animated") !== "true") {
              el.classList.add("visible");
              el.setAttribute("data-animated", "true");
            }
          }, 100);
        }

        observer.observe(el);
      });
    };

    // Observar elementos quando o componente montar
    observeElements();

    // Também observar após um pequeno delay para elementos que podem ser carregados depois
    const timeoutId = setTimeout(observeElements, 300);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const experiencesAndTraining = [
    {
      period: "ABR/2025 — OUT/2025",
      title: "Desenvolvedor Full Stack",
      institution: "CF Contabilidade",
      description: [
        "Trabalhei num produto de gestão financeira e operacional para empresas: contas, transações, conciliação, categorias e centros de custo, clientes, vendas e contratos com recorrência, automação, integração com open finance (Pluggy), Banco Inter (contas e boletos), webhooks, importação OFX, exportação/importação Excel, além de fluxos de boletos em rascunho, departamentos e tickets.",
        "No backend usei Node.js com Express, MySQL (mysql2), autenticação com JWT e bcrypt, validação com Zod, node-cron para rotinas (incluindo boletos), Axios para chamadas HTTP, geração e manipulação de PDF (pdfkit, pdfmake, Puppeteer), Nodemailer, Cloudinary para mídia, cliente Supabase onde integra com esse ecossistema, e Docker com healthcheck; o deploy também contempla Vercel (serverless).",
        "No frontend a aplicação é Next.js 13 com React 18 e TypeScript, Tailwind CSS e componentes no estilo Radix UI (base típica de shadcn), React Hook Form com Zod, recharts para gráficos, jsPDF para relatórios no cliente, xlsx, jwt-decode, react-pluggy-connect para o fluxo de open finance, lucide-react para ícones e next-themes para tema claro/escuro.",
        "Em resumo, foi um projeto full stack com forte foco em integrações financeiras, recorrência, documentos e planilhas, e UI administrativa moderna e acessível.",
        "Produto de plataforma multiempresa de gestão ágil: projetos, tickets (pai/filho), status e tipos, planos e créditos (histórico e renovação), diário (anotações e lembretes), notificações, relatórios, conquistas, área pública para tickets externos e integração WhatsApp (Evolution).",
        "Back-end: Node.js, Express, REST, JWT, MySQL, Zod, Multer, Nodemailer, Cloudinary, node-cron, suporte a PDF; Front-end: Next.js 15, React 19, TypeScript, Tailwind CSS, Axios, Recharts, ExcelJS, react-big-calendar, react-toastify, next-themes. Ambiente com Docker / Docker Compose e referência a Vercel.",
      ].join("\n\n"),
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "PHP",
        "Laravel",
        "phpMyAdmin",
        "MySQL",
        "Supabase",
        "n8n",
        "Git",
        "GitHub",
        "Scrum",
        "Kanban",
      ],
    },
    {
      period: "NOV/2022 — FEV/2025",
      title: "Web Developer",
      institution:
        "PRODERJ - Center for Information and Communication Technology of the State of Rio de Janeiro",
      description:
        "Responsible for the development and maintenance of web systems for government agencies, ensuring efficiency and security in the provision of public services, as well as implementing new features and improving existing systems using modern technologies and best development practices.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "React",
        "Laravel",
        "PHP",
        "MySQL",
        "VsCode",
        "GitHub",
      ],
    },
    {
      period: "CONCLUÍDO EM 2025",
      title: "Curso React do Zero a Maestria",
      platform: "Plataforma Udemy",
      description:
        "O curso React do Zero a Maestria da Udemy, abrange desde os fundamentos até tópicos avançados de React, com foco em hooks, gerenciamento de rotas com React Router e integrado com APIs REST. O conteúdo inclui o desenvolvimento de projetos completos, aplicando tecnologias modernas como Firebase para backend-as-a-service, Node.js para lógica de servidor e MongoDB como banco de dados NoSQL.",
      hours: "36.5 HORAS",
    },
    {
      period: "ABR/2023 — JUN/2025",
      title: "Banco de Dados",
      institution: "Universidade Estácio de Sá",
      description:
        "A graduação em Banco de Dados na Estácio oferece uma formação para preparar e desenvolver, administrar e eliminar sistemas de armazenamento. Ira abordar desde as matérias mais básicas da área de TI, passando para a programação de sistemas. São abordadas a linguagem de dados, linguagens de consulta como SQL, administração de SGBD (sistema de Gerenciamento de Banco de Dados), análise de desempenho e segurança da informação.",
      hours: "2400 HORAS",
    },
    {
      period: "CONCLUÍDO EM 2023",
      title: "Curso Desenvolvimento Web Completo",
      platform: "Plataforma Udemy",
      description:
        "O curso de Desenvolvimento Web da Udemy oferece uma formação completa, abordando desde o front-end até o back-end e bancos de dados, com a criação de projetos práticos. Os principais tópicos incluem HTML, CSS, JavaScript, jQuery, Ajax, PHP, MySQL, React, arquitetura MVC, desenvolvimento de APIs e aplicações mobile conectadas a aplicações web utilizando a tecnologia Ionic.",
      hours: "114.5 HORAS",
    },
    {
      period: "CONCLUSÃO: JUN/2023",
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Estácio de Sá",
      description:
        "A graduação em Análise e Desenvolvimento de Sistemas forma profissionais capacitados para projetar, desenvolver e implementar sistemas computacionais. O curso aborda programação em diversas linguagens, engenharia de software, estrutura de dados, modelagem de sistemas, desenvolvimento web e mobile, gestão de projetos de TI e metodologias ágeis. Prepara o aluno para atuar em todas as fases do ciclo de vida de software, desde a análise de requisitos até a manutenção de sistemas.",
      hours: "2400 HORAS",
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          id="inicio"
          className="hero-bg py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8 scroll-slide-left">
                {/* Main Title */}
                <div className="space-y-4">
                  <h5 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                    Olá, eu sou o
                  </h5>
                  <h5 className="h2-Nome text-5xl md:text-7xl font-bold text-primary leading-tight">
                    Bruno Gonçalves
                  </h5>
                  <div className="desenvolvedor flex items-center space-x-2">
                    <TypewriterText
                      texts={["Desenvolvedor Full Stack", "Desenvolvedor Web"]}
                      className="text-4xl md:text-5xl font-bold accent-primary"
                      speed={100}
                      pauseTime={2500}
                    />
                  </div>
                </div>

                {/* Technology Tags */}
                {/* <div className="flex flex-wrap gap-4 mt-8">
                  {[
                    "PHP",
                    "Laravel",
                    "Node.js",
                    "JavaScript",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "HTML5",
                    "CSS3",
                    "Bootstrap",
                    "Tailwind",
                    "MySQL",
                    "Supabase",
                    "APIs REST",
                    "Git & GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="/documents/Bruno%20Gon%C3%A7alves_CV.pdf"
                    download="Bruno-Goncalves_CV.pdf"
                    className="download-cv-button inline-flex items-center justify-center px-8 py-4 font-medium transition-all duration-200"
                  >
                    Download CV
                    <svg
                      className="ml-2 h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/5521980109064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="conversar inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-200 font-medium"
                  >
                    <Image
                      src="/image/iconZap.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    Vamos conversar
                  </a>
                </div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="flex justify-center lg:justify-end scroll-slide-right">
                <Image
                  src="/image/fotoParaSection.png"
                  alt="Bruno Gonçalves"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Side - Image */}
              <div className="flex justify-center lg:justify-start scroll-slide-left">
                <div className="w-full max-w-md">
                  <Image
                    src="/image/sobreMin.png"
                    alt="Desenvolvedor trabalhando"
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Right Side - About Content */}
              <div className="space-y-6 scroll-slide-right">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    Sobre Mim
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="bordaSolid">
                    <p className="text-secondary">OLÁ!</p>
                    <p className="text-secondary">
                      Meu nome é Bruno Gonçalves.
                    </p>
                    <p className="text-secondary">
                      Desenvolvedor Full Stack com experiência em aplicações
                      financeiras, sistemas administrativos e integrações
                      bancárias. Atuação com Next.js, React, Node.js, PHP e
                      Laravel no desenvolvimento de plataformas modernas,
                      automações e APIs REST. Experiência em Open Finance,
                      integração bancária, geração de documentos, recorrência
                      financeira, dashboards administrativos e arquitetura full
                      stack utilizando Docker, MySQL, Supabase e Vercel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Minhas Habilidades
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
              {[
                // Front-end
                { name: "HTML5", icon: "/image/hmtl5.png" },
                { name: "CSS3", icon: "/image/css3.png" },
                { name: "JavaScript", icon: "/image/js.png" },
                { name: "TypeScript", icon: "/image/typeScript.png" },
                { name: "React.js", icon: "/image/reactJs.png" },
                { name: "Next.js", icon: "/image/nextJs.png" },
                { name: "Bootstrap", icon: "/image/bootstrap.png" },
                { name: "Tailwind", icon: "/image/tailwind.png" },
                // Back-end
                { name: "Node.js", icon: "/image/nodeJs.png" },
                { name: "Express.js", icon: "/image/expresseJs.png" },
                { name: "PHP", icon: "/image/php.png" },
                { name: "Laravel", icon: "/image/laravel.png" },
                { name: "REST API", icon: "/image/reastApi.png" },
                // Banco de Dados
                { name: "MySQL", icon: "/image/mysql.png" },
                { name: "Supabase", icon: "/image/supabase.png" },
                // Ferramentas
                { name: "Git", icon: "/image/git.png" },
                { name: "GitHub", icon: "/image/gitHub.png" },
                { name: "VsCode", icon: "/image/vsCode.png" },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card scroll-scale-in bg-primary p-4 rounded-lg  border-accent-primary hover:shadow-theme-lg transition-all duration-200 flex flex-col items-center justify-center text-center"
                >
                  <div className="mb-3 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-accent-primary">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience and Training Section */}
        <section id="experiencia" className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-primary mb-4">
                Experiência e Treinamento
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {experiencesAndTraining.map((item, index) => (
                <div
                  key={index}
                  className="experience-card scroll-fade-in p-6 rounded-xl hover:shadow-theme-lg transition-all duration-200"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="period-text text-xs mb-3 uppercase tracking-wide font-semibold">
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="platform-text text-sm font-medium mb-4">
                    {item.institution || item.platform}
                  </p>
                  <p className="text-white text-sm mb-5 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>

                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-tag-card px-3 py-1 text-white text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.hours && (
                    <div className="flex items-center text-white text-sm mt-4">
                      <span className="mr-2">⏱</span>
                      <span className="font-medium">{item.hours}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-primary mb-4">
                Contatos
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {/* Email Card */}
              <a
                href="mailto:brunogoncalvesmonteiro@gmail.com"
                className="contact-card scroll-scale-in flex flex-col items-center text-center group"
              >
                <div className="contact-icon-circle mb-4">
                  <Image
                    src="/svg/email.svg"
                    alt="Email"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">E-mail</h3>
                <p className="text-sm text-secondary">
                  brunogoncalvesmonteiro@gmail.com
                </p>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/brunomonteiro1993"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card scroll-scale-in flex flex-col items-center text-center group"
              >
                <div className="contact-icon-circle mb-4">
                  <Image
                    src="/svg/github.svg"
                    alt="GitHub"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
                <p className="text-sm text-secondary">@brunomonteiro1993</p>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/brunogonçalves-"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card scroll-scale-in flex flex-col items-center text-center group"
              >
                <div className="contact-icon-circle mb-4">
                  <Image
                    src="/svg/linkedin.svg"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-sm text-secondary">@brunogonçalves-</p>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/5521980109064"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card scroll-scale-in flex flex-col items-center text-center group"
              >
                <div className="contact-icon-circle mb-4">
                  <Image
                    src="/svg/whatsapp.svg"
                    alt="WhatsApp"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-sm text-secondary">21 98010-9064</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Voltar ao topo"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
