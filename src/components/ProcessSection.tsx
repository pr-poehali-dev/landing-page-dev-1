const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'БРИФ И АНАЛИТИКА',
      description: 'Короткое интервью, определение целей, изучение ниши, аудитории и конкурентов, формирование оффера и структуры.',
    },
    {
      number: '02',
      title: 'ПРОТОТИПИРОВАНИЕ',
      description: 'Создание детального прототипа с логикой блоков, сценариями взаимодействия и общей архитектурой страницы.',
    },
    {
      number: '03',
      title: 'КОПИРАЙТИНГ',
      description: 'Разработка продающих текстов: заголовки, оффер, преимущества, триггеры доверия, CTA, обработка возражений.',
    },
    {
      number: '04',
      title: 'ДИЗАЙН',
      description: 'Отрисовка концепции, согласование визуального стиля, затем полный дизайн всех экранов и адаптивов.',
    },
    {
      number: '05',
      title: 'РАЗРАБОТКА И ИНТЕГРАЦИИ',
      description: 'Адаптивная верстка, анимации, техническая оптимизация, подключение CRM, форм, пикселей и аналитики, базовая SEO-настройка.',
    },
    {
      number: '06',
      title: 'ТЕСТ И РЕЛИЗ',
      description: 'Проверка функционала, корректное отображение на устройствах, финальный запуск и техническое сопровождение при необходимости.',
    },
  ];

  return (
    <section 
      className="relative bg-white py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/4cbeea44-4791-4f3a-b434-18e1a928694b.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 leading-tight max-w-3xl">
          <span className="text-lp-blue">Отлаженный процесс</span>{' '}
          <span className="text-gray-900">от идеи до готового сайта</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-lp-blue">
                  {step.number}
                </div>
                <div className="w-12 h-1 bg-gray-900"></div>
              </div>
              
              <h3 className="text-xl font-bold text-lp-blue uppercase">
                {step.title}
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;