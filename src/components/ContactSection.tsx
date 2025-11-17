import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="bg-[#F5F5F7] py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              <span className="text-gray-900">Остались вопросы? </span>
              <span className="text-lp-blue">Просто напиши</span>
              <span className="text-gray-900"> в Whatsapp или Telegram</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0088cc] hover:bg-[#0077b3] text-white font-semibold rounded-xl transition-colors duration-200 shadow-sm"
            >
              <Icon name="Send" size={20} />
              <span>Написать в Telegram</span>
            </a>

            <a
              href="https://wa.me/your_number"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-colors duration-200 shadow-sm"
            >
              <Icon name="MessageCircle" size={20} />
              <span>Написать в Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
