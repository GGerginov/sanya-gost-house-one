import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import room1 from '../../public/assets/room/DSC_3507.jpg';
import room2 from '../../public/assets/room/DSC_3512.jpg';
import room4 from '../../public/assets/room/DSC_3516.jpg';
import livingRoom1 from '../../public/assets/room/DSC_3501.jpg'
import livingRoom2 from '../../public/assets/room/DSC_3503.jpg'
import livingRoom3 from '../../public/assets/room/DSC_3506.jpg'
import livingRoom4 from '../../public/assets/room/DSC_3525.jpg'

import mehana1 from "../../public/assets/mehana/DSC_3475.jpg";
import mehana2 from "../../public/assets/mehana/DSC_3476.jpg";
import mehana3 from "../../public/assets/mehana/DSC_3477.jpg";
import mehana4 from "../../public/assets/mehana/DSC_3478.jpg";
import mehana5 from "../../public/assets/mehana/DSC_3487.jpg";
import mehana6 from "../../public/assets/mehana/DSC_3488.jpg";
import mehana7 from "../../public/assets/mehana/DSC_3489.jpg";
import mehana8 from "../../public/assets/mehana/DSC_3490.jpg";
import mehana9 from "../../public/assets/mehana/DSC_3491.jpg";
import mehana10 from "../../public/assets/mehana/DSC_3492.jpg";
import mehana11 from "../../public/assets/mehana/DSC_3493.jpg";
import LazyImage from "@/components/LazyImage.tsx";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [modalSlide, setModalSlide] = useState(0);

  const rooms = [
    {
      id: 1,
      name: "Комфортен двустаен апартамент с планинска гледка",
      description: "",
      images: [room1, room2,room4,livingRoom1, livingRoom2, livingRoom3,livingRoom4],
      features: ["Удобно двойно легло в спалнята", "Разтегателни диван и фотьойл, масичка – в дневната", "Функционален санитарен възел", "WiFi","Хладилник",
        "Ютия, дъска за гладене, сушилка за дрехи, кана за топла вода, чаши",
        "Кърпи и халати, сешоар за коса, шампоанчета и сапунчета"]
    },
    {
      id: 2,
      name: "Просторно барбекю",
      description: "",
      images: [mehana7,mehana1,mehana2,mehana3,mehana4,mehana5,mehana6,mehana8,mehana9,mehana10,mehana11],
      features: ["Просторна зала с удобни маси - капацитет 24-30 души", "Камина", "Напълно оборудвана кухня",
        "Озвучителна система – колона и микрофони, възможност за свързване към различни устройства",
      "Навес с чешма, работна площ и две барбекюта за приготвяне на храна"]
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
        <div className="grid gap-9 xs:grid-cols-1 md:grid-cols-2">
          <div className="col-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Нашите апартаменти
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Къщата разполага с четири уютни двустайни апартамента, състоящи се от спалня, дневна и самостоятелен санитарен възел.
              </p>
            </div>

            <Card
                key={rooms[0].id}
                className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300 cursor-pointer"
                onClick={() => openRoomModal(0)}
            >
              <div className="aspect-video overflow-hidden">
                <LazyImage
                    src={rooms[0].images[0]}
                    alt={rooms[0].name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{rooms[0].name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {rooms[0].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {rooms[0].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="col-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Нашето барбекю
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Тук ще откриете уютна обстановка с камина и много място за весели събирания. Подходяща е както за семейни вечери, така и за празненства с приятели.
              </p>
            </div>

            <Card
                key={rooms[1].id}
                className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300 cursor-pointer"
                onClick={() => openRoomModal(1)}
            >
              <div className="aspect-video overflow-hidden">
                <LazyImage
                    src={rooms[1].images[0]}
                    alt={rooms[1].name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">{rooms[1].name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {rooms[1].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {rooms[1].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

        </div>




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


              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;