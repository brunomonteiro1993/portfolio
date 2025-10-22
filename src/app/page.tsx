import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { TypewriterText } from "@/components/TypewriterText";
import "./page.css";

export default function Home() {
  const experiences = [
    {
      period: "NOV/2022 — FEV/2025",
      title: "Web Developer",
      institution: "PRODERJ - Center for Information and Communication Technology of the State of Rio de Janeiro",
      description: "Responsible for the development and maintenance of web systems for government agencies, ensuring efficiency and security in the provision of public services, as well as implementing new features and improving existing systems using modern technologies and best development practices.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "React", "Laravel", "PHP", "MySQL", "VsCode", "GitHub"],
    },
    {
      period: "ABR/2023 — JUN/2025",
      title: "Banco de Dados",
      institution: "Universidade Estácio de Sá",
      description: "A graduação em Banco de Dados na Estácio oferece uma formação para preparar e desenvolver, administrar e eliminar sistemas de armazenamento. Ira abordar desde as matérias mais básicas da área de TI, passando para a programação de sistemas. São abordadas a linguagem de dados, linguagens de consulta como SQL, administração de SGBD (sistema de Gerenciamento de Banco de Dados), análise de desempenho e segurança da informação.",
      hours: "2400 HORAS",
    },
  ];

  const certifications = [
    {
      period: "CONCLUÍDO EM 2025",
      title: "Curso React do Zero a Maestria",
      platform: "Plataforma Udemy",
      description: "O curso React do Zero a Maestria da Udemy, abrange desde os fundamentos até tópicos avançados de React, com foco em hooks, gerenciamento de rotas com React Router e integrado com APIs REST. O conteúdo inclui o desenvolvimento de projetos completos, aplicando tecnologias modernas como Firebase para backend-as-a-service, Node.js para lógica de servidor e MongoDB como banco de dados NoSQL.",
      hours: "36.5 HORAS",
    },
    {
      period: "CONCLUÍDO EM 2023",
      title: "Curso Desenvolvimento Web Completo",
      platform: "Plataforma Udemy",
      description: "O curso de Desenvolvimento Web da Udemy oferece uma formação completa, abordando desde o front-end até o back-end e bancos de dados, com a criação de projetos práticos. Os principais tópicos incluem HTML, CSS, JavaScript, jQuery, Ajax, PHP, MySQL, React, arquitetura MVC, desenvolvimento de APIs e aplicações mobile conectadas a aplicações web utilizando a tecnologia Ionic.",
      hours: "114.5 HORAS",
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Experiences */}
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="experience-card p-6 rounded-xl border border-accent-primary hover:shadow-theme-lg transition-all duration-200"
                  >
                    <div className="period-text text-xs mb-3 uppercase tracking-wide font-semibold">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {exp.title}
                    </h3>
                    <p className="platform-text text-sm font-medium mb-4">
                      {exp.institution}
                    </p>
                    <p className="text-white text-sm mb-5 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="tech-tag-card px-3 py-1 text-white text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {exp.hours && (
                      <div className="flex items-center text-white text-sm mt-4">
                        <span className="mr-2">⏱</span>
                        <span className="font-medium">{exp.hours}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column - Certifications */}
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="certification-card p-6 rounded-xl border border-accent-primary hover:shadow-theme-lg transition-all duration-200"
                  >
                    <div className="period-text text-xs mb-3 uppercase tracking-wide font-semibold">
                      {cert.period}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {cert.title}
                    </h3>
                    <p className="platform-text text-sm font-medium mb-4">
                      {cert.platform}
                    </p>
                    <p className="text-white text-sm mb-5 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center text-white text-sm mt-4">
                      <span className="mr-2">⏱</span>
                      <span className="font-medium">{cert.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-secondary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-lg text-secondary mb-8">
              Estou sempre aberto a novas oportunidades e projetos
              interessantes. Entre em contato comigo!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bruno@email.com"
                className="inline-flex items-center px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-secondary transition-colors duration-200 font-medium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </a>
              <a
                href="https://linkedin.com/in/bruno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-theme text-primary rounded-lg hover:bg-primary transition-colors duration-200 font-medium"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/bruno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-theme text-primary rounded-lg hover:bg-primary transition-colors duration-200 font-medium"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
