import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/b328ff94-fa63-4747-85f2-fd05ae03fba6.png" 
              alt="LP Genius" 
              className="h-12"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#experts" className="text-gray-700 hover:text-lp-blue transition-colors font-medium">
              ЭКСПЕРТЫ
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-lp-blue transition-colors font-medium">
              ПОРТФОЛИО
            </a>
            <a href="#brief" className="text-gray-700 hover:text-lp-blue transition-colors font-medium">
              ОНЛАЙН-БРИФ
            </a>
            <a href="#blog" className="text-gray-700 hover:text-lp-blue transition-colors font-medium">
              БЛОГ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="https://t.me/lpgenius" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://cdn.poehali.dev/files/9f9d9d80-9563-495e-a36c-8c111dc40d28.png" 
                  alt="Telegram" 
                  className="w-8 h-8"
                />
              </a>
              <a 
                href="https://wa.me/79996571669" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://cdn.poehali.dev/files/583157a4-6b0e-4dcf-ba1e-dc60bc1d1fb0.png" 
                  alt="WhatsApp" 
                  className="w-8 h-8"
                />
              </a>
            </div>

            <div className="flex flex-col items-end">
              <a 
                href="tel:+79996571669" 
                className="text-lg font-semibold text-gray-900 hover:text-lp-blue transition-colors"
              >
                +7 (999) 657 19 69
              </a>
              <div className="flex items-center space-x-2 mt-1">
                <div className="relative">
                  <span className="flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lp-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-lp-green"></span>
                  </span>
                </div>
                <span className="text-sm text-lp-green font-medium">Сейчас онлайн</span>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-lp-blue transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#experts"
                className="text-gray-700 hover:text-lp-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ЭКСПЕРТЫ
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-lp-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ПОРТФОЛИО
              </a>
              <a
                href="#brief"
                className="text-gray-700 hover:text-lp-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ОНЛАЙН-БРИФ
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-lp-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                БЛОГ
              </a>
              <div className="flex items-center space-x-3 pt-2">
                <a 
                  href="https://t.me/lpgenius" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/9f9d9d80-9563-495e-a36c-8c111dc40d28.png" 
                    alt="Telegram" 
                    className="w-8 h-8"
                  />
                </a>
                <a 
                  href="https://wa.me/79996571669" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/583157a4-6b0e-4dcf-ba1e-dc60bc1d1fb0.png" 
                    alt="WhatsApp" 
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;