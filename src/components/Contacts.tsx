import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Свържете се с нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готови сме да отговорим на всички ваши въпроси
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Контактна информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Телефон</h4>
                    <p className="text-muted-foreground">+359 888 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@kasha-sanya.bg</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Viber/WhatsApp</h4>
                    <p className="text-muted-foreground">+359 888 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Работно време</h4>
                    <p className="text-muted-foreground">
                      Всеки ден: 9:00 - 21:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-warm">
              <CardHeader>
                <CardTitle className="text-primary">Резервация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  За резервация или допълнителна информация, моля свържете се с нас 
                  по телефона или изпратете email. Ще се радваме да ви посрещнем!
                </p>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-primary hover:bg-primary-glow"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Обади се сега
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    size="lg"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Изпрати email
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Специални оферти
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    При резервация за повече от 3 нощувки - 10% отстъпка!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;