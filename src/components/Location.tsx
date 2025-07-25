import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Mountain, Trees, Compass } from 'lucide-react';

const Location = () => {
  const locationFeatures = [
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Планински район",
      description: "Разположена в красив планински район с чист въздух"
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: "Природа наоколо",
      description: "Заобиколена от гори и естествена красота"
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Туристически маршрути",
      description: "Близо до популярни туристически пътеки"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Лесен достъп",
      description: "Удобен достъп с автомобил по асфалтов път"
    }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Локация
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Идеалното място за отмора от забързаното ежедневие и провеждане на вашите тържества
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground mb-8">
              Зимен, балнеоложки, културен и еко туризъм
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-6 shadow-warm mb-8">
                <CardContent>
                  <p className="text-foreground leading-relaxed mb-6">
                    Къщата се намира на територията на община Самоков, разположена в Югозападна България, 
                    между няколко планини – Рила, Плана, Витоша, Верила, Ихтиманска и Средна гора, 
                    със средна надморска височина 950 м.
                  </p>
                  <p className="text-foreground leading-relaxed mb-6">
                    На една ръка разстояние от градския шум – Столицата е само на 60 км., 
                    а Пловдив – на 100 км., гр. Самоков – на 3 км.
                  </p>
                  <p className="text-primary font-semibold">
                    Лесен и бърз достъп по асфалтов път
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="p-6 shadow-warm">
                <CardHeader>
                  <CardTitle className="text-primary">В близост до нас:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>едни от най-хубавите зимни курорти – Боровец и Мальовица</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>единствената писта на Балканите за моторни спортове, отговаряща на стандартите на Формула</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Национален парк Рила, Рилските езера, връх Мусала (най-високият връх на Балканите), язовир Искър</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>много еко пътеки и паркове, въжен парк – „Рилко" и много други</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>минерални басейни</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Спортен комплекс Самелион</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Музеен комплекс „Цари Мали Град", Ловен дворец „Царска Бистрица", Голямата чешма – Самоков</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>Исторически музей – Самоков, Читалище-паметник „Отец Паисий" – Самоков</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>църкви, манастири, Байракли джамия и много други</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;