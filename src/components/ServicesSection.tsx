const ServicesSection = () => {
  const services = [
    'Аналитика проекта',
    'ЦА-исследование',
    'Оффер формирование',
    'Структура лендинга',
    'Прототипирование',
    'Копирайтинг продающий',
    'Дизайн макета',
    'Адаптивная верстка',
    'CRM-интеграция',
    'SEO-база',
    'Аналитика настройка',
    'Тестирование',
    'Запуск страницы',
    'Оптимизация',
    'Техподдержка',
  ];

  return (
    <section className="bg-[#6BA4CE] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Создание лендинга
            <br />
            под ключ — просто!
          </h2>
          
          <p className="text-xl text-white mb-12">Мы все сделаем за вас:</p>

          <div className="flex flex-wrap gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-full px-6 py-3 text-gray-900 font-medium shadow-md hover:shadow-lg transition-shadow inline-block"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;