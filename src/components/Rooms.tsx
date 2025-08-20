import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
// Use public URLs for assets instead of imports
import LazyImage from "@/components/LazyImage.tsx";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [modalSlide, setModalSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<number>(0);

  const rooms = [
    {
      id: 1,
      name: "Комфортен двустаен апартамент с планинска гледка",
      description: "",
      images: [
        "/assets/room/DSC_3507.jpg",
        "/assets/room/DSC_3512.jpg", 
        "/assets/room/DSC_3516.jpg",
        "/assets/room/DSC_3501.jpg",
        "/assets/room/DSC_3503.jpg",
        "/assets/room/DSC_3506.jpg",
        "/assets/room/DSC_3525.jpg"
      ],
      features: ["Удобно двойно легло в спалнята", "Разтегателни диван и фотьойл, масичка – в дневната", "Функционален санитарен възел", "WiFi","Хладилник",
        "Ютия, дъска за гладене, сушилка за дрехи, кана за топла вода, чаши",
        "Кърпи и халати, сешоар за коса, шампоанчета и сапунчета"]
    },
    {
      id: 2,
      name: "Просторно барбекю",
      description: "",
      images: [
        "/assets/mehana/DSC_3489.jpg",
        "/assets/mehana/DSC_3475.jpg", 
        "/assets/mehana/DSC_3476.jpg",
        "/assets/mehana/DSC_3477.jpg",
        "/assets/mehana/DSC_3478.jpg",
        "/assets/mehana/DSC_3487.jpg",
        "/assets/mehana/DSC_3488.jpg",
        "/assets/mehana/DSC_3490.jpg",
        "/assets/mehana/DSC_3491.jpg",
        "/assets/mehana/DSC_3492.jpg",
        "/assets/mehana/DSC_3493.jpg"
      ],
      features: ["Просторна зала с удобни маси - капацитет 24-30 души", "Камина", "Напълно оборудвана кухня",
        "Озвучителна система – колона и микрофони, възможност за свързване към различни устройства",
      "Навес с чешма, работна площ и две барбекюта за приготвяне на храна"]
    }
  ];

  const openRoomModal = (roomIndex: number) => {
    setSelectedRoom(roomIndex);
    setModalSlide(0);
    setLoadedImages(1); // Start with first image
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setLoadedImages(0);
  };

  // Sequential image loading effect
  useEffect(() => {
    if (selectedRoom !== null && loadedImages > 0) {
      const currentRoom = rooms[selectedRoom];
      if (loadedImages < currentRoom.images.length) {
        const timer = setTimeout(() => {
          setLoadedImages(prev => prev + 1);
        }, 300); // Load next image after 300ms
        
        return () => clearTimeout(timer);
      }
    }
  }, [selectedRoom, loadedImages, rooms]);

  const goToPrevious = () => {
    if (selectedRoom !== null) {
      setModalSlide((prev) =>
        prev === 0 ? loadedImages - 1 : prev - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedRoom !== null) {
      setModalSlide((prev) => (prev + 1) % loadedImages);
    }
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Нашите апартаменти
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Къщата разполага с четири уютни двустайни апартамента, състоящи се от спалня, дневна и самостоятелен санитарен възел.
              </p>
            </div>

            <Card
                key={rooms[0].id}
                className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 cursor-pointer flex-1 hover:scale-105 hover:-translate-y-2"
                onClick={() => openRoomModal(0)}
            >
              <div className="aspect-video overflow-hidden relative group">
                <LazyImage
                    src={rooms[0].images[0]}
                    alt={rooms[0].name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

          <div className="flex flex-col">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Нашето барбекю
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Тук ще откриете уютна обстановка с камина и много място за весели събирания. Подходяща е както за семейни вечери, така и за празненства с приятели.
              </p>
            </div>

            <Card
                key={rooms[1].id}
                className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 cursor-pointer flex-1 hover:scale-105 hover:-translate-y-2"
                onClick={() => openRoomModal(1)}
            >
              <div className="aspect-video overflow-hidden relative group">
                <LazyImage
                    src={rooms[1].images[0]}
                    alt={rooms[1].name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <div className="relative bg-background rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
              {/* Close button */}
              <button
                className="absolute top-4 right-4 z-30 text-foreground bg-background/80 rounded-full p-2 hover:bg-muted transition-colors"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${modalSlide * 100}%)` }}
                >
                  {rooms[selectedRoom].images.slice(0, loadedImages).map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <LazyImage
                        src={image}
                        alt={`${rooms[selectedRoom].name} - снимка ${index + 1}`}
                        className="w-full h-[50vh] sm:h-[80vh] object-contain bg-muted"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {rooms[selectedRoom].images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                    aria-label="Предишна снимка"
                  >
                    <ChevronLeft className="w-6 h-6 transition-transform duration-200 hover:-translate-x-0.5" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                    aria-label="Следваща снимка"
                  >
                    <ChevronRight className="w-6 h-6 transition-transform duration-200 hover:translate-x-0.5" />
                  </button>

                  {/* Modal Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                    {rooms[selectedRoom].images.slice(0, loadedImages).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setModalSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === modalSlide 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Отиди на снимка ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;