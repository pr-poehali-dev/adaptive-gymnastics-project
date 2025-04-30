
import { Badge } from "@/components/ui/badge";
import { Activity, Brain, Dna, Heart, Shield } from "lucide-react";

const WorkingPrincipleSection = () => {
  const principles = [
    {
      number: "01",
      title: "Осевое сжатие костей",
      description: "Стимулирует рост костного мозга и активизирует выработку новых клеток, необходимых для восстановления тканей",
      icon: <Dna className="h-10 w-10 text-primary" />
    },
    {
      number: "02",
      title: "Направленная весовая нагрузка",
      description: "Формирует точечно направленную весовую нагрузку на опорно-двигательный аппарат, минуя суставы",
      icon: <Shield className="h-10 w-10 text-primary" />
    },
    {
      number: "03",
      title: "Активация глубоких стабилизаторов",
      description: "Включает в работу глубокие стабилизирующие цепи центральной нервной системы, улучшая координацию",
      icon: <Brain className="h-10 w-10 text-primary" />
    },
    {
      number: "04",
      title: "Стимуляция регенерации",
      description: "Запускает выделение новых клеток и коллагена, способствуя восстановлению хрящевой и костной ткани",
      icon: <Activity className="h-10 w-10 text-primary" />
    },
    {
      number: "05",
      title: "Гормональная регуляция",
      description: "Мобилизует гормональную и нервную регуляцию, улучшая общее состояние организма и обменные процессы",
      icon: <Heart className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="working-principle">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/80 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30 py-1.5">Уникальная технология</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Принцип работы тренажёра "Ось Жизни"
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Тренажёр "Ось Жизни" — это уникальный инструмент, основанный на естественных ресурсах тела и природных механизмах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
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
            
            <div className="mt-8 p-6 bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Что даёт тренировка на тренажёре?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Укрепление костей</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Устранение болей</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Улучшение осанки</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Повышение иммунитета</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Омоложение организма</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold">✓</span>
                  <span>Улучшение обмена веществ</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                  {principle.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary font-bold">{principle.number}</span>
                    <h3 className="text-xl font-bold">{principle.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            ))}
            
            <div className="p-5 rounded-lg border border-border bg-muted/30">
              <p className="text-muted-foreground italic">
                "Всего 45 минут тренировки активируют выработку стволовых клеток и гормонов, запускают процессы омоложения и оздоровления организма. Подарите себе здоровье и молодость — начните уже сегодня!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingPrincipleSection;
