const PaymentSection = () => {
  const paymentStages = [
    {
      percentage: '25%',
      description: 'Предоплата после первичного обсуждения проекта'
    },
    {
      percentage: '25%',
      description: 'После утверждения первого этапа - прототипа или главной страницы'
    },
    {
      percentage: '50%',
      description: 'После финального утверждения проекта, но до передачи заказчику'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 lg:mb-16 leading-tight">
            <span className="text-lp-blue">Работаем по предоплате,</span>
            <br />
            <span className="text-gray-900">разделяя проект на этапы</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {paymentStages.map((stage, index) => (
              <div
                key={index}
                className="bg-[#F0F1F3] rounded-2xl p-8 lg:p-10"
              >
                <div className="text-6xl lg:text-7xl font-bold text-lp-blue mb-6">
                  {stage.percentage}
                </div>
                <p className="text-gray-900 text-base lg:text-lg leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
