
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutMethodSection = () => {
  const benefits = [
    "Быстрое избавление от боли, сколиоза и искривлений",
    "Улучшение осанки и равновесия",
    "Восстановление гибкости суставов, связок и костей",
    "Улучшение гормонального баланса и иммунитета",
    "Снятие мышечных спазмов и тремора",
    "Оздоровление без медикаментов и хирургии"
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gradient-orange">
            Технология здоровья без лекарств и операций
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Научно подтвержденный метод восстановления организма, запускающий естественные механизмы регенерации
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6">Что вы получите:</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-muted-foreground mb-4">
                Занятия проходят под наблюдением опытных тренеров, которые подбирают индивидуальную нагрузку. Всего 45 минут тренировки активируют выработку стволовых клеток и гормонов, запускают процессы омоложения организма.
              </p>
              <Button className="mt-4 group">
                Начать сейчас
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Тренажер Ось Жизни" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-bold">Тренажер "Ось Жизни"</p>
                  <p className="text-sm opacity-90">Уникальная технология для восстановления и омоложения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMethodSection;
