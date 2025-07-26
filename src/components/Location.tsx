import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { MapPin, Mountain, Trees, Compass } from 'lucide-react';

const Location = () => {
  const locationFeatures = [
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Планински район",
      description: "В близост до нас са едни от най-хубавите зимни курорти – Боровец и Мальовица "
    },
    {
      icon: <Trees className="w-6 h-6" />,
      title: "Природа и маршрути",
      description: "Национален парк Рила, Рилските езера, връх Мусала, язовир Искър; еко пътеки и паркове, въжен парк „Рилко“, минерални басейни и много други"
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Културни обекти",
      description: "„Цари Мали Град“, „Царска Бистрица“, музеи, църкви, манастири, Байракли джамия и много други"
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
            Идеалното място за зимен, балнеоложки , културен и еко туризъм
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Лява страна: Текст */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Перфектно място за почивка и партита
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Къщата се намира в община Самоков, разположена в югозападната България между няколко планини, на 950 м надморска височина.
              </p>

              <div className="text-sm text-muted-foreground">
                <p>🚗 60 километра от София</p>
                <p>🏔️ 10 км от Боровец</p>
                <p>🛒 100 м до магазин</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
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
          <div className="w-full pt-10">
            <iframe width="100%" height="600" frameBorder="0" scrolling="no"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=42.313505,%2023.516860+(%D0%9A%D1%8A%D1%89%D0%B0%20%D0%B7%D0%B0%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%20%D0%A1%D0%B0%D0%BD%D1%8F)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">mesurer la population
                sur une carte</a></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;