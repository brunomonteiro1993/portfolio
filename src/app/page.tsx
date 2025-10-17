import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExternalLink, Github, Linkedin, Mail, Code, Database, Globe } from 'lucide-react';
import Image from 'next/image';
import { TypewriterText } from '@/components/TypewriterText';

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
        <section id="inicio" className="hero-bg py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-8">
                  {/* Main Title */}
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                      Hello I&apos;m
                    </h1>
                    <h2 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                      Bruno Gonçalves
                    </h2>
                    <div className="flex items-center space-x-2">
                      <TypewriterText 
                        texts={["Front-End Developer", "Full-Stack Developer", "Web Developer", "Desenvolvedor"]}
                        className="text-4xl md:text-6xl font-bold accent-primary"
                        speed={100}
                        pauseTime={2500}
                      />
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'MySQL', 'PHP'].map((tech) => (
                      <span
                        key={tech}
                        className="px-6 py-3 border-2 border-accent-primary rounded-full text-primary text-sm font-medium hover:bg-accent-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
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