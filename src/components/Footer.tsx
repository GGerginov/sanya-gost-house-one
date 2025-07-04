import { Phone, Mail, MapPin, Facebook, Instagram, MessageSquare } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Къща за гости Саня</h3>
            <p className="text-primary-foreground/80 mb-4">
              Уютно място за почивка в сърцето на българската планина. 
              Перфектно бягство от градския шум.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Viber"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Начало
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('rooms')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Стаи
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('amenities')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Удобства
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Локация
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacts')}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Контакти
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+359 888 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">info@kasha-sanya.bg</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-primary-foreground/80">
                  с. Примерно село<br />
                  общ. Примерна община
                </span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Полезна информация</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Check-in: 14:00</li>
              <li>• Check-out: 12:00</li>
              <li>• Безплатен WiFi</li>
              <li>• Безплатен паркинг</li>
              <li>• Домашни любимци: по договаряне</li>
              <li>• Работим: 9:00 - 21:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Къща за гости Саня. Всички права запазени.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Политика за поверителност
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Условия за ползване
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;