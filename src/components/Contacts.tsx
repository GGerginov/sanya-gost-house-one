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
                    <p className="text-muted-foreground">+359 884 20 80 38</p>
                    <p className="text-muted-foreground">+359 884 88 51 14</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">guesthousesanya@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Viber</h4>
                    <p className="text-muted-foreground">+359 884 20 80 38</p>
                    <p className="text-muted-foreground">+359 884 88 51 14</p>
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





                {/*<div className="mt-6 p-4 bg-accent/20 rounded-lg">*/}
                {/*  <h4 className="font-semibold text-foreground mb-2">*/}
                {/*    Специални оферти*/}
                {/*  </h4>*/}
                {/*  <p className="text-sm text-muted-foreground">*/}
                {/*    При резервация за повече от 3 нощувки - 10% отстъпка!*/}
                {/*  </p>*/}
                {/*</div>*/}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;