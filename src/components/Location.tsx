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
            Идеално място за бягство от градския шум
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Перфектно място за почивка
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Къщата се намира в сърцето на българската планина, 
                заобиколена от девствена природа и кристално чист въздух. 
                Тук ще намерите спокойствието, което търсите, далеч от 
                градския шум и стрес.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {locationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-primary/10 text-primary rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden shadow-warm">
              <CardHeader className="text-center">
                <CardTitle className="text-primary">Как да ни намерите</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Адрес:</h4>
                  <p className="text-muted-foreground">
                    с. Примерно село<br />
                    общ. Примерна община<br />
                    обл. Примерна област
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">GPS координати:</h4>
                  <p className="text-muted-foreground font-mono">
                    42.1234° N, 23.5678° E
                  </p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>🚗 1.5 часа от София</p>
                  <p>🏔️ 15 мин до най-близката планина</p>
                  <p>🛒 10 мин до магазин</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;