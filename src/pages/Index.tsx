
import HeroSection from "@/components/HeroSection";
import AboutMethodSection from "@/components/AboutMethodSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import AxisTrainerSection from "@/components/AxisTrainerSection";
import AxisAdvantagesSection from "@/components/AxisAdvantagesSection";
import WorkingPrincipleSection from "@/components/WorkingPrincipleSection";
import ScientificBasisSection from "@/components/ScientificBasisSection";
import MethodBenefitsSection from "@/components/MethodBenefitsSection";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/2ed625df-f001-4b8f-993a-1b74ade186f8.JPG" 
              alt="Центр Жизни" 
              className="w-8 h-8"
            />
            <span className="font-bold text-lg">Центр Жизни</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О методике</a>
            <a href="#method-benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#axis-advantages" className="text-sm font-medium hover:text-primary transition-colors">Ось Жизни</a>
            <a href="#working-principle" className="text-sm font-medium hover:text-primary transition-colors">Принцип работы</a>
            <a href="#scientific-basis" className="text-sm font-medium hover:text-primary transition-colors">Научная база</a>
            <a href="#target-audience" className="text-sm font-medium hover:text-primary transition-colors">Кому подходит</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <Button size="sm">Записаться</Button>
        </div>
      </header>

      <main>
        <HeroSection />
        <AboutMethodSection />
        <MethodBenefitsSection />
        <AxisAdvantagesSection />
        <WorkingPrincipleSection />
        <ScientificBasisSection />
        <TargetAudienceSection />
        
        <section className="py-16 md:py-24 bg-gradient-to-br from-gradient-blue to-gradient-purple" id="contact">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-heading">
                  Начните свой путь к здоровью сегодня!
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Запишитесь на бесплатную консультацию или первое занятие! Подарите себе энергию и гармонию — будущее начинается здесь!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <span className="font-bold">✓</span>
                    <span>Безопасность и доступность</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="font-bold">✓</span>
                    <span>Естественность воздействия</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="font-bold">✓</span>
                    <span>Отсутствие медикаментов</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="font-bold">✓</span>
                    <span>Глубокая регенерация</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <span className="font-bold">✓</span>
                    <span>Долгосрочный эффект</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Центр Жизни</h3>
              <p className="text-muted-foreground text-sm">
                Уникальная методика восстановления организма через адаптивно-функциональную гимнастику
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <p className="text-muted-foreground text-sm mb-2">Телефон: +7 (999) 123-45-67</p>
              <p className="text-muted-foreground text-sm mb-2">Email: info@centrlife.ru</p>
              <p className="text-muted-foreground text-sm">Адрес: г. Москва, ул. Примерная, д. 123</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Информация</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li><a href="#about" className="hover:text-primary transition-colors">О методике</a></li>
                <li><a href="#axis-advantages" className="hover:text-primary transition-colors">Тренажер "Ось Жизни"</a></li>
                <li><a href="#scientific-basis" className="hover:text-primary transition-colors">Научное обоснование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Франшиза</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Время работы</h3>
              <p className="text-muted-foreground text-sm mb-2">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-muted-foreground text-sm mb-2">Сб: 10:00 - 18:00</p>
              <p className="text-muted-foreground text-sm">Вс: Выходной</p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Центр Жизни. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          size="icon"
          className="fixed right-6 bottom-6 z-50 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
