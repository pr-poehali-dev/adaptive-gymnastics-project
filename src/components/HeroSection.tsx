
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-orange-500">
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 to-transparent opacity-70"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex flex-col text-left md:max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
              Верните здоровье без лекарств и операций!
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Революционная методика восстановления организма, которая уже помогла сотням людей избавиться от болей, укрепить кости и вернуть молодость.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 font-medium"
              >
                Записаться на консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 border-white text-white px-8 font-medium"
              >
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-md w-full h-auto">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Здоровый и активный образ жизни" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-bold">
                  Результат заметен с первой тренировки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
