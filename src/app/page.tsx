import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExternalLink, Github, Linkedin, Mail, Code, Database, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com React, Node.js e PostgreSQL',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: 'https://github.com/bruno/ecommerce',
      status: 'Concluído',
    },
    {
      title: 'Sistema de Gestão',
      description: 'Sistema de gestão empresarial com dashboard interativo e relatórios',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'MySQL'],
      link: 'https://github.com/bruno/gestao-sistema',
      status: 'Em desenvolvimento',
    },
    {
      title: 'API RESTful',
      description: 'API robusta para gerenciamento de usuários e autenticação JWT',
      technologies: ['Express.js', 'MongoDB', 'JWT', 'Docker'],
      link: 'https://github.com/bruno/api-restful',
      status: 'Concluído',
    },
    {
      title: 'App Mobile',
      description: 'Aplicativo mobile para delivery com React Native e Firebase',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      link: 'https://github.com/bruno/delivery-app',
      status: 'Em desenvolvimento',
    },
  ];

  const skills = [
    { name: 'Frontend', icon: Code, technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, technologies: ['Node.js', 'Express', 'Python', 'FastAPI'] },
    { name: 'DevOps', icon: Globe, technologies: ['Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero-bg py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                {/* HTML Tags */}
                <div className="flex items-center space-x-2 text-sm text-primary/70">
                  <span>&lt;h1&gt;</span>
                </div>
                
                {/* Main Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                    Hello I&apos;m
                  </h1>
                  <h2 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                    Bruno Gonçalves
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-4xl md:text-6xl font-bold accent-primary">Front-End</span>
                    <span className="text-4xl md:text-6xl font-bold text-primary">Developer</span>
                    <span className="text-sm text-primary/70">&lt;/h1&gt;</span>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-3">
                  {['HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'PHP'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary border border-theme rounded-full text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-secondary rounded-lg hover:bg-secondary hover:text-primary transition-colors duration-200 font-medium"
                  >
                    Download CV
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center px-8 py-4 border border-theme text-primary rounded-lg hover:bg-secondary transition-colors duration-200 font-medium"
                  >
                    Let&apos;s Talk
                    <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-1.013-2.03-1.178-.273-.165-.471-.249-.67.249-.197.498-.767 1.178-1.04 1.42-.273.243-.54.27-.999.09-.46-.18-1.94-.716-3.69-2.28-1.35-1.2-2.26-2.68-2.52-3.13-.26-.45-.03-.69.195-.91.2-.2.45-.52.675-.78.225-.26.3-.43.45-.71.15-.28.075-.52-.037-.72-.112-.2-.99-2.38-1.36-3.26-.14-.35-.28-.5-.61-.5H5.1c-.18 0-.45.08-.675.33-.225.25-.87.85-.87 2.07 0 1.22.89 2.4.99 2.56.11.16 1.54 2.33 3.73 3.5 3.25 1.75 3.58 1.4 4.23 1.31.65-.09 2.09-.85 2.38-1.67.3-.82.3-1.52.21-1.67-.09-.15-.33-.24-.7-.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/image/fotoParaSection.png"
                  alt="Bruno Gonçalves"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Sobre Mim
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Desenvolvedor com mais de 3 anos de experiência criando soluções web e mobile.
                Especializado em tecnologias modernas e sempre em busca de novos desafios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="bg-primary p-6 rounded-lg shadow-theme-md hover:shadow-theme-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 accent-primary mr-3" />
                      <h3 className="text-xl font-semibold text-primary">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-tertiary text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Meus Projetos
              </h2>
              <p className="text-lg text-secondary max-w-3xl mx-auto">
                Alguns dos projetos que desenvolvi para demonstrar minhas habilidades e experiência.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-secondary p-6 rounded-lg shadow-theme-md hover:shadow-theme-lg transition-all duration-200 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-primary group-hover:accent-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Concluído'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-secondary mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-tertiary text-primary text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-primary hover:text-accent-secondary transition-colors duration-200 font-medium"
                  >
                    Ver no GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
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
              Estou sempre aberto a novas oportunidades e projetos interessantes.
              Entre em contato comigo!
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