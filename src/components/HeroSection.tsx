
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-orange-500">
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/20 to-transparent opacity-70"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 mb-8 animate-float">
            <img 
              src="https://cdn.poehali.dev/files/2ed625df-f001-4b8f-993a-1b74ade186f8.JPG" 
              alt="Центр Жизни" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
            Верните здоровье, энергию и гармонию — естественным способом!
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
            Откройте для себя уникальную методику восстановления организма, которая уже помогает сотням людей избавиться от болей, укрепить кости и вернуть молодость.
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
      </div>
    </div>
  );
};

export default HeroSection;
