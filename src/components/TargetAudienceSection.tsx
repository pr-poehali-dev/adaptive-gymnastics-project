
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Clock, Heart, Shield, Users, Zap } from "lucide-react";

const TargetAudienceSection = () => {
  const audienceGroups = [
    { 
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Военным",
      description: "В усиление к реабилитационным курсам"
    },
    { 
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: "Спортсменам",
      description: "Для быстрого восстановления после травм"
    },
    { 
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Офисным работникам",
      description: "Против сколиоза, артроза, остеопороза"
    },
    { 
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Людям с гормональными сбоями",
      description: "Для нормализации гормонов и метаболизма"
    },
    { 
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Пожилым людям",
      description: "Для сохранения подвижности и профилактики"
    },
    { 
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Людям с болями",
      description: "Для устранения дискомфорта и восстановления"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30" id="target-audience">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Кому нужна адаптивная гимнастика?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Наша методика подходит самым разным группам людей, каждая из которых получает свои уникальные преимущества
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceGroups.map((group, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow hover-scale">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{group.title}</h3>
                <p className="text-muted-foreground">{group.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gradient-orange to-gradient-purple p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            "Раскройте природный потенциал и живите активно до 150 лет!"
          </h3>
          <p className="text-lg opacity-90">
            Адаптивно-Функциональная Гимнастика — ключ к источнику молодости, энергии и здоровью без инъекций и хирургии!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
