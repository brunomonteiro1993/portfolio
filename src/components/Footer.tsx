'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mt-8 pt-8 border-t border-theme">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted text-sm">
              © {currentYear} Bruno. Todos os direitos reservados.
            </p>
            <p className="text-muted text-sm">
              Feito com usando Next.js e Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
