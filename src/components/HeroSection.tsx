const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#F0F1F3]">
      <div 
        className="absolute top-0 left-0 w-[60%] h-full opacity-40"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/files/4e9d0388-db6b-4d85-8293-5e87c430d22b.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
        }}
      />
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-semibold text-lp-blue">Запуск за 7 дней</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Лендинг который{' '}
              <span className="text-lp-blue">продаёт в 3 раза больше</span>{' '}
              обычного сайта
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl font-medium">
              Конверсия до 15% вместо стандартных 3-5%. Не просто красиво — реально работает
            </p>

            <div className="flex flex-wrap items-center gap-6 py-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <span className="text-gray-700 font-medium">120+ проектов</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Средний чек 150 000₽</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <span className="text-gray-700 font-medium">4.9★ на Яндекс</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-lp-blue">
              <p className="text-lg font-bold text-gray-900 mb-2">
                🎁 Специальное предложение
              </p>
              <p className="text-gray-700 mb-4">
                Бесплатный прототип + бриф за 2 часа. Увидите будущий лендинг до начала работ
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/lpgenius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-lp-blue hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/fe5ba28d-cc07-4d61-b3f8-1b88ac27827e.png" 
                    alt="Telegram" 
                    className="w-5 h-5 mr-2"
                  />
                  Получить прототип бесплатно
                </a>

                <a
                  href="https://wa.me/79996571669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/b139eed7-778b-46fb-bd24-05a32359104f.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5 mr-2"
                  />
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative animate-scale-in z-20">
              <img
                src="https://cdn.poehali.dev/projects/a1733ddd-1511-4faf-aaa1-6db9599a0297/files/fd119f71-bfc8-43d4-ae2a-633ddd0a4896.jpg"
                alt="Схема структуры продающего лендинга"
                className="w-full h-auto object-contain relative z-20 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;