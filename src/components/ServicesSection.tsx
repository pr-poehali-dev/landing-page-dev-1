const ServicesSection = () => {
  const services = [
    'Разработаем структуру',
    'Напишем продающие тексты',
    'Создадим дизайн концепцию',
    'Настроим e-mail рассылки',
    'Создадим дизайн концепцию',
    'Настроим e-mail рассылки',
    'Разработаем структуру',
    'Напишем продающие тексты',
  ];

  return (
    <section className="bg-[#6BA4CE] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Заказать сайт
            <br />
            на Тильде очень просто
          </h2>
          
          <p className="text-xl text-white mb-12">
            Мы все сделаем за вас "Под ключ"!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-full px-6 py-3 text-center text-gray-900 font-medium shadow-md hover:shadow-lg transition-shadow"
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
