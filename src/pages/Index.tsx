import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            LP Genius
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессиональная разработка лендингов под ключ
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;