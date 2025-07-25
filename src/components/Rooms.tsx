import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import LazyImage from './LazyImage';
import room1 from '../assets/room-1.jpg';

const Rooms = () => {
  const apartmentFeatures = [
    "Удобно двойно легло в спалнята",
    "Разтегателни диван и фотьойл, масичка – в дневната",
    "Функционален санитарен възел",
    "Телевизор във всяка стая с цифрова телевизия и достъп до богата видеотека с най-новите заглавия в киното",
    "WiFi",
    "Хладилник",
    "Ютия, дъска за гладене, сушилка за дрехи, кана за топла вода, чаши",
    "Кърпи и халати, сешоар за коса, шампоанчета и сапунчета"
  ];

  const barbecueFeatures = [
    "Просторна зала с удобни маси - капацитет 24-30 души",
    "Камина",
    "Напълно оборудвана кухня – фурна, микровълнова, хладилник, съдомиялна, кафемашина на капсули, посуда (тави, тенджери, чаши, чинии, купи, кани, прибори и пр.)",
    "Телевизор",
    "Озвучителна система – колона и микрофони, възможност за свързване към различни устройства, радио, външни носители и пр.",
    "Санитарен възел",
    "Навес с чешма, работна площ и две барбекюта за приготвяне на храна – едното на газ, другото на дърва",
    "Настолни игри – шах, табла, карти и пр."
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Apartments Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Нашите апартаменти
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Къщата разполага с 4 уютни двустайни апартамента, състоящи се от спалня, дневна и самостоятелен санитарен възел.
              </p>
            </div>

            <Card className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <LazyImage 
                  src={room1} 
                  alt="Апартамент"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Апартамент:</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {apartmentFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Barbecue Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Барбекю
              </h2>
            </div>

            <Card className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {barbecueFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;