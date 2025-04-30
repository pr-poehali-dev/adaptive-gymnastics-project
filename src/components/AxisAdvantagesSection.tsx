
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, ShieldCheck, Users, Sparkles, Brain, Activity, Clock, Leaf, Heart
} from "lucide-react";

const AxisAdvantagesSection = () => {
  const categories = [
    {
      title: "Быстрый результат",
      icon: <Zap className="w-8 h-8 text-primary" />,
      benefits: [
        "Мгновенный прилив энергии и ощущение омоложения с первых тренировок.",
        "Активизация внутренних ресурсов организма для восстановления."
      ],
      image: "https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Безопасность",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      benefits: [
        "Без инъекций и медикаментов — активация природных механизмов тела.",
        "Подходит для всех возрастов и уровней подготовки."
      ],
      image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Глубокая регенерация",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      benefits: [
        "Рост новых клеток и коллагена — восстановление костей и тканей.",
        "Укрепление костей, суставов и связок, повышение гибкости."
      ],
      image: "https://images.unsplash.com/photo-1616279969866-c2894ed99ac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Гармония тела и разума",
      icon: <Brain className="w-8 h-8 text-primary" />,
      benefits: [
        "Перезагрузка нервной системы — снятие напряжения и скованности.",
        "Улучшение осанки и уверенности в себе, избавление от боли."
      ],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Долгосрочный эффект",
      icon: <Clock className="w-8 h-8 text-primary" />,
      benefits: [
        "Укрепление гормонального фона и иммунитета.",
        "Природное восстановление, больше энергии, меньше боли."
      ],
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const professionalCredentials = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      text: "Разработан профессионалами: спортсменами, физиологами, реабилитологами."
    },
    {
      icon: <Activity className="h-6 w-6 text-white" />,
      text: "Проверен на более чем 1000 человек — эффективность подтверждена."
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      text: "Научно обоснованный и безопасный метод восстановления."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background" id="axis-advantages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 py-1.5">Инновационный тренажер</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Почему «Ось Жизни» — ваш ключ к здоровью
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Революционный метод, основанный на естественных ресурсах вашего организма
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-0">
              <div className="h-1.5 bg-gradient-to-r from-gradient-orange to-gradient-purple"></div>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4">{category.title}</h3>
                      <ul className="space-y-3">
                        {category.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <p className="text-muted-foreground">{benefit}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-orange rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Почему выбирают «Ось Жизни»?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {professionalCredentials.map((credential, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    {credential.icon}
                  </div>
                  <p>{credential.text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Heart className="h-5 w-5" /> Миссия центра:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg">•</span>
                    <span>Помочь людям раскрыть потенциал здоровья</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg">•</span>
                    <span>Предложить научно обоснованную альтернативу традиционным методам</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg">•</span>
                    <span>Дать возможность восстановления без операций</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/30">
                  <img 
                    src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Тренировка на тренажере" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6">
                    <Badge className="bg-primary text-white">Тренажер "Ось Жизни"</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AxisAdvantagesSection;
