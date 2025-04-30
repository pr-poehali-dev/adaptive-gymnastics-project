
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, ShieldCheck, Users, Sparkles, Brain, Activity, Clock, Leaf, Heart
} from "lucide-react";

const AxisAdvantagesSection = () => {
  const categories = [
    {
      title: "Быстрый и ощутимый результат",
      icon: <Zap className="w-8 h-8 text-primary" />,
      benefits: [
        "Мгновенный прилив энергии и ощущение омоложения — почувствуйте себя лучше и моложе уже с первых тренировок.",
        "Улучшение общего состояния — активизация внутренних ресурсов организма для восстановления и укрепления."
      ]
    },
    {
      title: "Безопасность и естественность",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      benefits: [
        "Без инъекций, медикаментов или хирургии — всё происходит за счет активации природных механизмов вашего тела.",
        "Подходит для всех возрастов и уровней подготовки — безопасно и эффективно для любого человека."
      ]
    },
    {
      title: "Глубокая регенерация и укрепление",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      benefits: [
        "Рост новых клеток и коллагена — восстанавливаются кости и соединительные ткани, что особенно важно при сколиозе и остеопорозе.",
        "Укрепление костей, суставов и связок — делаете тело сильнее и устойчивее к травмам.",
        "Гибкость и легкость в суставах — благодаря выделению коллагена, движения становятся свободными и приятными."
      ]
    },
    {
      title: "Восстановление гармонии тела и разума",
      icon: <Brain className="w-8 h-8 text-primary" />,
      benefits: [
        "Перезагрузка нервной системы — снимается мышечное напряжение, исчезают спазмы и скованность.",
        "Глубокое мышечное расслабление — избавление от тремора и боли.",
        "Ровная осанка и уверенность в себе — расправленные плечи, исчезновение искривлений и сколиоза."
      ]
    },
    {
      title: "Долгосрочные преимущества",
      icon: <Clock className="w-8 h-8 text-primary" />,
      benefits: [
        "Поддержание активного и молодого образа жизни — укрепление гормонального фона и иммунитета.",
        "Поддержка здоровья без медикаментов — природное восстановление и профилактика заболеваний.",
        "Повышение качества жизни — больше энергии, меньше боли, больше уверенности."
      ]
    }
  ];

  const professionalCredentials = [
    {
      icon: <Users className="h-6 w-6 text-white" />,
      text: "Разработан профессионалами: спортсменами, физиологами, реабилитологами и кинезиологами."
    },
    {
      icon: <Activity className="h-6 w-6 text-white" />,
      text: "Проверен на более чем 1000 человек — эффективность подтверждена практикой."
    },
    {
      icon: <Leaf className="h-6 w-6 text-white" />,
      text: "Научно обоснованный и безопасный — основан на естественных ресурсах тела и природных механизмах."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background" id="axis-advantages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 py-1.5">Уникальная технология</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Почему именно тренажер «Ось Жизни» — ваш лучший выбор для здоровья и молодости
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Откройте для себя революционный метод, основанный на естественных ресурсах вашего организма
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow border-0">
              <div className="h-1.5 bg-gradient-to-r from-gradient-orange to-gradient-purple"></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
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
                    <span>Предложить научно обоснованную альтернативу традиционным методам реабилитации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-lg">•</span>
                    <span>Дать возможность восстановления без хирургического вмешательства</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/30">
                  <img 
                    src="https://cdn.poehali.dev/files/556d6b1f-5638-4de2-8312-be871091f83a.png" 
                    alt="Тренажер Ось Жизни" 
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
