const LandingStructureSection = () => {
  const structureItems = [
    {
      number: 1,
      title: 'Шапка сайта',
      description: 'Ключевые моменты взаимодействия и навигации'
    },
    {
      number: 2,
      title: 'Интро',
      description: 'Уникальное товарное предложение с лид-формой'
    },
    {
      number: 3,
      title: 'Каталог',
      description: 'Каталог товаров и услуг с возможностью заказа'
    },
    {
      number: 4,
      title: 'Преимущества',
      description: 'Почему именно Ваш продукт - это то, что нужно посетителю?'
    },
    {
      number: 5,
      title: 'Медиа контент',
      description: 'Видео, фотогалерея, инфографика способствует улучшению контента'
    },
    {
      number: 6,
      title: 'Информация',
      description: 'Текст о товарах, услугах, специфике работы компании'
    },
    {
      number: 7,
      title: 'Прайс-лист',
      description: 'Блок с табличками тарифов и пакетами услуг'
    },
    {
      number: 8,
      title: 'Лид-форма',
      description: 'Приторная точка заявки, форма захвата'
    },
    {
      number: 9,
      title: 'Триггеры доверия',
      description: 'Отзывы клиентов, логотипы компаний, успешные кейсы'
    },
    {
      number: 10,
      title: 'Контакты',
      description: 'Контактная информация, форма обратной связи, карта, и прочее'
    }
  ];

  return (
    <section 
      className="relative bg-white py-12 sm:py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/1df52415-53c3-4854-8de2-c0b4540783fc.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-lp-blue">Структура</span>{' '}
            <span className="text-gray-900">лендинга</span>
          </h2>
          
          <p className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-10 lg:mb-12">
            Что я увижу на своем сайте?
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="order-2 lg:order-1 flex items-start justify-center">
              <img
                src="https://cdn.poehali.dev/files/9e703bcc-401b-4f48-a532-7b7154f556af.png"
                alt="Структура лендинга"
                className="w-full max-w-sm sm:max-w-md mx-auto h-auto object-contain"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              {structureItems.map((item) => (
                <div key={item.number} className="flex gap-3 sm:gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-lp-blue text-white flex items-center justify-center text-sm sm:text-base font-bold">
                    {item.number}
                  </div>
                  
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingStructureSection;