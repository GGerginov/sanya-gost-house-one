import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyProps {
  children: React.ReactNode;
}

const PrivacyPolicy = ({ children }: PrivacyPolicyProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Политика за поверителност</DialogTitle>
          <DialogDescription>
            Информация за обработка на лични данни в Къща за гости Саня
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Общи положения</h3>
              <p>
                Къща за гости Саня зачита вашата поверителност и се ангажира да защитава вашите лични данни. 
                Тази политика за поверителност обяснява как събираме, използваме и защитаваме вашата информация 
                при използване на нашите услуги.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">2. Събиране на данни</h3>
              <p className="mb-2">Събираме следните видове информация:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Име и фамилия</li>
                <li>Телефонен номер</li>
                <li>Имейл адрес</li>
                <li>Данни за резервация</li>
                <li>Специални изисквания</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">3. Използване на данните</h3>
              <p className="mb-2">Вашите данни се използват за:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Обработка на резервации</li>
                <li>Комуникация относно вашия престой</li>
                <li>Подобряване на нашите услуги</li>
                <li>Изпращане на промоционални съобщения (с ваше съгласие)</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">4. Защита на данните</h3>
              <p>
                Прилагаме подходящи технически и организационни мерки за защита на вашите лични данни 
                срещу неоторизиран достъп, промяна, разкриване или унищожаване.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">5. Споделяне с трети страни</h3>
              <p>
                Не продаваме, търгуваме или по друг начин прехвърляме вашите лични данни на външни 
                страни без ваше изрично съгласие, освен в случаите предвидени от закона.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">6. Вашите права</h3>
              <p className="mb-2">Имате право на:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Достъп до вашите лични данни</li>
                <li>Корекция на неточни данни</li>
                <li>Изтриване на данни</li>
                <li>Ограничаване на обработката</li>
                <li>Възражение срещу обработката</li>
                <li>Преносимост на данните</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">7. Контакти</h3>
              <p>
                За въпроси относно тази политика за поверителност можете да се свържете с нас на:
              </p>
              <p className="mt-2">
                <strong>Имейл:</strong> info@kasha-sanya.bg<br />
                <strong>Телефон:</strong> +359 888 123 456
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">8. Промени</h3>
              <p>
                Запазваме си правото да актуализираме тази политика за поверителност. 
                Препоръчваме периодично да преглеждате тази страница за евентуални промени.
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;