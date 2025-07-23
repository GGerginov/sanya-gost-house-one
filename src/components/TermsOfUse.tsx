import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsOfUseProps {
  children: React.ReactNode;
}

const TermsOfUse = ({ children }: TermsOfUseProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Условия за ползване</DialogTitle>
          <DialogDescription>
            Общи условия за ползване на услугите на Къща за гости Саня
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Общи условия</h3>
              <p>
                Настоящите условия регулират отношенията между Къща за гости Саня и клиентите 
                при ползване на предлаганите услуги по настаняване.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Резервации</h3>
              <p className="mb-2">При правене на резервация:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Резервацията се потвърждава след получаване на депозит</li>
                <li>Депозитът възлиза на 30% от общата сума</li>
                <li>Останалата сума се заплаща при настаняване</li>
                <li>Резервацията се счита за валидна след писмено потвърждение</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Check-in и Check-out</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Check-in:</strong> от 14:00 часа</li>
                <li><strong>Check-out:</strong> до 12:00 часа</li>
                <li>Ранно настаняване или късно освобождаване по договаряне</li>
                <li>При закъснение е необходимо предварително уведомяване</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Отмяна на резервация</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Безплатна отмяна до 7 дни преди настаняване</li>
                <li>При отмяна до 3 дни - 50% от депозита се задържа</li>
                <li>При отмяна до 24 часа - 100% от депозита се задържа</li>
                <li>При неявяване - пълната сума се дължи</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Правила за престой</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Тишина между 22:00 и 8:00 часа</li>
                <li>Забранено пушенето в стаите</li>
                <li>Домашни любимци само с предварително съгласие</li>
                <li>Максимален брой гости според капацитета на стаята</li>
                <li>Запазване на чистотата в общите части</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Отговорности</h3>
              <p>
                Гостите носят отговорност за причинени щети на имуществото. 
                Къщата не носи отговорност за изгубени или откраднати лични вещи.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">7. Услуги и удобства</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Безплатен WiFi в цялата сграда</li>
                <li>Безплатен паркинг</li>
                <li>Достъп до градина и барбекю</li>
                <li>Кухненски принадлежности</li>
                <li>Почистване при заминаване</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">8. Контакти за връзка</h3>
              <p>
                За въпроси и резервации:
              </p>
              <p className="mt-2">
                <strong>Телефон:</strong> +359 888 123 456<br />
                <strong>Имейл:</strong> info@kasha-sanya.bg<br />
                <strong>Работно време:</strong> 9:00 - 21:00 часа
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">9. Приложимо право</h3>
              <p>
                Настоящите условия се регулират от българското законодателство. 
                Всички спорове се решават по реда на българските закони.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfUse;