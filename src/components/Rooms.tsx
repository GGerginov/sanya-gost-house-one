import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import room1 from '../assets/room-1.jpg';
import room2 from '../assets/room-2.jpg';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Двойна стая с планинска гледка",
      description: "Просторна двойна стая с удобно легло и невероятна гледка към планината",
      image: room1,
      features: ["Двойно легло", "Планинска гледка", "Собствена баня", "WiFi"]
    },
    {
      id: 2,
      name: "Уютна всекидневна",
      description: "Комфортна всекидневна с камина за приятни вечери",
      image: room2,
      features: ["Камина", "Удобни места за сядане", "TV", "Релакс зона"]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Нашите стаи
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Комфортни и уютни помещения, създадени за вашата почивка
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{room.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {room.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;