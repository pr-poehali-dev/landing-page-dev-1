import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'Разработка лендингов', href: '#services' },
      { name: 'Разработка сайтов', href: '#services' },
      { name: 'Интернет-магазины', href: '#services' },
      { name: 'SEO продвижение', href: '#seo' }
    ],
    company: [
      { name: 'О компании', href: '#about' },
      { name: 'Наша команда', href: '#team' },
      { name: 'Портфолио', href: '#portfolio' },
      { name: 'Контакты', href: '#contacts' }
    ],
    social: [
      { name: 'Telegram', icon: 'Send', href: 'https://t.me/your_telegram' },
      { name: 'WhatsApp', icon: 'MessageCircle', href: 'https://wa.me/your_number' },
      { name: 'VK', icon: 'Share2', href: 'https://vk.com/your_group' },
      { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/your_profile' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-lp-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Л</span>
                </div>
                <span className="text-xl font-bold">Лого</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Профессиональная разработка лендингов и сайтов под ключ с гарантией результата
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Услуги</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-lp-blue transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Компания</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-lp-blue transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-400">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+78002223355" className="hover:text-lp-blue transition-colors">
                    8 (800) 222-33-55
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Icon name="Mail" size={18} />
                  <a href="mailto:info@example.com" className="hover:text-lp-blue transition-colors">
                    info@example.com
                  </a>
                </li>
              </ul>

              <div className="flex gap-3">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-lp-blue transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <Icon name={item.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>© {currentYear} Все права защищены</p>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-lp-blue transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#terms" className="hover:text-lp-blue transition-colors">
                  Пользовательское соглашение
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
