const AdditionalServicesSection = () => {
  const services = [
    {
      title: 'Техническая поддержка сайта',
      icon: '⚙️',
      features: [
        'Яндекс Директ (Поиск и РСЯ, разработка и ведение',
        'Техническая оптимизация',
        'Составление медиапланов и графика работ',
        'Медийная реклама проектов Яндекса'
      ]
    },
    {
      title: 'Настройка Яндекс Директ',
      icon: '🎯',
      features: [
        'Яндекс Директ (Поиск и РСЯ, разработка и ведение',
        'Техническая оптимизация',
        'Составление медиапланов и графика работ',
        'Медийная реклама проектов Яндекса'
      ]
    },
    {
      title: 'SEO продвижение',
      icon: '🚀',
      features: [
        'Яндекс Директ (Поиск и РСЯ, разработка и ведение',
        'Техническая оптимизация',
        'Составление медиапланов и графика работ',
        'Медийная реклама проектов Яндекса'
      ]
    },
    {
      title: 'Копирайтинг и наполнение сайта',
      icon: '✍️',
      features: [
        'Яндекс Директ (Поиск и РСЯ, разработка и ведение',
        'Техническая оптимизация',
        'Составление медиапланов и графика работ',
        'Медийная реклама проектов Яндекса'
      ]
    }
  ];

  return (
    <section 
      className="relative bg-white py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/e3b48553-2e89-4b41-a8a9-471f95392473.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 lg:mb-16 leading-tight">
            <span className="text-lp-blue">Дополнительные</span>{' '}
            <span className="text-gray-900">услуги</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F0F1F3] rounded-2xl p-6 flex flex-col"
              >
                <div className="mb-6 bg-white rounded-xl p-8 flex items-center justify-center aspect-square">
                  <span className="text-7xl">{service.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lp-blue mt-1.5 flex-shrink-0">•</span>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;