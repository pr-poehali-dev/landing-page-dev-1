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
      
      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
              </svg>
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
                <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <span className="text-gray-700 font-medium">120+ проектов</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Средний чек 150 000₽</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
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
                  <div className="bg-white rounded p-1 mr-2">
                    <img 
                      src="https://cdn.poehali.dev/files/9f9d9d80-9563-495e-a36c-8c111dc40d28.png" 
                      alt="Telegram" 
                      className="w-4 h-4"
                    />
                  </div>
                  Написать в Telegram
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

          <div className="relative lg:flex hidden items-center justify-center">
            <div className="relative animate-scale-in z-20 h-[550px]">
              <img
                src="https://cdn.poehali.dev/files/3c355d63-7975-41ab-b3b3-c09459936325.png"
                alt="Профессиональный специалист по созданию лендингов"
                className="h-full w-auto object-contain relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;