
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FlaskConical, TrendingUp, Zap, ArrowUpDown } from "lucide-react";

const ScientificBasisSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="scientific-basis">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Научные основы метода
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Адаптивно-функциональная гимнастика основана на серьезных научных исследованиях и доказанных физиологических эффектах
          </p>
        </div>

        <Tabs defaultValue="piezoelectric" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8 h-auto gap-2">
            <TabsTrigger value="piezoelectric" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
              <FlaskConical className="mr-2 h-4 w-4" />
              Пьезоэлектрический эффект
            </TabsTrigger>
            <TabsTrigger value="wolff" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Закон Вольфа
            </TabsTrigger>
            <TabsTrigger value="mechanism" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Zap className="mr-2 h-4 w-4" />
              Механизм действия
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="piezoelectric" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Открытие пьезоэлектрического эффекта в костях (1957, Ивао Ясуда)</CardTitle>
                <CardDescription>
                  Революционное открытие в области физиологии костной ткани
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Японский ученый Ивао Ясуда обнаружил, что кости обладают пьезоэлектрическими свойствами — при механическом давлении в костной ткани генерируется электрический сигнал, стимулирующий процессы регенерации.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-bold mb-2 flex items-center">
                    <ArrowUpDown className="w-5 h-5 mr-2 text-primary" />
                    Физиологический эффект:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Активация остеогенеза — стимуляция роста новых костных клеток</li>
                    <li>Генерация пьезоэлектричества — сигнал, запускающий регенерацию</li>
                    <li>Ускорение заживления и восстановления тканей</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  С 1997 года исследователи в США используют этот эффект для разработки методов воздействия на костную ткань. Созданы специальные тренажеры и программы тренировок.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="wolff" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Закон Вольфа и адаптация костной ткани</CardTitle>
                <CardDescription>
                  Фундаментальный принцип механической адаптации костей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  На основе закона Юлиуса Вольфа установлено, что костная ткань адаптируется к механическим нагрузкам: при увеличении нагрузки кости становятся прочнее. Минимальная сила для запуска формирования кости — это нагрузка, превышающая вес тела в 4,2 раза, а оптимально — от 5 до 15 раз.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">4.2×</div>
                    <p className="text-sm">Минимальная нагрузка для запуска регенерации</p>
                  </div>
                  <div className="bg-primary p-4 rounded-lg text-center text-white">
                    <div className="text-3xl font-bold mb-2">5-15×</div>
                    <p className="text-sm">Оптимальная нагрузка для максимального эффекта</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-primary mb-2">+40%</div>
                    <p className="text-sm">Увеличение прочности костной ткани</p>
                  </div>
                </div>
                <p>
                  Закон Вольфа объясняет, почему костная ткань теряет плотность при отсутствии нагрузки и укрепляется при правильном воздействии. Это стало основой для создания тренажера "Ось Жизни".
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mechanism" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Механизм действия</CardTitle>
                <CardDescription>
                  Как работает метод на клеточном и гормональном уровне
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  При нагрузке, превышающей вес тела в 5–15 раз, происходит генерация пьезоэлектричества, которое привлекает остеобласты — клетки, ответственные за формирование и укрепление костей. Эти клетки секретируют остеокальцин и другие гормоны, регулирующие гомеостаз глюкозы, развитие мозга, мужскую фертильность и иммунитет.
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <h4 className="font-bold mb-2">Физиологические эффекты и их роль:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-bold text-sm">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Выработка костных гормонов</p>
                        <p className="text-sm text-muted-foreground">Регулируют метаболизм, иммунитет, развитие мозга</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-bold text-sm">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Генерация пьезоэлектричества</p>
                        <p className="text-sm text-muted-foreground">Сигнал, запускающий регенерацию и укрепление костей</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary font-bold text-sm">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Улучшение регенеративных процессов</p>
                        <p className="text-sm text-muted-foreground">Ускорение заживления, укрепление опорно-двигательного аппарата</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            Адаптивно-функциональная гимнастика с использованием тренажера "Ось Жизни" — это не просто физические упражнения, а научно обоснованный метод, который воздействует на организм на клеточном уровне, запуская естественные механизмы регенерации.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificBasisSection;
