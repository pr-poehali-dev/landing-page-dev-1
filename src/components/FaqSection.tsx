import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Сколько времени занимает разработка лендинга?',
      answer: 'Стандартный лендинг разрабатывается за 7-14 рабочих дней. Срок зависит от сложности проекта, количества разделов и дополнительных функций. Мы согласовываем точные сроки после анализа ваших требований.'
    },
    {
      question: 'Что входит в стоимость разработки?',
      answer: 'В стоимость входит: разработка дизайна, верстка, программирование, адаптация под мобильные устройства, базовая SEO-оптимизация, интеграция форм обратной связи, установка аналитики, техподдержка в течение 1 месяца после запуска.'
    },
    {
      question: 'Нужно ли мне предоставлять тексты и изображения?',
      answer: 'Желательно, чтобы вы предоставили основную информацию о вашем бизнесе и услугах. Мы поможем структурировать тексты и можем заказать профессиональный копирайтинг за дополнительную плату. Изображения можем подобрать из фотостоков или организовать фотосъемку.'
    },
    {
      question: 'Будет ли сайт адаптирован под мобильные устройства?',
      answer: 'Да, все наши лендинги адаптивны и корректно отображаются на всех устройствах: компьютерах, планшетах и смартфонах. Мы тестируем на разных экранах и браузерах перед запуском.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Работаем по договору с поэтапной оплатой: 50% предоплата перед началом работ, 50% после завершения и согласования проекта. Возможна оплата безналичным переводом или картой. Предоставляем все закрывающие документы.'
    },
    {
      question: 'Могу ли я самостоятельно редактировать сайт после запуска?',
      answer: 'Да, мы можем установить удобную систему управления (CMS), через которую вы сможете менять тексты, изображения, цены без программирования. Также проведем обучение работе с административной панелью.'
    },
    {
      question: 'Предоставляете ли вы техподдержку после запуска?',
      answer: 'Да, первый месяц техподдержка входит в стоимость разработки. После этого можем заключить договор на абонентское обслуживание или работать по факту обращений. Оперативно реагируем на все запросы.'
    },
    {
      question: 'Гарантируете ли вы рост продаж после запуска лендинга?',
      answer: 'Мы создаем продающие лендинги с применением проверенных маркетинговых практик. Однако результат зависит от многих факторов: качества трафика, вашего предложения, конкуренции. Мы можем помочь с настройкой рекламы и аналитики для достижения лучших результатов.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-center leading-tight">
            <span className="text-gray-900">Частые </span>
            <span className="text-lp-blue">вопросы</span>
          </h2>
          
          <p className="text-gray-600 text-lg text-center mb-12 lg:mb-16">
            Ответы на популярные вопросы о разработке лендингов
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <Icon name="ChevronDown" size={24} className="text-lp-blue" />
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Не нашли ответ на свой вопрос?
            </p>
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-lp-blue hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors duration-200"
            >
              <span>Задать вопрос</span>
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
