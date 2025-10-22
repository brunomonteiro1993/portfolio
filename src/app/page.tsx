'use client';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const experiencesAndTraining = [
    {
      period: "ABR/2025 — OUT/2025",
      title: "Desenvolvedor Full Stack",
      institution: "CF Contabilidade",
      description: "Atualmente atuo no desenvolvimento de aplicações web com foco em sistemas de gerenciamento. No front-end, utilizo Next.js e React, enquanto no back-end trabalho com Node.js, PHP e Laravel. Também realizo integração e manutenção de bancos de dados com phpMyAdmin, MySQL e Supabase, assegurando eficiência e organização das informações. Além disso, desenvolvo e mantenho fluxos de automação de processos com n8n, otimizando tarefas repetitivas e aumentando a produtividade das operações. Minha rotina envolve desde a implementação de interfaces responsivas até a lógica de negócio e estruturação de dados, sempre alinhado a boas práticas de desenvolvimento. No dia a dia, utilizo Git/GitHub para versionamento e aplico metodologias ágeis, como Scrum e Kanban, para organizar e acompanhar as demandas de forma eficiente.",
      technologies: ["Next.js", "React", "Node.js", "PHP", "Laravel", "phpMyAdmin", "MySQL", "Supabase", "n8n", "Git", "GitHub", "Scrum", "Kanban"],
    },
    {
      period: "NOV/2022 — FEV/2025",
      title: "Web Developer",
      institution: "PRODERJ - Center for Information and Communication Technology of the State of Rio de Janeiro",
      description: "Responsible for the development and maintenance of web systems for government agencies, ensuring efficiency and security in the provision of public services, as well as implementing new features and improving existing systems using modern technologies and best development practices.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "React", "Laravel", "PHP", "MySQL", "VsCode", "GitHub"],
    },
    {
      period: "CONCLUÍDO EM 2025",
      title: "Curso React do Zero a Maestria",
      platform: "Plataforma Udemy",
      description: "O curso React do Zero a Maestria da Udemy, abrange desde os fundamentos até tópicos avançados de React, com foco em hooks, gerenciamento de rotas com React Router e integrado com APIs REST. O conteúdo inclui o desenvolvimento de projetos completos, aplicando tecnologias modernas como Firebase para backend-as-a-service, Node.js para lógica de servidor e MongoDB como banco de dados NoSQL.",
      hours: "36.5 HORAS",
    },
    {
      period: "ABR/2023 — JUN/2025",
      title: "Banco de Dados",
      institution: "Universidade Estácio de Sá",
      description: "A graduação em Banco de Dados na Estácio oferece uma formação para preparar e desenvolver, administrar e eliminar sistemas de armazenamento. Ira abordar desde as matérias mais básicas da área de TI, passando para a programação de sistemas. São abordadas a linguagem de dados, linguagens de consulta como SQL, administração de SGBD (sistema de Gerenciamento de Banco de Dados), análise de desempenho e segurança da informação.",
      hours: "2400 HORAS",
    },
    {
      period: "CONCLUÍDO EM 2023",
      title: "Curso Desenvolvimento Web Completo",
      platform: "Plataforma Udemy",
      description: "O curso de Desenvolvimento Web da Udemy oferece uma formação completa, abordando desde o front-end até o back-end e bancos de dados, com a criação de projetos práticos. Os principais tópicos incluem HTML, CSS, JavaScript, jQuery, Ajax, PHP, MySQL, React, arquitetura MVC, desenvolvimento de APIs e aplicações mobile conectadas a aplicações web utilizando a tecnologia Ionic.",
      hours: "114.5 HORAS",
    },
    {
      period: "CONCLUSÃO: JUN/2023",
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Estácio de Sá",
      description: "A graduação em Análise e Desenvolvimento de Sistemas forma profissionais capacitados para projetar, desenvolver e implementar sistemas computacionais. O curso aborda programação em diversas linguagens, engenharia de software, estrutura de dados, modelagem de sistemas, desenvolvimento web e mobile, gestão de projetos de TI e metodologias ágeis. Prepara o aluno para atuar em todas as fases do ciclo de vida de software, desde a análise de requisitos até a manutenção de sistemas.",
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
              <div className="space-y-8">
                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                    Olá, eu sou o
                  </h1>
                  <h2 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                    Bruno Gonçalves
                  </h2>
                  <div className="flex items-center space-x-2">
                    <TypewriterText
                      texts={["Desenvolvedor Full Stack", "Desenvolvedor Web"]}
                      className="text-4xl md:text-6xl font-bold accent-primary"
                      speed={100}
                      pauseTime={2500}
                    />
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-4 mt-8">
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
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="/documents/curriculo-bruno.pdf"
                    download="Bruno-Goncalves-Curriculo.pdf"
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
                    className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-200 font-medium"
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
              <div className="flex justify-center lg:justify-end">
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
              <div className="flex justify-center lg:justify-start">
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
              <div className="space-y-6">
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
                      Graduado em Análise e Desenvolvimento de Sistemas e em
                      Banco de Dados. Desenvolvedor Web Full Stack com foco no
                      desenvolvimento de aplicações web. Tenho experiência em
                      Next.js e React no front-end, e Node.js, PHP e Laravel no
                      back-end. Trabalho com MySQL, Supabase e phpMyAdmin para
                      integração e manutenção de bancos de dados. Além disso,
                      possuo experiência na integração e consumo de APIs REST,
                      como a Pluggy API e a API do Banco Inter Empresas,
                      garantindo conectividade e comunicação eficiente entre
                      sistemas.
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Minhas Habilidades
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto">
              {[
                { name: 'HTML5', icon: '/image/html5.png' },
                { name: 'CSS3', icon: '/image/css3.png' },
                { name: 'JavaScript', icon: '/image/js.png' },
                { name: 'Bootstrap', icon: '/image/bootstrap.png' },
                { name: 'React.js', icon: '/image/react.png' },
                { name: 'MySQL', icon: '/image/mySql.png' },
                { name: 'Laravel', icon: '/image/laravel.png' },
                { name: 'PHP', icon: '/image/php.png' },
                { name: 'Git', icon: '/image/git.png' },
                { name: 'VsCode', icon: '/image/vscode.png' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card bg-primary p-4 rounded-lg  border-accent-primary hover:shadow-theme-lg transition-all duration-200 flex flex-col items-center justify-center text-center"
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-primary mb-4">
                Experiência e Treinamento
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {experiencesAndTraining.map((item, index) => (
                <div
                  key={index}
                  className="experience-card p-6 rounded-xl hover:shadow-theme-lg transition-all duration-200"
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
                  <p className="text-white text-sm mb-5 leading-relaxed">
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-accent-primary mb-4">
                Contatos
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {/* Email Card */}
              <a
                href="mailto:brunogoncalvesmonteiro@gmail.com"
                className="contact-card flex flex-col items-center text-center group"
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
                <p className="text-sm text-secondary">brunogoncalvesmonteiro@gmail.com</p>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/brunomonteiro1993"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card flex flex-col items-center text-center group"
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
                className="contact-card flex flex-col items-center text-center group"
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
                className="contact-card flex flex-col items-center text-center group"
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
