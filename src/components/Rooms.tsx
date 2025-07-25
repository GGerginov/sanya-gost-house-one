import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import room1 from '../assets/room-1.jpg';
import room2 from '../assets/room-2.jpg';
import LazyImage from './LazyImage';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [modalSlide, setModalSlide] = useState(0);

  const rooms = [
    {
      id: 1,
      name: "Двойна стая с планинска гледка",
      description: "Просторна двойна стая с удобно легло и невероятна гледка към планината",
      images: [room1, room1, room1], // В реалност тук ще са различни снимки на стаята
      features: ["Двойно легло", "Планинска гледка", "Собствена баня", "WiFi"]
    },
    {
      id: 2,
      name: "Уютна всекидневна",
      description: "Комфортна всекидневна с камина за приятни вечери",
      images: [room2, room2, room2], // В реалност тук ще са различни снимки на стаята
      features: ["Камина", "Удобни места за сядане", "TV", "Релакс зона"]
    }
  ];

  const openRoomModal = (roomIndex: number) => {
    setSelectedRoom(roomIndex);
    setModalSlide(0);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  const goToPrevious = () => {
    if (selectedRoom !== null) {
      const currentRoom = rooms[selectedRoom];
      setModalSlide((prev) => 
        prev === 0 ? currentRoom.images.length - 1 : prev - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedRoom !== null) {
      const currentRoom = rooms[selectedRoom];
      setModalSlide((prev) => (prev + 1) % currentRoom.images.length);
    }
  };

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
          {rooms.map((room, roomIndex) => (
            <Card 
              key={room.id} 
              className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300 cursor-pointer"
              onClick={() => openRoomModal(roomIndex)}
            >
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={room.images[0]} 
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

        {/* Room Modal with Slider */}
        {selectedRoom !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl max-h-full bg-background rounded-lg" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 z-30 text-foreground bg-background/80 rounded-full p-2 hover:bg-muted transition-colors"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {rooms[selectedRoom].name}
                  </h3>
                  <p className="text-muted-foreground">
                    {rooms[selectedRoom].description}
                  </p>
                </div>

                {/* Modal Slider */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${modalSlide * 100}%)` }}
                  >
                    {rooms[selectedRoom].images.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <LazyImage 
                          src={image}
                          alt={`${rooms[selectedRoom].name} - снимка ${index + 1}`}
                          className="w-full h-[60vh] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Navigation Arrows */}
                {rooms[selectedRoom].images.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
                      aria-label="Предишна снимка"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
                      aria-label="Следваща снимка"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Modal Slide Indicators */}
                    <div className="flex justify-center space-x-2 mb-4">
                      {rooms[selectedRoom].images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setModalSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === modalSlide 
                              ? 'bg-primary scale-125' 
                              : 'bg-muted-foreground hover:bg-primary/70'
                          }`}
                          aria-label={`Отиди на снимка ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}

                {/* Room Features */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Удобства:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {rooms[selectedRoom].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;