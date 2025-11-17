const PricingSection = () => {
  return (
    <section className="bg-[#F0F1F3] py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Стоимость{' '}
              <span className="text-lp-blue">разработки сайта</span>
              <br />
              <span className="text-lp-blue">под ключ 60 000 ₽.</span>{' '}
              <span className="text-gray-900">Обсудить проект:</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <a
              href="https://t.me/lpgenius"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0088cc] hover:bg-[#006699] text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg w-full lg:w-auto"
            >В Telegram</a>

            <a
              href="https://wa.me/79996571669"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg w-full lg:w-auto"
            >В Whatsapp</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;