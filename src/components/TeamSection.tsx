const TeamSection = () => {
  const achievements = [
    'Суммарно мы разработали около 400 сайтов',
    'Обучили более 300 специалистов веб дизайну и разработке мобильных сайтов',
    'Поработав с нами, вы обретёте чёткого подрядчика и надёжного партнёра',
    'Суммарно мы разработали около 400 сайтов',
    'Обучили более 300 специалистов веб дизайну и разработке мобильных сайтов',
    'Поработав с нами, вы обретёте чёткого подрядчика и надёжного партнёра',
    'Суммарно мы разработали около 400 сайтов',
    'Обучили более 300 специалистов веб дизайну и разработке мобильных сайтов',
    'Поработав с нами, вы обретёте чёткого подрядчика и надёжного партнёра'
  ];

  const teamMembers = [
    {
      name: 'Рекрутер',
      description: 'Находит и отбирает лучших кандидатов',
      image: 'https://cdn.poehali.dev/files/d804730f-76be-4531-a723-c748ad4bd048.jpg'
    },
    {
      name: 'HR-консультант',
      description: 'Оценивает мотивацию и соответствие культуре',
      image: 'https://cdn.poehali.dev/files/082cbc48-edcb-47ee-843b-7689d687f6a5.jpg'
    },
    {
      name: 'Эксперт по оценке',
      description: 'Проводит тестирования и анализ навыков',
      image: 'https://cdn.poehali.dev/files/7954dad9-0323-486b-b568-a4a66f4ce053.jpg'
    },
    {
      name: 'Аккаунт-менеджер',
      description: 'Координирует проект и поддерживает связь',
      image: 'https://cdn.poehali.dev/files/f3d8e4d6-b2c6-4846-bdbd-4f6543ace5ee.jpg'
    }
  ];

  return (
    <section className="bg-[#F0F1F3] py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="text-gray-900">В команде только</span>
                <br />
                <span className="text-lp-blue">опытные специалисты</span>
              </h2>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-lp-blue text-lg sm:text-xl flex-shrink-0 mt-0.5">•</span>
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://t.me/lpgenius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0088cc] hover:bg-[#006699] text-white rounded-lg text-sm sm:text-base font-medium transition-all hover:scale-105 shadow-lg"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/9f9d9d80-9563-495e-a36c-8c111dc40d28.png" 
                    alt="Telegram" 
                    className="w-5 h-5 mr-2"
                  />
                  Написать в Telegram
                </a>
                <a
                  href="https://wa.me/79996571669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-lg text-sm sm:text-base font-medium transition-all hover:scale-105 shadow-lg"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/583157a4-6b0e-4dcf-ba1e-dc60bc1d1fb0.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5 mr-2"
                  />
                  Написать в Whatsapp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-3 sm:p-4">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm">
                      {member.description}
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

export default TeamSection;