import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Александр Петров',
      position: 'Директор компании "Строймастер"',
      avatar: 'https://ui-avatars.com/api/?name=A+P&background=5391CA&color=fff&size=80',
      rating: 5,
      text: 'Заказывали разработку лендинга для нашей строительной компании. Результат превзошел все ожидания! Конверсия выросла на 45% уже в первый месяц. Команда профессионалов, которая понимает бизнес-задачи.',
      date: '15 октября 2024'
    },
    {
      name: 'Елена Соколова',
      position: 'Владелица интернет-магазина "Beautique"',
      avatar: 'https://ui-avatars.com/api/?name=E+S&background=5391CA&color=fff&size=80',
      rating: 5,
      text: 'Сделали нам продающий сайт с удобным каталогом и интеграцией с 1С. Поддержка на высшем уровне - любые правки вносят быстро. Очень довольны сотрудничеством, рекомендуем!',
      date: '8 ноября 2024'
    },
    {
      name: 'Дмитрий Волков',
      position: 'CEO стартапа "TechHub"',
      avatar: 'https://ui-avatars.com/api/?name=D+V&background=5391CA&color=fff&size=80',
      rating: 5,
      text: 'Нужен был современный лендинг для привлечения инвесторов. Ребята создали стильный сайт с анимациями и понятной структурой. Презентация прошла успешно, инвестиции получены!',
      date: '22 ноября 2024'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center leading-tight">
            <span className="text-gray-900">Отзывы </span>
            <span className="text-lp-blue">наших клиентов</span>
          </h2>
          
          <p className="text-gray-600 text-lg text-center mb-12 lg:mb-16">
            Более 500 довольных клиентов по всей России
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 flex-1">
                  {testimonial.text}
                </p>

                <p className="text-sm text-gray-500">
                  {testimonial.date}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#reviews"
              className="inline-flex items-center gap-2 text-lp-blue font-semibold hover:gap-3 transition-all duration-200"
            >
              <span>Смотреть все отзывы</span>
              <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
