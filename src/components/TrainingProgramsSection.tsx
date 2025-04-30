
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Activity, Heart, Shield, Clock, Zap, Brain } from "lucide-react";

const TrainingProgramsSection = () => {
  const programs = [
    {
      title: "Восстановительная",
      description: "Для людей с болями и травмами",
      icon: <Shield className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Восстановление после травм",
        "Устранение болевого синдрома",
        "Улучшение подвижности суставов"
      ],
      duration: "6 недель",
      intensity: "Низкая",
      price: "12 500 ₽"
    },
    {
      title: "Спортивная",
      description: "Для атлетов и активных людей",
      icon: <Activity className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Укрепление костей и связок",
        "Повышение спортивных результатов",
        "Профилактика травм"
      ],
      duration: "8 недель",
      intensity: "Высокая",
      price: "15 000 ₽",
      popular: true
    },
    {
      title: "Омолаживающая",
      description: "Для людей 40+",
      icon: <Heart className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1521311587896-6c5c33c0b691?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Гормональный баланс",
        "Укрепление костной массы",
        "Повышение энергичности"
      ],
      duration: "10 недель",
      intensity: "Средняя",
      price: "16 000 ₽"
    },
    {
      title: "Офисная",
      description: "Для людей с сидячей работой",
      icon: <Clock className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1573497019236-61f684d709fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Коррекция осанки",
        "Снятие напряжения спины",
        "Профилактика остеохондроза"
      ],
      duration: "6 недель",
      intensity: "Низкая-Средняя",
      price: "12 000 ₽"
    },
    {
      title: "Нейростимуляция",
      description: "Для активации мозговой деятельности",
      icon: <Brain className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1644329843842-ffd59d4b5e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Улучшение координации",
        "Стимуляция когнитивных функций",
        "Снятие стресса и тревожности"
      ],
      duration: "8 недель",
      intensity: "Средняя",
      price: "14 000 ₽"
    },
    {
      title: "Базовая",
      description: "Для всех, кто заботится о здоровье",
      icon: <Zap className="h-8 w-8 text-primary" />,
      image: "https://images.unsplash.com/photo-1671377516215-e995d27cc7a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      benefits: [
        "Общее укрепление организма",
        "Улучшение осанки и гибкости",
        "Повышение жизненного тонуса"
      ],
      duration: "8 недель",
      intensity: "Средняя",
      price: "13 000 ₽"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background" id="training-programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 py-1.5">Индивидуальный подход</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Программы тренировок для ваших целей
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждая программа разработана специалистами под конкретные задачи и включает комплекс упражнений на тренажере "Ось Жизни"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0 hover-scale flex flex-col">
              <div className="h-48 relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {program.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">Популярная</Badge>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                </div>
              </div>
              
              <CardHeader className="pt-6 pb-2">
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-muted/50 p-2 rounded text-center">
                    <p className="text-xs text-muted-foreground">Длительность</p>
                    <p className="font-medium">{program.duration}</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded text-center">
                    <p className="text-xs text-muted-foreground">Интенсивность</p>
                    <p className="font-medium">{program.intensity}</p>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-xs text-muted-foreground">Стоимость курса</p>
                  <p className="font-bold text-xl">{program.price}</p>
                </div>
                <Button size="sm" variant="outline" className="group">
                  Подробнее
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Не знаете, какая программа подойдет именно вам? Запишитесь на бесплатную консультацию, и наши специалисты помогут выбрать оптимальный вариант для достижения ваших целей.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramsSection;
