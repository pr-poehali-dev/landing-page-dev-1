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
    <section className="bg-[#5391CA] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 lg:mb-16 text-center">
            Почему выбирают нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                  <Icon name={benefit.icon} size={32} className="text-[#5391CA]" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white/90 leading-relaxed">
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
