const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/c4714e97-002d-4630-a9fa-0939e2073f4d.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-16 lg:py-24 bg-[#F0F1F3]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Разрабатываем{' '}
              <span className="text-lp-blue">любые лендинги под ваши</span>{' '}
              товары и услуги.
            </h1>
            
            <p className="text-lg text-gray-700 max-w-xl">
              Создаём цифровые продукты и оказываем дизайн-поддержку крутым стартапам. 
              Напишите нам в мессенджеры
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/lpgenius"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0088cc] hover:bg-[#0077b3] text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
              >
                <img 
                  src="https://cdn.poehali.dev/files/fe5ba28d-cc07-4d61-b3f8-1b88ac27827e.png" 
                  alt="Telegram" 
                  className="w-5 h-5 mr-2"
                />
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
                Написать в Whatsapp
              </a>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/746773fd-292b-417a-af96-abf8f5157e01.png"
                alt="Professional team member"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;