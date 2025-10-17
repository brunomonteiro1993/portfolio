'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/bruno',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/bruno',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:bruno@email.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-secondary border-t border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Bruno</h3>
            <p className="text-secondary text-sm">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-tertiary hover:bg-accent-primary hover:text-white transition-all duration-200 group"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                    <ExternalLink className="h-3 w-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-theme">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted text-sm">
              © {currentYear} Bruno. Todos os direitos reservados.
            </p>
            <p className="text-muted text-sm">
              Feito com ❤️ usando Next.js e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
