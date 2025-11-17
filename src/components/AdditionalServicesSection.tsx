const AdditionalServicesSection = () => {
  const services = [
    {
      title: 'Техническая поддержка сайта',
      icon: 'https://cdn.poehali.dev/files/df62914c-8d72-477b-8876-9ab0780b8dfa.png',
      features: [
        'Яндекс Директ (Поиск и РСЯ, разработка и ведение',
        'Техническая оптимизация',
        'Составление медиапланов и графика работ',
        'Медийная реклама проектов Яндекса'
      ]
    },
    {
      title: 'Настройка Яндекс Директ',
      icon: 'https://cdn.poehali.dev/files/46927dc1-5bef-4c12-a0b3-b56463e95a08.png',
      features: [
        'Яндекс Директ (Поиск и РСЯ, разработка и ведение',
        'Техническая оптимизация',
        'Составление медиапланов и графика работ',
        'Медийная реклама проектов Яндекса'
      ]
    },
    {
      title: 'SEO продвижение',
      icon: 'https://cdn.poehali.dev/files/b6671f88-6587-4cd3-a087-77291986dfbf.png',
      features: [
        'Яндекс Директ (Поиск и РСЯ, разработка и ведение',
        'Техническая оптимизация',
        'Составление медиапланов и графика работ',
        'Медийная реклама проектов Яндекса'
      ]
    },
    {
      title: 'E-mail рассылки',
      icon: 'https://cdn.poehali.dev/files/3324c7be-0d18-41e4-a54f-44ebb95e007c.png',
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
        backgroundImage: `url('https://cdn.poehali.dev/files/9b1ad8ba-f2ad-4270-8ce3-9d393db672a6.png')`,
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
                className="bg-white rounded-2xl p-6 flex flex-col shadow-sm border border-gray-100"
              >
                <div className="mb-6 bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-square">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
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