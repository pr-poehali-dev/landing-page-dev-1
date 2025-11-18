import Icon from '@/components/ui/icon';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: 'Award',
      title: 'Опыт более 10 лет',
      description: 'Реализовали более 500 успешных проектов в различных сферах бизнеса'
    },
    {
      icon: 'Users',
      title: 'Профессиональная команда',
      description: 'Команда из сертифицированных специалистов с подтвержденной квалификацией'
    },
    {
      icon: 'Clock',
      title: 'Соблюдение сроков',
      description: 'Гарантируем выполнение проекта точно в установленные сроки'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Предоставляем полную гарантию на все выполненные работы'
    },
    {
      icon: 'Headphones',
      title: 'Техподдержка 24/7',
      description: 'Круглосуточная поддержка и консультации по всем вопросам'
    },
    {
      icon: 'TrendingUp',
      title: 'Индивидуальный подход',
      description: 'Разрабатываем уникальное решение под задачи вашего бизнеса'
    }
  ];

  return (
    <section className="bg-[#5391CA] py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 sm:mb-12 lg:mb-16 text-center">
            Почему выбирают нас
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon name={benefit.icon} size={28} className="text-[#5391CA] sm:w-8 sm:h-8" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;