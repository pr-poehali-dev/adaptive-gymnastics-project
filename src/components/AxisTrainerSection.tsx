
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, ShieldCheck, Users, Activity, Sparkles, Brain 
} from "lucide-react";

const AxisTrainerSection = () => {
  const benefits = [
    {
      title: "Быстрый результат",
      description: "Мгновенный прилив энергии и ощущение омоложения с первых тренировок",
      icon: <Zap className="w-10 h-10 text-primary" />
    },
    {
      title: "Безопасность",
      description: "Без инъекций и медикаментов — активация природных механизмов организма",
      icon: <ShieldCheck className="w-10 h-10 text-primary" />
    },
    {
      title: "Для всех возрастов",
      description: "Подходит людям с разным уровнем подготовки и физического состояния",
      icon: <Users className="w-10 h-10 text-primary" />
    },
    {
      title: "Глубокая регенерация",
      description: "Рост новых клеток и коллагена, восстановление костей и тканей",
      icon: <Sparkles className="w-10 h-10 text-primary" />
    },
    {
      title: "Восстановление гармонии",
      description: "Перезагрузка нервной системы, снятие мышечного напряжения",
      icon: <Brain className="w-10 h-10 text-primary" />
    },
    {
      title: "Долгосрочный эффект",
      description: "Поддержание активного и молодого образа жизни, укрепление иммунитета",
      icon: <Activity className="w-10 h-10 text-primary" />
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30" id="axis-trainer">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 py-1.5">Инновационный подход</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Почему именно тренажер «Ось Жизни» — ваш лучший выбор
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Уникальный инструмент, разработанный профессионалами и основанный на естественных ресурсах тела
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-2xl font-bold">Принцип работы тренажёра "Ось Жизни"</h3>
            <p className="text-muted-foreground">
              Тренажёр "Ось Жизни" — это уникальный инструмент, основанный на естественных ресурсах тела и природных механизмах.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <p>Осевое сжатие костей стимулирует рост костного мозга</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <p>Формирует точечно направленную весовую нагрузку, минуя суставы</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <p>Включает в работу глубокие стабилизирующие цепи ЦНС</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">4</span>
                </div>
                <p>Запускает выделение новых клеток и коллагена</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-bold text-sm">5</span>
                </div>
                <p>Мобилизует гормональную и нервную регуляцию</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gradient-orange to-gradient-purple p-5 rounded-lg mt-8 text-white">
              <h4 className="font-bold mb-2">Почему выбирают «Ось Жизни»?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Разработан профессионалами: спортсменами, физиологами, реабилитологами</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Проверен на более чем 1000 человек — эффективность подтверждена</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Научно обоснованный и безопасный метод</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/556d6b1f-5638-4de2-8312-be871091f83a.png" 
                alt="Тренажер Ось Жизни" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <Badge className="self-start mb-2 bg-primary text-white">Тренажер "Ось Жизни"</Badge>
                <p className="text-white text-sm max-w-xs">
                  Уникальная запатентованная технология, основанная на осевой нагрузке и стимуляции естественных процессов регенерации
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-gradient-orange to-gradient-purple"></div>
              <CardContent className="p-6 pt-8">
                <div className="mb-4 p-3 bg-primary/10 rounded-full inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AxisTrainerSection;
