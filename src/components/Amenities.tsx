import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Wifi, Car, Coffee, TreePine, Utensils, Bath } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Безплатен WiFi",
      description: "Високоскоростен интернет достъп в цялата къща"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Паркинг",
      description: "Безплатно паркомясто за всички гости"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Кухня",
      description: "Напълно оборудвана кухня за готвене"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Градина",
      description: "Красива градина с място за релакс"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Барбекю",
      description: "Място за барбекю и хранене навън"
    },
    {
      icon: <Bath className="w-8 h-8" />,
      title: "Баня",
      description: "Модерни бани с топла вода"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Удобства
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всичко необходимо за комфортен престой
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary w-fit">
                  {amenity.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{amenity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;