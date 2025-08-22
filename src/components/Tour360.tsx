import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Maximize2, Minimize2, Sofa, Bed, ChefHat, Bath, TreePine, Waves } from 'lucide-react';

// Video URLs from public assets
const apartmentVideo = '/assets/Apartment.mp4';
const relaxVideo = '/assets/Relax.mp4';
const mehanaVideo = '/assets/Mehana.mp4';
const kidsVideo = '/assets/KidsPlace.mp4';

const Tour360 = () => {
    const [activeRoom, setActiveRoom] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleFullscreen = async () => {
        if (!containerRef.current) return;

        try {
            if (!document.fullscreenElement) {
                await containerRef.current.requestFullscreen();
                setIsFullscreen(true);
            } else {
                await document.exitFullscreen();
                setIsFullscreen(false);
            }
        } catch (error) {
            console.error('Error toggling fullscreen:', error);
        }
    };

    const handlePlay = () => {
        setIsVideoPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const rooms = [
        {
            title: "Апартамент",
            description: "Удобен двустаен апартамент, създаден с грижа за комфорта на нашите гости",
            icon: Bed,
            videoUrl: apartmentVideo
        },
        {
            title: "Кът за отдих",
            description: "Луксозното външно джакузи, шезлонгите и кътовете за сядане в двор гарантират приятно и зареждащо преживяване",
            icon: Waves,
            videoUrl: relaxVideo
        },
        {
            title: "Барбекю",
            description: "Напълно оборудваното барбекю е идеално за тържества",
            icon: ChefHat,
            videoUrl: mehanaVideo
        },
        {
            title: "Детски кът",
            description: "Забавна детска площадка, батут и много игри за малките ни гости",
            icon: TreePine,
            videoUrl: kidsVideo
        }
    ];

    const handleRoomChange = (roomIndex: number) => {
        setActiveRoom(roomIndex);
        setIsVideoPlaying(false); // Reset video state when changing rooms
    };

    return (
        <section id="tour360" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        360° Виртуална Обиколка
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Разгледайте всяко кътче от нашата къща за гости с интерактивна 360° обиколка
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main 360 Viewer */}
                    <div className="lg:col-span-2">
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <div
                                    ref={containerRef}
                                    className="relative aspect-video bg-muted flex items-center justify-center"
                                >
                                    {!isVideoPlaying ? (
                                        /* Placeholder for 360 viewer */
                                        <div className="text-center">
                                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Play className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{rooms[activeRoom].title}</h3>
                                            <p className="text-muted-foreground mb-4">{rooms[activeRoom].description}</p>
                                            <div className="flex gap-2 justify-center">
                                                <Button onClick={handlePlay} className="gap-2">
                                                    <Play className="w-4 h-4" />
                                                    Пусни обиколката
                                                </Button>
                                                <Button variant="outline" className="gap-2" onClick={toggleFullscreen}>
                                                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                                    {isFullscreen ? 'Излез от пълен екран' : 'Пълен екран'}
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="relative w-full h-full">
                                            <video
                                                ref={videoRef}
                                                className="w-full h-full object-cover"
                                                controls
                                                preload="metadata"
                                                onEnded={() => setIsVideoPlaying(false)}
                                                key={activeRoom} // Force re-render when room changes
                                            >
                                                <source src={rooms[activeRoom].videoUrl} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            <div className="absolute top-4 right-4 z-10">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="gap-2 bg-black/50 text-white border-white/20 hover:bg-black/70"
                                                    onClick={toggleFullscreen}
                                                >
                                                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                                    {isFullscreen ? 'Излез' : 'Пълен екран'}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Room Selection */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold mb-4">Изберете стая</h3>
                        {rooms.map((room, index) => (
                            <Card
                                key={index}
                                className={`cursor-pointer transition-all hover:shadow-md ${
                                    activeRoom === index ? 'ring-2 ring-primary' : ''
                                }`}
                                onClick={() => handleRoomChange(index)}
                            >
                                <CardContent className="p-4">
                                    <div className="flex gap-3">
                                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                                            <room.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm">{room.title}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {room.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Navigation Hints */}

            </div>
        </section>
    );
};

export default Tour360;