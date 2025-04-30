
import { Shield, Leaf, Ban, Dna, Clock } from "lucide-react";

const MethodBenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Безопасность и доступность",
      description: "Методика безопасна для людей всех возрастов и подходит для применения даже при наличии ограничений по здоровью"
    },
    {
      icon: <Leaf className="h-12 w-12 text-primary" />,
      title: "Естественность воздействия",
      description: "Активизирует собственные ресурсы организма без искусственного вмешательства в естественные процессы"
    },
    {
      icon: <Ban className="h-12 w-12 text-primary" />,
      title: "Отсутствие медикаментов",
      description: "Методика не требует применения фармакологических препаратов, что исключает побочные эффекты и зависимость"
    },
    {
      icon: <Dna className="h-12 w-12 text-primary" />,
      title: "Глубокая регенерация",
      description: "Воздействие на клеточном уровне, восстановление тканей и структур организма изнутри"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Долгосрочный эффект",
      description: "Запускает процессы самовосстановления, которые продолжаются даже после окончания курса тренировок"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden" id="method-benefits">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Преимущества методики
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Адаптивно-функциональная гимнастика имеет ряд уникальных преимуществ, которые делают ее эффективной альтернативой традиционным методам лечения
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center max-w-xs p-6 rounded-xl hover-scale transition-all duration-300"
            >
              <div className="mb-4 p-4 bg-primary/10 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gradient-blue via-gradient-purple to-gradient-orange p-8 rounded-xl text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">
                Миссия центра:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-2xl">•</span>
                  <span>Помочь людям раскрыть потенциал здоровья</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-2xl">•</span>
                  <span>Предложить научно обоснованную альтернативу традиционным методам реабилитации</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-2xl">•</span>
                  <span>Дать возможность восстановления без хирургического вмешательства</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/files/2ed625df-f001-4b8f-993a-1b74ade186f8.JPG" 
                  alt="Центр Жизни" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodBenefitsSection;
