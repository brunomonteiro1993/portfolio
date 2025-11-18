"use client";

// import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    // { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 64; // altura do header (h-16 = 4rem = 64px)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Fecha o menu mobile após o clique
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={mounted && theme === 'light' ? "/image/headerbrunoLigth.png" : "/image/headerBruno.png"}
              alt="Bruno"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className="text-secondary hover:text-primary transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <button
              className="p-2 rounded-lg bg-secondary hover:bg-tertiary transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-secondary rounded-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className="block px-3 py-2 text-secondary hover:text-primary hover:bg-tertiary rounded-md transition-colors duration-200 font-medium cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
