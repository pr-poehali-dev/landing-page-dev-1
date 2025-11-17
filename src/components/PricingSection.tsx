import Icon from '@/components/ui/icon';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'БАЗОВЫЙ',
      subtitle: 'ГОТОВЫЙ ЛЕНДИНГ ПОД КЛЮЧ',
      price: '60 000 ₽',
      description: 'Идеален, если нужен качественный продающий сайт под ключ.',
      features: [
        'Разработка лендинга',
        'Анализ конкурентов',
        'Прототипирование',
        'Дизайн всех экранов (десктоп + мобайл)',
        'Продающий копирайтинг',
        'Базовая SEO (мета-теги, заголовки, структура, alt-теги)',
        'Верстка и запуск',
        'Проверка корректности работы на всех устройствах'
      ],
      highlight: false
    },
    {
      name: 'СТАНДАРТ',
      subtitle: 'ЛЕНДИНГ ПОД КЛЮЧ + МАРКЕТИНГОВАЯ НАСТРОЙКА',
      price: '80 000 ₽',
      description: 'Идеален, если после создания сайта нужно сразу подготовить маркетинговый фундамент.',
      features: [
        'Включено всё из Базового, плюс:',
        'Подключение Яндекс Метрики',
        'Настройка целей и событий',
        'Установка и настройка Яндекс Вебмастера',
        'Настройка рекламных кампаний в Яндекс Директ (полностью под ключ)',
        'Администрирование и техническая поддержка в течение 1 месяца'
      ],
      highlight: true
    },
    {
      name: 'ПРЕМИУМ',
      subtitle: 'КОМПЛЕКСНОЕ ПРОДВИЖЕНИЕ',
      price: 'от 80 000 ₽',
      priceSubtext: 'разово + ежемесячное ведение',
      monthlyCost: '10 000 ₽ администрирование + 20 000 ₽ ведение контекстной рекламы',
      description: 'Для тех, кому нужен не просто сайт, а стабильный поток заявок с постоянной оптимизацией.',
      features: [
        'Включено всё из Стандарта, плюс:',
        'Постоянное ведение Яндекс Директ',
        'Ежемесячная оптимизация рекламных кампаний',
        'Постоянное администрирование проекта',
        'Техническая поддержка на регулярной основе',
        'Аналитика эффективности и ежемесячные рекомендации',
        'Еженедельные отчёты'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="relative bg-white py-16 lg:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/c70dcebe-de0a-4910-a427-9bec28362eb3.png)' }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Тарифы на <span className="text-lp-blue">разработку</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий пакет услуг для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? 'bg-lp-blue text-white shadow-2xl scale-105 lg:scale-110'
                    : 'bg-gray-50 border-2 border-gray-200'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-lp-blue px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm font-medium mb-4 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                    {plan.subtitle}
                  </p>
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-lp-blue'}`}>
                      {plan.price}
                    </span>
                  </div>
                  {plan.priceSubtext && (
                    <p className={`text-xs mb-2 ${plan.highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                      {plan.priceSubtext}
                    </p>
                  )}
                  {plan.monthlyCost && (
                    <p className={`text-xs font-medium ${plan.highlight ? 'text-blue-100' : 'text-gray-600'}`}>
                      {plan.monthlyCost}
                    </p>
                  )}
                </div>

                <p className={`mb-6 text-sm ${plan.highlight ? 'text-blue-50' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <div className="mb-8 flex-grow">
                  <h4 className={`text-sm font-bold mb-4 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    Включено:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Icon 
                          name="Check" 
                          className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-white' : 'text-lp-blue'}`}
                          size={20}
                        />
                        <span className={`text-sm ${plan.highlight ? 'text-blue-50' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://t.me/lpgenius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg ${
                      plan.highlight
                        ? 'bg-white text-lp-blue hover:bg-gray-100'
                        : 'bg-[#0088cc] text-white hover:bg-[#006699]'
                    }`}
                  >
                    <img 
                      src="https://cdn.poehali.dev/files/9f9d9d80-9563-495e-a36c-8c111dc40d28.png" 
                      alt="Telegram" 
                      className="w-5 h-5 mr-2"
                    />
                    Написать в Telegram
                  </a>

                  <a
                    href="https://wa.me/79996571669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 shadow-lg ${
                      plan.highlight
                        ? 'bg-white text-[#25D366] hover:bg-gray-100'
                        : 'bg-[#25D366] text-white hover:bg-[#1fb855]'
                    }`}
                  >
                    <Icon name="MessageCircle" className="w-5 h-5 mr-2" />
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;