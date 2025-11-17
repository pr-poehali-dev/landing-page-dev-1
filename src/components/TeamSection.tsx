const TeamSection = () => {
  const teamMembers = [
    {
      role: 'ДИЗАЙНЕР',
      description: 'Создаёт стиль и визуальную логику страниц',
      image: 'https://cdn.poehali.dev/files/d804730f-76be-4531-a723-c748ad4bd048.jpg',
      responsibilities: [
        'Разрабатывает визуальный стиль и интерфейс',
        'Создаёт прототипы и финальный дизайн',
        'Подбирает шрифты, цвета и композицию',
        'Делает сайт современным, удобным и конверсионным'
      ]
    },
    {
      role: 'РАЗРАБОТЧИК',
      description: 'Собирает сайт, обеспечивает скорость и стабильность',
      image: 'https://cdn.poehali.dev/files/082cbc48-edcb-47ee-843b-7689d687f6a5.jpg',
      responsibilities: [
        'Верстает сайт по макету',
        'Делает адаптив под все устройства',
        'Настраивает скорость загрузки',
        'Контролирует корректную работу всех элементов'
      ]
    },
    {
      role: 'КОПИРАЙТЕР',
      description: 'Пишет убедительные тексты и формирует структуру',
      image: 'https://cdn.poehali.dev/files/7954dad9-0323-486b-b568-a4a66f4ce053.jpg',
      responsibilities: [
        'Строит логику лендинга',
        'Пишет продающие тексты',
        'Работает с выгодами и возражениями',
        'Создаёт сильные заголовки и офферы'
      ]
    },
    {
      role: 'МАРКЕТОЛОГ',
      description: 'Настраивает аналитику и приводит стабильный трафик',
      image: 'https://cdn.poehali.dev/files/f3d8e4d6-b2c6-4846-bdbd-4f6543ace5ee.jpg',
      responsibilities: [
        'Настраивает Яндекс Метрику',
        'Подключает цели и события',
        'Создаёт кампании в Яндекс Директ',
        'Анализирует эффективность и улучшает конверсию'
      ]
    }
  ];

  const advantages = [
    'Работаем по прозрачному и отлаженному процессу',
    'Берём на себя полный цикл: дизайн → разработка → тексты → маркетинг',
    'Глубоко погружаемся в задачу и понимаем логику бизнеса',
    'Превращаем идеи в рабочие, понятные и продающие решения',
    'Гарантируем понятные сроки и стабильное качество',
    'Поддерживаем проект на каждом этапе и не пропадаем после запуска',
    'Собираем решения, которые работают на результат, а не просто «выглядят красиво»'
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-gray-900">В команде только</span>
            <br />
            <span className="text-lp-blue">опытные специалисты</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#F0F1F3] rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.role}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.role}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                        <span className="text-lp-blue mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F0F1F3] rounded-2xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">
                  Почему с нами работают
                </h3>
                <ul className="space-y-4">
                  {advantages.slice(0, 4).map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lp-blue text-xl mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-4 mt-12 md:mt-0">
                  {advantages.slice(4).map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-lp-blue text-xl mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed">{advantage}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://t.me/lpgenius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#0088cc] hover:bg-[#006699] text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
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
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                  >
                    <img 
                      src="https://cdn.poehali.dev/files/583157a4-6b0e-4dcf-ba1e-dc60bc1d1fb0.png" 
                      alt="WhatsApp" 
                      className="w-5 h-5 mr-2"
                    />
                    Написать в Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
